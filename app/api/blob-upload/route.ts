import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: Request) {
	try {
		const formData = await request.formData();
		const file = formData.get('file');

		if (!(file instanceof File)) {
			return NextResponse.json({ error: 'No file provided' }, { status: 400 });
		}

		const fileName = `${crypto.randomUUID()}-${file.name}`;
		const token = process.env.BLOB_READ_WRITE_TOKEN;

		const blob = await put(fileName, file, {
			access: 'public',
			// token is required locally; in Vercel it can be omitted
			...(token ? { token } : {}),
		});

		return NextResponse.json({
			url: blob.url,
			size: file.size,
			key: blob.pathname,
			bucket: 'vercel-blob',
		});
	} catch (error) {
		console.error('Blob upload error:', error);
		return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
	}
} 