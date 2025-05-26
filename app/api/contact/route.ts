import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont obligatoires" }, { status: 400 })
    }

    // Configuration du transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Contenu de l'email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "erwannn.pro@gmail.com",
      replyTo: email,
      subject: `Contact Portfolio: ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
