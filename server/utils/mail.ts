// eslint-disable-next-line import/default
import nodemailer from 'nodemailer'

const { mail } = useRuntimeConfig()
// eslint-disable-next-line import/no-named-as-default-member
const transporter = nodemailer.createTransport({
	host: mail.host,
	port: mail.port,
	secure: mail.port === 587,
	auth: {
		user: mail.user,
		pass: mail.password,
	},
})

export async function sendMail(from: string, text: string) {
	const info = await transporter.sendMail({
		from: mail.sender,
		to: mail.to,
		subject: 'Mensaje PurpleSheep',
		text: `${text} <${from}>`,
	})

	return info
}
