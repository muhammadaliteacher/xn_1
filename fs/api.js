const fs = require("fs")
const path = require("path")

const read_file = (file_name) => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "../data/" + file_name), "utf-8"))
}

const write_file = (file_name, data) => {
  return fs.writeFileSync(path.join(__dirname, "../data/" + file_name), JSON.stringify(data, null, 4))
}

module.exports = {
  read_file,
  write_file
}