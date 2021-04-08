const { exec } = require('child_process')

function execute(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, standardOutput, standardError) => {
      if (error) {
        reject()
        return
      }

      if (standardError) {
        reject(standardError)
        return
      }

      resolve(standardOutput)
    })
  })
}

module.exports = execute
