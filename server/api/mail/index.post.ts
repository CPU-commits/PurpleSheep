export default defineEventHandler(async (event) => {
	const body = await readBody<{
		to: string
		text: string
	}>(event)
	await sendMail(body.to, body.text)

	return {
		success: true,
	}
})
