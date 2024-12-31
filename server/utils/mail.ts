import { Resend } from 'resend'

export async function sendMail(from: string, text: string) {
	const runtimeConfig = useRuntimeConfig()

	const resend = new Resend(runtimeConfig.mail.password)
	await resend.emails.send({
		from: runtimeConfig.mail.sender,
		to: runtimeConfig.mail.to,
		subject: 'Mensaje PurpleSheep',
		text: `${text} <${from}>`,
	})
}
