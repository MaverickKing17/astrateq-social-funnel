import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Resend API Subscription Route
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email, province, feedback, score } = req.body;

      if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ success: false, error: "A valid email address is required." });
      }

      const apiKey = process.env.RESEND_API_KEY;

      if (!apiKey || apiKey.trim() === "" || apiKey === '""') {
        console.log(`[Resend Mock Subscriber]: Email: ${email}, Province: ${province || 'ON'}, Score: ${score || 'N/A'}`);
        return res.json({
          success: true,
          mode: "simulated",
          message: "Subscription saved! (Set RESEND_API_KEY in Secrets to dispatch live emails)",
          subscriber: { email, province: province || "ON" }
        });
      }

      // Lazy Resend SDK Client Initialization
      const resend = new Resend(apiKey);

      const emailResult = await resend.emails.send({
        from: "Astrateq Research <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Astrateq Automotive Software Research Updates",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b1324; color: #f8fafc; padding: 24px; borderRadius: 12px; border: 1px solid #1e293b;">
            <div style="border-bottom: 2px solid #22d3ee; padding-bottom: 12px; margin-bottom: 20px;">
              <h1 style="color: #22d3ee; margin: 0; font-size: 24px;">ASTRATEQ</h1>
              <p style="color: #94a3b8; font-size: 11px; margin: 4px 0 0 0; text-transform: uppercase; font-weight: bold;">Automotive Software Intelligence • Research Cohort</p>
            </div>
            
            <h2 style="color: #ffffff; font-size: 18px; margin-top: 0;">Welcome to Astrateq Research Updates!</h2>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
              Thank you for subscribing to Astrateq's privacy-first automotive software intelligence research. You are now part of our pre-launch driver focus benchmarking cohort.
            </p>
            
            <div style="background-color: #0f172a; border-left: 4px solid #22d3ee; padding: 14px; margin: 20px 0; border-radius: 4px;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #22d3ee; font-weight: bold;">SUBSCRIPTION METADATA:</p>
              <p style="margin: 0; font-size: 13px; color: #e2e8f0;">• <strong>Subscriber Email:</strong> ${email}</p>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #e2e8f0;">• <strong>Province / Region:</strong> ${province || "ON"}</p>
              ${score ? `<p style="margin: 4px 0 0 0; font-size: 13px; color: #e2e8f0;">• <strong>Simulation Score:</strong> ${score}/100</p>` : ''}
              ${feedback ? `<p style="margin: 4px 0 0 0; font-size: 13px; color: #e2e8f0;">• <strong>Feedback:</strong> "${feedback}"</p>` : ''}
            </div>

            <p style="color: #94a3b8; font-size: 12px; line-height: 1.5; margin-top: 24px;">
              <strong>Zero-Telematics Guarantee:</strong> Astrateq software operates strictly in-memory or on local edge hardware without collecting personal location tracking or vehicle telematics.
            </p>

            <div style="border-top: 1px solid #1e293b; padding-top: 16px; margin-top: 24px; text-align: center; color: #64748b; font-size: 11px;">
              Astrateq Automotive Software Intelligence • Toronto, Ontario, Canada
            </div>
          </div>
        `
      });

      if (emailResult.error) {
        console.error("Resend API Error:", emailResult.error);
        return res.status(500).json({
          success: false,
          error: emailResult.error.message || "Failed to send email via Resend API"
        });
      }

      return res.json({
        success: true,
        mode: "live",
        message: "Confirmation email sent via Resend!",
        data: emailResult.data
      });

    } catch (err: any) {
      console.error("Subscription endpoint error:", err);
      return res.status(500).json({ success: false, error: err.message || "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
