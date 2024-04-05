import { createTransport } from 'nodemailer';
import fetch from 'node-fetch';

export async function handler(event) {
    const requestBody = JSON.parse(event.body);

    // Configure Nodemailer
    const transporter = createTransport({
        service: 'Gmail',
        auth: {
            user: 'poligeniushelp@gmail.com',
            pass: process.env.EMAIL_PASSWORD,
        }
    });

    // Email content
    const mailOptions = {
        from: 'poligeniushelp@gmail.com',
        to: 'marco.97marini@gmail.com',
        subject: 'Downloaded CV',
        text: requestBody.emailText + ` Attività proveniente da: ` + requestBody.country + ' Lingua browser: ' + requestBody.language,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' })
        };
    }
}
