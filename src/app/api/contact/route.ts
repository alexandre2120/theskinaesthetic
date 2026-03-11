import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  const res = await fetch('https://n8n.bunniemonki.com/webhook/skin-aesthetic-forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Webhook failed' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
