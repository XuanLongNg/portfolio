import emailjs from "emailjs-com";

const sendEmail = async ({ email, name, subject, message }) => {
  try {
    const templateParams = {
      subject: subject,
      name: name,
      email: email,
      message: message,
    };

    const response = await emailjs.send(
      process.env["REACT_APP_EMAIL_SERVICES_ID"],
      process.env["REACT_APP_EMAIL_TEMPLATE_ID"],
      templateParams,
      process.env["REACT_APP_EMAIL_USER_ID"]
    );
    console.log("Email sent successfully:", response.text);

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;
