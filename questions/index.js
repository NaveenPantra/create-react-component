const chalk = require("chalk")

const { getComponentName } = require('./componentName')
const { getFileStructureChoice } = require('./componentFileStructure')
const { getIsComponentTypeSafety } = require('./componentTypeSafety')
const { getCustomFilesList } = require('./componentCustomFileSelector')
const { createComponentStructure } = require('./../createComponentStructure')
const { FILE_STRUCTURE_CHOICES, FILE_STRUCTURE_CHOICE_TYPE_SAFETY, FILE_STRUCTURE_FILES } = require('./../config')

const ask = async () => {
  const componentName = await getComponentName()
  // console.log(`${chalk.bold.whiteBright('Component name: ')} ${chalk.bold.greenBright(componentName)}\n`)
  const fileStructureChoice = await getFileStructureChoice()
  // console.log(`${chalk.bold.whiteBright('Chosen file structure type')} ${chalk.bold.greenBright(fileStructureChoice)}\n`);
  let isTypeSafe = FILE_STRUCTURE_CHOICE_TYPE_SAFETY[fileStructureChoice]
  let filesList =  FILE_STRUCTURE_FILES[fileStructureChoice]
  if (fileStructureChoice === FILE_STRUCTURE_CHOICES.CUSTOM) {
    isTypeSafe = await getIsComponentTypeSafety(componentName)
    filesList = await getCustomFilesList()
  }
  console.log('\n')
  createComponentStructure(componentName, filesList, { isTypeSafe }, (err) => {
    console.log(err)
  })
}

module.exports = {
  ask
}
