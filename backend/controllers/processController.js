const fetch = require("node-fetch");
const Website = require("../models/Website.js");
const mailer = require("../mailer.js");
const mongoose = require("mongoose");

class ProcessController {
  constructor(id, url) {
    this.id = id;
    this.url = url;
    this.conn = this.connectMongo().then((obj) => {
      return obj;
    });
  }
  async main() {
    const result = await this.checkWebsite();
    console.log("The result is ", result);
    const changed = await Website.findByIdAndUpdate(this.id, {
      status: result,
    });
    console.log("changed", changed);

    if (!result) {
      const result = mailer(this.url);
      console.log("Mail sent with mail-Id", result);
    }
    // this.conn.disconnect()
  }
  async connectMongo() {
    try {
      console.log("Trying to Connect to the database.");
      const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/uptime`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  async checkWebsite() {
    let result;
    try {
      console.log("fetching ", this.url);
      result = await fetch(this.url);
    } catch (error) {
      console.log(error);
      return false;
    }
    console.log(result);
    return true ? result.statusText == "OK" : false;
  }
}

module.exports = ProcessController;
