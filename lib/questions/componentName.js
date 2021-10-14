const chalk = require("chalk")
const inquirer = require("inquirer")

const { isPascalCase } = require('./../utils')

const getQuestion = () => {
  return {
    name: 'name',
    type: 'input',
    message: 'Name of the component (eg: ComponentName)',
    validate: function (inputValue) {
      if (isPascalCase(inputValue)) return true
      return `\n${chalk.whiteBright.bold('Entered file name ')} ${chalk.bgWhiteBright.bold.redBright(inputValue)} ${chalk.whiteBright.bold(' is not in PascalCase')}`
    }
  }
}

const getComponentName = async () => {
  const answer = await inquirer.prompt(getQuestion())
  return Promise.resolve(answer.name)
}

module.exports = {
  getComponentName,
}
