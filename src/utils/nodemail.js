import emailjs from "emailjs-com";

const sendEmail = async ({ email, name, subject, message }) => {
  try {
    console.log(email, name, subject, message);
    const templateParams = {
      subject: subject,
      name: name,
      email: email,
      message: message,
    };

    const response = await emailjs.send(
      "service_r4kp0pm",
      "template_dnk02du",
      templateParams,
      "L0aJcs1Cg1RPfE7z8"
    );
    console.log("Email sent successfully:", response.text);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;
