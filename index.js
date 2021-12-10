const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        // Project Title
        {
            type: 'input',
            name: 'name',
            message: `What's the Project Title? `
        },
        // Project Description
        {
            type: 'input',
            name: 'name',
            message: `What's the Project Description? `
        },
        // Project Installation
        {
            type: 'input',
            name: 'name',
            message: 'What are the Project Installation steps? '
        },
        // Project Usage
        {
            type: 'input',
            name: 'name',
            message: `What's the Project Usage? `
        },
        // Project License
        {
            type: 'input',
            name: 'name',
            message: `What's the Project License? `
        },
        // Project Contribution Guidelines
        {
            type: 'input',
            name: 'name',
            message: `What's the Project Contribution Guidelines? `
        },
        // Project Test Instructions
        {
            type: 'input',
            name: 'name',
            message: `What's the Project Test Instructions? `
        },
        // Project - Github username
        {
            type: 'input',
            name: 'name',
            message: `What's your GitHub UserName? `
        },
        // Project - e-mail address
        {
            type: 'input',
            name: 'name',
            message: `What's your e-mail address? `
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
