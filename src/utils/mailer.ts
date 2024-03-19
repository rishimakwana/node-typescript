import nodemailer from "nodemailer";
import MESSAGE from '../helper/message';
import { Email } from '../config';
import { UserPass } from '../config';


// Configure nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Email,
        pass: UserPass,
    },
});

// Middleware function to send a verification code email
export const sendEmail = async (toEmail: any, verificationLink: any, subject: any) => {
    const mailOptions = {
        from: Email,
        to: toEmail,
        subject: subject,
        text: `Click this link below: ${verificationLink}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(MESSAGE.EMAIL_SENT);
    } catch (error) {
        throw new Error(MESSAGE.EMAIL_SENT_ERROR);
    }
};
