const Manager = require("./js-libraries/Manager");
const Engineer = require("./js-libraries/Engineer");
const Intern = require("./js-libraries/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
