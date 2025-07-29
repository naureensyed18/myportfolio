exports.handler = async function (event) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    console.log("📨 New submission:");
    console.log({ name, email, subject, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Received and logged." }),
    };
  } catch (error) {
    console.error("❌ Error in function:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
