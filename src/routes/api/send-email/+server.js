import nodemailer from 'nodemailer';
import {GMAIL_USER_NAME} from "$env/static/private";
import {GMAIL_PASSWORD} from "$env/static/private";
import {RECEIVERS_EMAIL_ADDRESS} from "$env/static/private";

export async function POST({ request }) {
	const { firstName, lastName, email, phoneNumber, message } = await request.json();

	const body = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                    <title>New Contact Message - Shining Vessels Academy</title>
                    </head>
                    <body style="margin:0;padding:0;background-color:#f5f6fa;font-family:Arial, Helvetica, sans-serif;font-size:18px;">

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f6fa;padding:24px 0;">
                        <tr>
                        <td align="center">

                            <!-- Container -->
                            <table width="600" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">

                            <!-- Header -->
                            <tr>
                                <td align="center" style="background-color:#04095d;color:#ffffff;padding:24px;">
                                <h1 style="margin:0;font-size:22px;letter-spacing:0.5px;">New Contact Message From ${firstName} ${lastName}</h1>
                                <p style="margin:4px 0 0;font-size:14px;">Shining Vessels Academy</p>
                                </td>
                            </tr>

                            <!-- Message Content -->
                            <tr>
                                <td style="padding:24px;">
                                <p style="font-size:16px;margin:0 0 18px;color:#333;">
                                    Hello Admin 👋,<br><br>
                                    You’ve received a new contact message from the school website. Below are the details:
                                </p>

                                <!-- Details Table -->
                                <table width="100%" cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:6px;">
                                    <tr>
                                    <td width="35%" style="background:#f9fafb;font-weight:bold;border-bottom:1px solid #e5e7eb;">First Name</td>
                                    <td style="border-bottom:1px solid #e5e7eb;">${firstName}</td>
                                    </tr>
                                    <tr>
                                    <td style="background:#f9fafb;font-weight:bold;border-bottom:1px solid #e5e7eb;">Last Name</td>
                                    <td style="border-bottom:1px solid #e5e7eb;">${lastName}</td>
                                    </tr>
                                    <tr>
                                    <td style="background:#f9fafb;font-weight:bold;border-bottom:1px solid #e5e7eb;">Email</td>
                                    <td style="border-bottom:1px solid #e5e7eb;">${email}</td>
                                    </tr>
                                    <tr>
                                    <td style="background:#f9fafb;font-weight:bold;border-bottom:1px solid #e5e7eb;">Phone Number</td>
                                    <td style="border-bottom:1px solid #e5e7eb;">${phoneNumber}</td>
                                    </tr>
                                    <tr>
                                    <td valign="top" style="background:#f9fafb;font-weight:bold;">Message</td>
                                    <td style="color:#374151;">${message}</td>
                                    </tr>
                                </table>

                                <!-- Footer note -->
                                <p style="margin-top:20px;font-size:14px;color:#555;">
                                    Please reach out to this person if a response is needed.<br>
                                    This message was submitted through the school website's contact form.
                                </p>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td align="center" style="background:#f9fafb;padding:16px;">
                                <p style="font-size:12px;color:#6b7280;margin:0;">
                                    © 2025 Shining Vessels Academy. All rights reserved.
                                </p>
                                </td>
                            </tr>
                            </table>

                        </td>
                        </tr>
                    </table>

                    </body>
                    </html>
`;
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: GMAIL_USER_NAME,
				pass: GMAIL_PASSWORD
			}
		});
		const mailOptions = {
			from: GMAIL_USER_NAME,
			to: RECEIVERS_EMAIL_ADDRESS,
			subject: 'Shining Vessels Academy',
			text: 'Somthing not important',
			html: body,
			inline_css: true,
			tags: [
				'contact',
				'message',
				'admin',
				'school',
				'website',
				'email',
				'form',
				'contact-form',
				'website-form',
				'website-message',
				'website-contact'
			],
			important: true,
			metadata: {
				campaign_id: 'contact-2024',
				user_segment: 'contact'
			},
			auto_text: true
		};

		transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
	} catch (err) {
		return new Response(JSON.stringify({ error: err }), { status: 500 });
	}
}
