const chalk = require("chalk")
const path = require('path')
const ejs = require('ejs');

const fileUtils = require('./data')
const {FILE_NAME_TO_EJS_TEMPLATE_FILE_MAP, FILE_NAMES} = require('./config')

const filesDataBaseDir = path.join(__dirname, '/filesData')

const createComponentStructure = (componentName = '', filesList = [], renderOptions = {}, callback = () => {}) => {
  fileUtils.createDirectory(componentName, (err) => {
    if (!err) {
      console.log(`${chalk.whiteBright('Created directory')} ${chalk.greenBright.bold(componentName)}`)
      filesList.forEach(fileName => {
        createAndUpdateFile(componentName, fileName, renderOptions, callback)
      })
    } else {
      callback(err)
    }
  })
}

const createAndUpdateFile = (componentName = '', fileName = '', renderOption = {}, callback = () => {}) => {
  fileUtils.createFile(componentName, fileName, (err) => {
    if (!err) {
      fileUtils.readFile(filesDataBaseDir, FILE_NAME_TO_EJS_TEMPLATE_FILE_MAP[fileName], (err, fileContents) => {
        const parsedFileContents = ejs.render(fileContents, { componentName, ...renderOption});
        fileUtils.updateFile(componentName, fileName, parsedFileContents || '', (err) => {
          if (!err) {
            console.log(`${chalk.whiteBright('Created file')} ${chalk.greenBright(fileName)}`)
          }
        })
      }, { isFillDirPath : true})
    }
  })
}

// createComponentStructure('sample', Object.values(FILE_NAMES), {isTypeSafe: true}, (err) => {console.log(err)})

module.exports = {createComponentStructure}
