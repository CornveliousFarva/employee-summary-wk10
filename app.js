const Manager = require("./js-libraries/Manager");
const Engineer = require("./js-libraries/Engineer");
const Intern = require("./js-libraries/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./js-libraries/htmlRenderer");

const idArray = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Manager", "I don't want to add any more members"]

        }
    ]).then(userChoice => {
        if(userChoice.memberChoice === "Manager"){
            createManager()
        }
        else if (userChoice.memberChoice === "Engineer"){
            createEngineer()
        }
        else if (userChoice.memberChoice === "Intern"){
            createManager()
        }
    }
        )
        createTeam ()
}
function createEmployee(){
    //Prompt to create manager
    function createManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the manager?"
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }
        ]).then(function(answers){
            const manager = new manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber); teamMembers.push(manager);
            idArray.push(answers.createmanager);
            console.log(teamMembers)
            createTeam();
    },
    createManager(),
    //Prompt to create engineer
    function createEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of this engineer?"
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the ID number of this engineer?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is this engineer's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is this engineer's GitHub?"
            }
        ]).then(function(answers){
            const engineer = new engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub); teamMembers.push(engineer);
            idArray.push(answers.createEngineer);
            console.log(teamMembers)
            createTeam();
    },
    createEngineer(),
    //Prompt to create intern
    function createIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of this intern?"
            },
            {
                type: "input",
                name: "internID",
                message: "what is this intern's ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is this intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does this intern attend?"
            }
        ]).then(function(answers){
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool); teamMembers.push(intern);
            idArray.push(answers.createIntern);
            console.log(teamMembers)
            createTeam();
        })
    },
    createIntern()        
    },
​createEmployee(),
 
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


​
// After you have your html, you're no ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
