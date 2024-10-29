import { mailSender } from "./mail-sender";
import { envFactory } from "./utils/env";
import { getTemplate } from "./template/password";

describe("mailSender", async () => {
  it("mailSender", async () => {
    const smtpInfo = envFactory().smtp;

    await mailSender({
      log: [],
      mailingInfo: {
        body: getTemplate(),
        from: "no-reply@ddockddock.net",
        target: [
          {
            email: "songjj77@ddockddock.net",
            name: "",
          },
          {
            email: "songjj77@naver.com",
            name: "",
          },
        ],
        title: "이메일 제목",
      },
      smtpInfo,
    }),
      () => {};
  });
});
