const chalk = require("chalk")
const inquirer = require("inquirer");

const getComponentTypeSafetyQuestion = (componentName = '') => {
  return {
    type: 'confirm',
    name: 'componentTypeSafety',
    message: `Is component ${chalk.bold.greenBright(componentName)} type safety`,
  }
}

const getIsComponentTypeSafety = async (componentName) => {
  const answer = await inquirer.prompt(getComponentTypeSafetyQuestion(componentName))
  return Promise.resolve(answer.componentTypeSafety)
}

module.exports = {
  getIsComponentTypeSafety,
}
