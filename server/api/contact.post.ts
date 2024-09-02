import { Resend } from 'resend'

interface EmailBody {
  name: string
  email: string
  message?: string
}
export default defineEventHandler(async (event) => {
  const body = await readBody<EmailBody>(event)
  const config = useRuntimeConfig()

  const resend = new Resend(config.resendKey)

  try {
    const response = await resend.emails.send({
      from: 'contato@nicolaswalcker.com',
      to: ['walcker_@outlook.com'],
      subject: `Contato de ${body.name} <${body.email}>`,
      text: `${body.message}`,
    })

    return {
      status: 'success',
      data: JSON.stringify(response),
    }
  }
  catch (error: unknown) {
    return {
      status: 'error',
      message: (error as Error).message,
    }
  }
})
