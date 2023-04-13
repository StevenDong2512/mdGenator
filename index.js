// Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown")

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use for your project?",
        choices: ["APACHE2.0", "GNU", "MIT", "BSD2", "BSD3", "Boost1.0", "GNU3.0", "GNU2.0", "MPL2.0", "No license"],
    },
    {
        type: "input",
        name: "username",
        message: "Your Github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Your email address here.",
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("ReadMe file has gerenrated successfully.")
    })
}

//    Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile("README.md", generateMarkdown(response));
    });
}
init();