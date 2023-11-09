const getMongo = require("../getMongo.js");
const Website = require("../models/Website.js");
const ProcessController = require("../controllers/processController.js");

async function main() {
  getMongo();
  const allWebsites = await Website.find({});
  processes = [];
  for (const website of allWebsites) {
    const process = new ProcessController(website._id, website.websiteUrl);
    await process.main();
  }
  process.exit(1);
}

main();
// module.exports = main
