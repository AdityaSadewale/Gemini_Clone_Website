// Replace with your Gemini API key
const API_KEY = "AIzaSyCQwDmOOv9co8bMJI6KpLSZKgk4h7m5z7E";

// Your prompt
const prompt = "Explain AI in simple words";

async function callGemini() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error("Error:", data.error.message);
      return;
    }

    const reply = data.candidates[0].content.parts[0].text;

    console.log("Gemini Response:");
    console.log(reply);

  } catch (error) {
    console.error("Request failed:", error);
  }
}

callGemini();