import nodemailer from "nodemailer";

export interface EmailRequestDocument {
  smtpInfo: {
    host: string;
    port: number;
    user: string;
    password: string;
  };
  mailingInfo: {
    target: {
      email: string;
      name: string;
    }[];
    from: string;
    title: string;
    body: string;
  };
  log: {
    time: Date;
    state: "success" | "error";
    message: string;
  }[];
}

export const mailSender = async (data: EmailRequestDocument) => {
  try {
    const { host, port, ...auth } = data.smtpInfo;
    const mailingInfo = data.mailingInfo;
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      auth: {
        user: auth.user,
        pass: auth.password,
      },
    });
    const mailOptions = {
      from: mailingInfo.from,
      to: mailingInfo.target.map((el) => el.email),
      subject: mailingInfo.title,
      html: mailingInfo.body,
    };
    const info = await transporter.sendMail(mailOptions);

    let log = `발송 성공 : ${info.accepted.length} / ${info.envelope.to.length}`;

    if (info.accepted.length != info.envelope.to.length) {
      log =
        log +
        `, 발송 실패 주소 : ${
          info.pending == undefined ? "" : info.pending + " "
        }${info.rejected}`;
    }

    return log;
  } catch (e) {
    console.log(e);
    return false;
  }
};
