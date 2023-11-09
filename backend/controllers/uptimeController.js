const Website = require("../models/Website.js");
const { fork } = require("child_process");

class UptimeController {
  constructor() {}
  async addUptime(req, res) {
    const { websiteUrl } = req.body;
    if (!isURL(websiteUrl)) {
      return res
        .status(422)
        .json({ error: true, detail: "Provided Url is not a valid URL" });
    }
    const website = new Website({
      websiteUrl: websiteUrl,
    });
    try {
      await website.validate();
      website.save();
      fork("./threads/startup.js");
      return res.status(202).json({
        error: false,
        detail: `Saved Website ${websiteUrl}`,
      });
    } catch (error) {
      return res.status(422).json({
        error: true,
        detail: "Could Not Add to the Database.",
      });
    }
  }
  async getAllUptime(req, res) {
    const websites = await Website.find({});
    return res.status(200).json(websites);
  }

  async deleteUptime(req, res) {
    const id = req.params.id;
    console.log("id is ", id);
    try {
      const deleted = await Website.findByIdAndDelete(id);
      return res.status(200).json({
        error: false,
        detail: `Deleted ${deleted.websiteUrl}`,
      });
    } catch (err) {
      console.log(err);
      return res.status(403).json({
        error: true,
        detail: "Could Not Delete the Uptime",
      });
    }
  }
  getOneUptime(req, res) {
    console.log("Getting One Uptime!");
  }
}

function isURL(str) {
  var urlRegex =
    "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
  var url = new RegExp(urlRegex, "i");
  return str.length < 2083 && url.test(str);
}

module.exports = UptimeController;
