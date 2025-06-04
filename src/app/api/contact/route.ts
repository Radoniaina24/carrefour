import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Ton email
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou App Password
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "andriambolaradoniainamichael@gmail.com",
      cc: "contact@gateafricagroup.com",
      subject: `📩 Nouvelle contact - Carrefour de l'emploi Madagascar`,
      html: `
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background: #f4f4f4; color: #333;">
      
      <div style="background: #FF5733; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="color: white; margin: 0;">📩 Nouveau message</h2>
      </div>

      <div style="padding: 20px; background: white;">
        <p><strong>👤 Nom complet :</strong> ${name}</p>
        <p><strong>📧 Email :</strong> <a href="mailto:${email}" style="color: #003366; text-decoration: none;">${email}</a></p>
        <p><strong>💬 Message :</strong></p>
        <blockquote style="border-left: 4px solid #003366; padding-left: 10px; margin: 10px 0; color: #555;">${message}</blockquote>
      </div>

      <div style="background: #FF5733; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
        <p style="color: white; font-weight:bold; margin: 0;">Gate Africa Group</p>
      </div>

    </div>
  `,
    };
    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Erreur détaillée:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
