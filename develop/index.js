// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"username",
        message:"Enter your github username"
    },
    {
        type:"input",
        name:"email",
        message:"enter your email address"
    },
    {
        type:"input",
        name:"title",
        message:"What is the name of your project?"
    },
    {
        type:"list",
        name:"license",
        message:"choose a license",
        choices:["MIT", "ISC", "Artistic 2.0", "Microsoft Public", "None"]
    },
    {
        type:"input",
        name:"description",
        message:"Give a description of your project."
    },
    {
        type:"input",
        name:"contribute",
        message:"Enter how to contribute"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();