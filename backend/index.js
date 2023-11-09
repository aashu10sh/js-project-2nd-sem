const Express = require("express");
const UptimeController = require("./controllers/uptimeController.js");
const cors = require("cors");
const connectDB = require("./getMongo.js");
const app = Express();
const controller = new UptimeController();
connectDB();
const { fork } = require("child_process");
// const updateStatus = require("./threads/startup.js")

app.use(Express.json());

var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
  optionsSuccessStatus: 200,
};

// general middleware
app.use(cors(corsOptions));

app.get("/", controller.getAllUptime);
app.post("/", controller.addUptime);
app.delete("/:id", controller.deleteUptime);

app.listen(8080, () => {
  console.log("Server is UP!");
  fork("./threads/startup.js");
});
