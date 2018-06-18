const fs = require("fs");
const readme = fs.createWriteStream("README.md");
const codes = require("./dist");

const table = Object.keys(codes.default).filter(val => Number(val)).map(val => {
    return `| ${codes.default[val]} | ${val} |`;
})

const template = fs.readFileSync("./template.md");

table.unshift("| ------------ | ------------- |");
table.unshift("| Constant | Code |");

const data = template.toString().replace("{{codes}}", table.join("\n"));

readme.write(data)

readme.end();