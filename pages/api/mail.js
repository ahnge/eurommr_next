// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// domain.com/api/mail
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  console.log(req.body);

  const message = `
    Name: ${req.body.name}\r\n
    Phone number: ${req.body.phoneNumber}\r\n
    Message: ${req.body.message}
  `;

  const data = {
    to: "ahnge226@gmail.com",
    from: "eurommr@eurommr.com",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send(data);
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ status: "It is Ok" });
};

export default handler;
