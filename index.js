const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = projectData => {
    return inquirer.prompt([
        // Project Title
        {
            type: 'input',
            name: 'title',
            message: `What's the Project Title? `,
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
              }
        },
        // Project Description
        {
            type: 'input',
            name: 'description',
            message: `What's the Project Description? `,
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
              }
        },
        // Project Installation
        {
            type: 'input',
            name: 'installation',
            message: 'What are the Project Installation steps? '
        },
        // Project Usage
        {
            type: 'input',
            name: 'usage',
            message: `What's the Project Usage? `
        },
        // Project License
        {
            type: 'list',
            name: 'license',
            message: `What's the Project License? `,
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozila Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        // Project Contribution Guidelines
        {
            type: 'input',
            name: 'contributing',
            message: `What's the Project Contribution Guidelines? `
        },
        // Project Test Instructions
        {
            type: 'input',
            name: 'tests',
            message: `What's the Project Test Instructions? `
        },
        // Project - Github username
        {
            type: 'input',
            name: 'github',
            message: `What's your GitHub UserName? `,
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('You need to enter your GitHub username!');
                  return false;
                }
              }
        },
        // Project - e-mail address
        {
            type: 'input',
            name: 'email',
            message: `What's your e-mail address? `,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('You need to enter your e-mail address!');
                  return false;
                }
              }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(projectData => {
            return generateMarkdown(projectData);
        })
        .then(readmeFile => {
            return writeToFile(readmeFile);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
