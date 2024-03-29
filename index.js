const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require("./src/generateHTML")
const managerCard = require("./src/managerHTML")
const engineerCard = require("./src/engineerHTML")
const internCard = require("./src/internHTML")
const employeeArray = []

// questions for Man, Eng, and Int
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOfficeNumber"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: "engineerGithub"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool"
    }
]
function init() {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber
            )
            employeeArray.push(manager)
            confirmMore()
        })
}

function confirmMore() {
    inquirer.prompt({
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "addMore"
    })
        .then(response => {
            if (response.addMore === true) {
                addEmployee()
            }
            else (
                createHMTL()
            )
        })
}

function addEmployee() {
    inquirer.prompt([{
        type: "list",
        message: "Do you want to add an engineer or intern?",
        choices: ["Engineer", "Intern"],
        name: "selection"
    }])
        .then(response => {
            if (response.selection === "Engineer") {
                addEngineer()
            }
            else {
                addIntern()
            }
        })
}
// Question prompts and adding it to employeeArray using push
function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(response => {
            const engineer = new Engineer(
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub
            )
            employeeArray.push(engineer)
            confirmMore()
        })
}
function addIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            const intern = new Intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool
            )
            employeeArray.push(intern)
            confirmMore()
        })
}
function createHMTL() {
    console.log(employeeArray)
    let cards = ""

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            cards = cards + managerCard(employeeArray[i])
        }
        else if (employeeArray[i].getRole() === "Engineer") {
            cards = cards + engineerCard(employeeArray[i])
        }
        else {(employeeArray[i].getRole() === "Intern") 
            cards = cards + internCard(employeeArray[i])
        }
    }
    fs.writeFileSync("./dist/team.html", generateHTML(cards))
}

init()