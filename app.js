#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");

const questions = require('./lib/questions')

const init = () => {
  console.log(
    chalk.greenBright(
      figlet.textSync("CRC", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
}

const run = async () => {
  init()
  await questions.ask()
};

run();
