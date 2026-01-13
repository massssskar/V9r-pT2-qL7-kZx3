local HttpService = game:GetService("HttpService")
local webhookURL = "https://fakility-anticheat.vercel.app/api/webhook"

local function sendEmbed(title, description, color)
    local data = {
        title = title,
        description = description,
        color = color or 16711680
    }

    local jsonData = HttpService:JSONEncode(data)
    HttpService:PostAsync(webhookURL, jsonData, Enum.HttpContentType.ApplicationJson)
end
