import {NextRequest} from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {

        const {name, email, company, contact, message} = await req.json();

        const mailBody = {
            from: email,
            subject: `New Contact Form Submission from ${name}`,
            message: `
    Name: ${name}
    Email: ${email}
    ${company ? `Company: ${company}` : ""}
    Contact: ${contact}
    
    Message:
    ${message}
  `,
        };


        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use SMTP config
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // App password or OAuth token
            },
        });

        // Email options
        const mailOptions = {
            from: mailBody.from,
            to: process.env.EMAIL_USER,
            subject: mailBody.subject,
            text: mailBody.message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return Response.json({success: true, message: "Email sent successfully"});
    } catch (error) {
        return Response.json({success: false, error: error instanceof Error ? error.message : "An unknown error occurred"}, {status: 500});
    }
}
