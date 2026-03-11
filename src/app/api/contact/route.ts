import { NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://n8n.bunniemonki.com/webhook/skin-aesthetic-forms';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error(`[contact] Webhook ${res.status}: ${body}`);
      return NextResponse.json(
        { error: 'Webhook failed', status: res.status, detail: body },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Network error:', err);
    return NextResponse.json(
      { error: 'Network error', detail: String(err) },
      { status: 502 },
    );
  }
}
