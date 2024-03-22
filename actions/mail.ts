"use server";
import { auth } from "@/auth";
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
  link: string,
  commentId: number | undefined
) => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return { error: "Please Login to use this Feature!" };
  }

  let text = `Request from ${email} with link: ${link},
    ${message}
    `;

  if (commentId) {
    text = `Request to remove this comment : ${commentId} from ${email} on this campaign ${link} for this reason ${message}`;
  }

  const isEmailSent = await transporter.sendMail({
    to: "hsexplain1@gmail.com",
    from: "hardiksadhu472@gmail.com",
    subject: subject,
    text,
  });
  if (isEmailSent.messageId) {
    return { success: "Thank You!" };
  } else {
    return { error: "Unable to Complete the request!" };
  }
};
