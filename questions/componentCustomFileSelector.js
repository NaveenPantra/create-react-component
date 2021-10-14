const chalk = require("chalk")
const inquirer = require("inquirer");

const { FILE_NAMES } = require('./../config')

const getCustomFileSelectorQuestion = () => {
  return {
    type: 'checkbox',
    message: `Select custom files`,
    name: 'customFilesList',
    choices: [
      {
        name: FILE_NAMES.INDEX,
        value: FILE_NAMES.INDEX,
      },
      {
        name: FILE_NAMES.STYLES,
        value: FILE_NAMES.STYLES,
      },
      {
        name: FILE_NAMES.UTILS,
        value: FILE_NAMES.UTILS,
      },
      {
        name: FILE_NAMES.CONSTANTS,
        value: FILE_NAMES.CONSTANTS,
      },
      {
        name: FILE_NAMES.TYPES,
        value: FILE_NAMES.TYPES,
      },
    ]
  }
}

const getCustomFilesList = async () => {
  try {
    let answer = []
    while (true) {
      answer = await inquirer.prompt(getCustomFileSelectorQuestion())
      if (answer.customFilesList.length > 0) {
        return Promise.resolve(answer.customFilesList)
      }
      console.log(`${chalk.bold.redBright('You have not selected any files')}`)
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getCustomFilesList
}

