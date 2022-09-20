const inquirer= require("inquirer")
const fs= require("fs")
const Manager= require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML= require("./src/generateHTML")

const employeeArray=[]

// questions for Man, Eng, and Int
const managerQuestions=[
    {
        type:"input",
        message:"What is the manager's name?",
        name:"managerName"
    },
    {
        type:"input",
        message:"What is the manager's ID?",
        name:"managerId"
    },
    {
        type:"input",
        message:"What is the manager's email?",
        name:"managerEmail"
    },
    {
        type:"input",
        message:"What is the manager's office number?",
        name:"managerOfficeNumber"
    }
]

const engineerQuestions=[
    {
        type:"input",
        message:"What is the engineer's name?",
        name:"engineerName"
    },
    {
        type:"input",
        message:"What is the engineer's ID?",
        name:"engineerId"
    },
    {
        type:"input",
        message:"What is the engineer's email?",
        name:"engineerEmail"
    },
    {
        type:"input",
        message:"What is the engineer's GitHub?",
        name:"engineerGitHub"
    }
]

const internQuestions=[
    {
        type:"input",
        message:"What is the intern's name?",
        name:"internName"
    },
    {
        type:"input",
        message:"What is the intern's ID?",
        name:"internId"
    },
    {
        type:"input",
        message:"What is the intern's email?",
        name:"internEmail"
    },
    {
        type:"input",
        message:"What is the intern's school?",
        name:"internSchool"
    }
]
function init() {
    inquirer
    .prompt(managerQuestions)
    .then(response=>{
        const manager=new Manager(
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.managerOfficeNumber    
            )
        employeeArray.push(manager)
        confirmMore()
    })
}

function confirmMore(){
    inquirer.prompt({
        type:"confirm",
        message:"Do you want to add another employee?",
        name:"addMore"
    })
    .then(response =>{
        if(addMore === true){
            addEmployee()
        }
        else(
            createHMTL()
        )
    })
}

function addEmployee(){
    inquirer.prompt([{
        type:"list",
        message:"Do you want to add engineer or intern?",
        choices:["Engineer","Intern"],
        name:"eninSelection"
    }])
    .then(response =>{
        if(response.eninSelection === "Engineer"){
            addEngineer()
        }
        else(){
            addIntern()
        }
    })
}
function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(response =>{
        // create new instance of engineer and add it to employeeArray using push
        const engineer=new Engineer(
            response.engineerName,
            response.engineerId,
            response.engineerEmail,
            response.engineerGithub    
            )
        employeeArray.push(engineer)
        confirmMore()
    })
}
function addIntern(){
    inquirer.prompt(internQuestions)
    .then(response =>{
        // create new instance of intern and add it to employeeArray using push
        const intern=new Intern(
            response.internName,
            response.internId,
            response.internEmail,
            response.internSchool    
            )
        employeeArray.push(intern)
        confirmMore()
    })
}
function createHMTL(){
 console.log(employeeArray)
}

init ()