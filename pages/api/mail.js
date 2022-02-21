// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// domain.com/api/mail

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Phone number: ${body.phone_number}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "ahnge226@gmail.com",
    from: "eurommr@eurommr.com",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail
    .send(data)
    .then((res) => {
      console.log(res[0].statusCode);
      console.log(res[0].headers);
    })
    .catch((err) => console.log(err));

  res.status(200).json({ status: "OK" });
}
