exports.handler = async function (event) {
  const { name, email, subject, message } = JSON.parse(event.body);

  console.log("💬 New Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Message stored (logged) successfully." }),
  };
};
