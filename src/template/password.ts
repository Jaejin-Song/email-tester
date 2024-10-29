function replaceVariables(
  template: string,
  variables: { [k: string]: string }
) {
  return template.replace(/\[\[\$\{(.*?)\}\]\]/g, (match, variableName) => {
    return variables[variableName] !== undefined
      ? variables[variableName]
      : match;
  });
}

const variables = {
  code: "123456",
  validInterval: "5",
  year: "2024",
};

export function getTemplate() {
  return replaceVariables(template, variables);
}

export const template = `
<!-- vc-비밀번호-재설정 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>vc-비밀번호-재설정</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <!-- preview text -->
    <div
      style="
        display: none;
        font-size: 1px;
        color: #333333;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    >
      <div>비밀번호 재설정</div>
      <div>아래의 인증 코드를 인증 화면에 입력해주세요.</div>
      <div>인증 유효 시간은 5분 입니다.</div>
    </div>

    <!-- email content -->
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      bgcolor="#eef2ff"
      style="
        width: 100% !important;
        height: 100% !important;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo',
          'Microsoft NeoGothic', 'Droid sans', sans-serif;
      "
    >
      <tr>
        <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="600" bgcolor="#ffffff">
            <tr>
              <td>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <img
                        src="https://storage.googleapis.com/ddock-mail-img/vcworks-mail-01.png"
                        alt="vcworks-mail-03"
                        width="600"
                        height="200"
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 20px"></td>
            </tr>
            <tr>
              <td style="padding-right: 20px; padding-left: 20px">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td
                      class="title"
                      style="color: #212529; font-size: 24px; font-style: normal; font-weight: 700; line-height: 34px"
                    >
                      비밀번호 재설정
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="content"
                      style="
                        padding-top: 20px;
                        color: #212529;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 28px;
                      "
                    >
                      아래의 인증 코드를 인증 화면에 입력해주세요.
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="content"
                      style="color: #212529; font-size: 16px; font-style: normal; font-weight: 400; line-height: 28px"
                    >
                      인증 유효 시간은 5분 입니다.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 16px"></td>
                  </tr>
                  <tr>
                    <td>
                      <table border="0" cellpadding="0" cellspacing="0" width="320px">
                        <tr>
                          <td
                            style="
                              text-align: center;
                              padding-top: 12px;
                              padding-bottom: 12px;
                              padding-right: 40px;
                              padding-left: 40px;
                              gap: 10px;
                              border-radius: 8px;
                              background: #f8f9fa;
                              color: #212529;
                              font-size: 24px;
                              font-style: normal;
                              font-weight: 700;
                              line-height: 34px;
                            "
                          >
                            123456
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 16px">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="320px"
                        height="48px"
                        style="
                          padding-top: 8px;
                          padding-bottom: 8px;
                          padding-right: 12px;
                          padding-left: 12px;
                          border-radius: 12px;
                          background: #635bff;
                          text-decoration: none;
                          box-sizing: border-box;
                        "
                      >
                        <tr>
                          <td style="text-align: center">
                            <a
                              id="d-anchor"
                              name="d-anchor"
                              target="_blank"
                              style="
                                color: #ffffff;
                                text-align: center;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 22px;
                                text-decoration: none;
                                cursor: pointer;
                              "
                              >비밀번호 재설정</a
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- <tr>
                    <td style="padding-top: 20px">
                      클릭해주세요.
                    </td>
                  </tr> -->
                  <tr>
                    <td style="padding-top: 40px"></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style="padding-top: 20px; border-top-width: 1px; border-top-style: solid; border-top-color: #e9ecef"
              ></td>
            </tr>
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="560">
                  <tr>
                    <td
                      class="footer-company"
                      style="color: #868e96; font-size: 14px; font-style: normal; font-weight: 700; line-height: 21px"
                    >
                      똑똑(주)
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="footer-text"
                      style="
                        padding-top: 4px;
                        color: #868e96;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 18px;
                      "
                    >
                      서울특별시 성동구 성수동1가 뚝섬로1길
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="footer-text"
                      style="color: #868e96; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px"
                    >
                      © 2024 ddockddock. All rights reserved.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 48px"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

`;
