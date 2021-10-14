const chalk = require("chalk")
const inquirer = require("inquirer")
const {FILE_STRUCTURE_FILES, FILE_STRUCTURE_CHOICES, FILE_STRUCTURE_CHOICE_TITLES} = require('./../config')

const getFormattedDescription = (fileNames = [], suffix = 'Will create') => {
  const allFilesNamesString = fileNames.join(', ')
  return `${chalk.bold.whiteBright(suffix)} ${chalk.bold.greenBright(allFilesNamesString)}`
}

const componentFileChoiceQuestion = {
  type: 'list',
  name: 'fileStructureChoice',
  message: 'Choose file structure',
  choices: [
    {
      name: FILE_STRUCTURE_CHOICE_TITLES[FILE_STRUCTURE_CHOICES.DEFAULT],
      value: FILE_STRUCTURE_CHOICES.DEFAULT,
      description: getFormattedDescription(FILE_STRUCTURE_FILES[FILE_STRUCTURE_CHOICES.DEFAULT]),
    },
    {
      name: FILE_STRUCTURE_CHOICE_TITLES[FILE_STRUCTURE_CHOICES.DEFAULT_WITHOUT_TYPES],
      value: FILE_STRUCTURE_CHOICES.DEFAULT_WITHOUT_TYPES,
      description: getFormattedDescription(FILE_STRUCTURE_FILES[FILE_STRUCTURE_CHOICES.DEFAULT_WITHOUT_TYPES]),
    },
    {
      name: FILE_STRUCTURE_CHOICE_TITLES[FILE_STRUCTURE_CHOICES.QUICK_START],
      value: FILE_STRUCTURE_CHOICES.QUICK_START,
      description: getFormattedDescription(FILE_STRUCTURE_FILES[FILE_STRUCTURE_CHOICES.QUICK_START]),
    },
    {
      name: FILE_STRUCTURE_CHOICE_TITLES[FILE_STRUCTURE_CHOICES.QUICK_START_WITHOUT_TYPES],
      value: FILE_STRUCTURE_CHOICES.QUICK_START_WITHOUT_TYPES,
      description: getFormattedDescription(FILE_STRUCTURE_FILES[FILE_STRUCTURE_CHOICES.QUICK_START_WITHOUT_TYPES]),
    },
    {
      name: FILE_STRUCTURE_CHOICE_TITLES[FILE_STRUCTURE_CHOICES.CUSTOM],
      value: FILE_STRUCTURE_CHOICES.CUSTOM,
      description: getFormattedDescription(FILE_STRUCTURE_FILES[FILE_STRUCTURE_CHOICES.CUSTOM], 'You will be given choice to crete'),
    },
  ]
}

const getFileStructureChoice = async () => {
  try {
    const answer = await inquirer.prompt(componentFileChoiceQuestion);
    return Promise.resolve(answer.fileStructureChoice)
  } catch (err) {}
}

module.exports = { getFileStructureChoice }
