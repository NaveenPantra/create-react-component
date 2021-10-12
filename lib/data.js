const fs = require("fs");

let currentWorkingDirectory = process.cwd()

const lib = {}

lib.createDirectory = (dirName = '', callback = () => {}) => {
  fs.mkdir(`${currentWorkingDirectory}/${dirName}`, (err, fs) => {
    if (!err) {
      callback(false)
    } else {
      callback(err)
    }
  })
}

lib.createFile = (dir = '', file = '', callback = () => {}) => {
  fs.open(`${currentWorkingDirectory}/${dir}/${file}`, 'wx', (err, fd) => {
    if (!err) {
      callback(false)
    } else {
      callback(err)
    }
  })
}

lib.readFile = (dir = '', file = '', callback = () => {}, options = {}) => {
  const dirPath = options.isFillDirPath ? `${dir}/${file}` : `${currentWorkingDirectory}/${dir}/${file}`
  fs.readFile(dirPath, 'utf-8', (err, data) => {
    if (!err) {
      callback(false, data)
    } else {
      callback(err)
    }
  })
}

lib.updateFile = (dir = '', file = '', data = '', callback = () => {}) => {
  fs.open(`${currentWorkingDirectory}/${dir}/${file}`, 'r+', (err, fd) => {
    if (!err) {
      fs.ftruncate(fd, err => {
        if (!err) {
          fs.writeFile(fd, data, err => {
            if (!err) {
              callback(false)
            } else {
              callback(err)
            }
          })
        } else {
          callback(err)
        }
      })
    } else {callback(err)}
  })
}

lib.isExist = () => {}

module.exports = lib
