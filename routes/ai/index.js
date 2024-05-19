const express = require("express");
const openai = require("../middlewares/openai");
const {
  initMiddleware,
  creditCheck,
  contentFilterCheck,
  sendResponse,
  creditPayment,
  saveToHistory,
} = require("./middleware");

let app = express.Router();

app.use("/", initMiddleware, creditCheck);

// app.use("/", require("../../ignore/routes/ai/summarize"));
// app.use("/", require("../../ignore/routes/ai/jobad"));
// app.use("/", require("../../ignore/routes/ai/helloworld"));
// app.use("/", require("../../ignore/routes/ai/example"));
app.use("/", require("./code/interpret"));
app.use("/", require("./writing/intro"));
app.use("/", require("./texterrordetection"));
app.use("/", require("./simpleexplanation"));
app.use("/", require("./algoexplain"));
app.use("/", require("./conceptexplainer"));
app.use("/", require("./javatocpp"));
app.use("/", require("./javascripttotypescript"));
app.use("/", require("./dsahelper"));
app.use("/", require("./sqlexplainer"));
app.use("/", require("./sqlcommandmaker"));
app.use("/", require("./codeoptimizer"));
app.use("/", require("./projectideas"));
app.use("/", require("./tailwindmaker"));
app.use("/", require("./cssmaker"));
app.use("/", require("./pythonconverter"));
app.use("/", require("./htmlmaker"));
app.use("/", require("./devops"));
app.use("/", require("./mlhelper"));


app.use("/", contentFilterCheck);
app.use("/", creditPayment);
app.use("/", saveToHistory);

app.use("/", sendResponse);

module.exports = app;
