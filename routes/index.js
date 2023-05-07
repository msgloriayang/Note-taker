const express = require("express");
// const stack = require("stack");

// Import modular routers for notes
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;