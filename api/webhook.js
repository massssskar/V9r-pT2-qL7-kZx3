export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body; // Roblox payload
    const discordWebhook = "https://discord.com/api/webhooks/1411307044534882427/Kmt943zW7a4lGmRzrPyE9X-KuyP41CNUG20cXfNO60Qrh0-uEB-EsUT3DCpE8AsV-Ysi"; // <--- put your Discord webhook URL

    // Make sure body has title and description
    const embed = {
      title: body.title || "No Title",
      description: body.description || "No Description",
      color: body.color || 16711680,
    };

    // Send to Discord
    const response = await fetch(discordWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) {
      console.error("Discord webhook failed:", await response.text());
      return res.status(500).json({ error: "Failed to send to Discord" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in webhook:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
