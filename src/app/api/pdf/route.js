export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return new Response('URL parameter is required', { status: 400 });
    }

    // Validate that it's an archive.org URL
    if (!url.includes('archive.org')) {
      return new Response('Only archive.org URLs are allowed', { status: 403 });
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      return new Response('Failed to fetch PDF', { status: response.status });
    }

    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': arrayBuffer.byteLength,
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('PDF fetch error:', error);
    return new Response('Failed to fetch PDF', { status: 500 });
  }
}
