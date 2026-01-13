export default async function handler(req, res) {
  console.log("Webhook route reached");

  const webhookURL = process.env.DISCORD_WEBHOOK_URL;
  console.log("Webhook URL exists:", !!webhookURL);

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "TESTING 123"
      })
    });

    const text = await response.text();
    console.log("Discord response:", response.status, text);

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("ERROR:", e);
    return res.status(500).json({ error: e.message });
  }
}
