const express = require("express");
const app = express();
const port = 8000;

const HenrikDevValorantAPI = require("unofficial-valorant-api");
const vapi = new HenrikDevValorantAPI();

app.get("/", async (req, res) => {
  const mmr_data = await vapi.getMMR({
    version: "v1",
    region: "eu",
    name: "WLyubaw",
    tag: "EUW",
  });
  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return console.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }
  res.send(`[${mmr_data.data.currenttierpatched}]: ${mmr_data.data.ranking_in_tier}RR`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
