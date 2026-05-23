import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Defensive environment check
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "SYSTEM_CONFIG_ERROR: RESEND_API_KEY is not loaded. You MUST restart your Next.js dev server (npm run dev) to load .env.local variables." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { senderId, replyAddress, payloadData } = body;

    if (!senderId || !replyAddress || !payloadData) {
      return NextResponse.json(
        { error: "PACKET_INTEGRITY_COMPROMISED: Missing parameters" },
        { status: 400 }
      );
    }

    // Format the email content to look like a high-end monospace system log
    const emailHtml = `
      <div style="background-color: #0a0a0a; color: #ededed; padding: 24px; font-family: monospace; line-height: 1.6; border: 1px solid #1a1a1a; border-radius: 8px;">
        <div style="border-bottom: 1px solid #222; padding-bottom: 12px; margin-bottom: 20px; color: #00ffcc; font-weight: bold; font-size: 14px;">
          // NEW_TRANSMISSION_RECEIVED [PORTFOLIO_SYSTEM_NET]
        </div>
        <div style="margin-bottom: 12px; font-size: 12px;">
          <strong style="color: #00ffcc;">[SENDER_ID]:</strong> ${senderId}
        </div>
        <div style="margin-bottom: 12px; font-size: 12px;">
          <strong style="color: #00ffcc;">[REPLY_ADDRESS]:</strong> ${replyAddress}
        </div>
        <div style="margin-bottom: 20px; border-top: 1px solid #222; padding-top: 12px; font-size: 12px;">
          <strong style="color: #00ffcc; display: block; margin-bottom: 8px;">[PAYLOAD_DATA]:</strong>
          <pre style="background-color: #050505; border: 1px solid #111; padding: 12px; border-radius: 4px; color: #d4d4d8; white-space: pre-wrap; font-family: monospace; margin: 0; font-size: 11px;">${payloadData}</pre>
        </div>
        <div style="font-size: 10px; color: #555; border-top: 1px solid #222; padding-top: 12px; text-align: right;">
          SYS_TIMESTAMP: ${new Date().toISOString()} | SECURE_GATEWAY_SUCCESS
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Net <onboarding@resend.dev>",
      to: "abubakarxdev@gmail.com",
      subject: `[PORTFOLIO_SYSTEM] Secure Dispatch from ${senderId}`,
      html: emailHtml,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    return NextResponse.json(
      { error: `SYSTEM_INTEGRATION_ERROR: ${err.message}` },
      { status: 500 }
    );
  }
}
