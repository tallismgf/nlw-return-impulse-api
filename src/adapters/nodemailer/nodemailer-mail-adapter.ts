import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4afcb385ebcdda",
    pass: "e012297985b7a7"
  }
});


export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Tallis marques <tallismgf@gmail.com>',
      subject,
      html: body
    })
  }
}

