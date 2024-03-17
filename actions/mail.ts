"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "hardiksadhu472@gmail.com",
    pass: "pryv ceyy xmai xeoh ",
  },
});

export const sentReportCampaign = async (
  subject: string,
  email: string,
  message: string,
  link: string
) => {
  const isEmailSent = await transporter.sendMail({
    to: "hsexplain1@gmail.com",
    from: "hardiksadhu472@gmail.com",
    subject: subject,
    text: `
    Request from ${email} with link: ${link},
    ${message}
    `,
  });
  if (isEmailSent.messageId) {
    return true;
  } else {
    return false;
  }
};
