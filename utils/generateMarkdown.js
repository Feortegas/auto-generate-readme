const { makeBadge, ValidationError } = require('badge-maker');
const globalVariables = require('./licenses');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const format = {
    label: 'License',
    message: `${license}`,
    color: 'orange'
  }
  const svg = makeBadge(format);
  return svg;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return globalVariables.GNUAGPLv3;
    case 'GNU GPLv3':
      return globalVariables.GNUGPLv3;
    case 'GNU LGPLv3':
      return globalVariables.GNULGPLv3;
    case 'Mozila Public License 2.0':
      return globalVariables.MozilaPL2;
    case 'Apache License 2.0':
      return globalVariables.Apache;
    case 'MIT License':
      return globalVariables.MIT;
    case 'Boost Software License 1.0':
      return globalVariables.Boost;
    case 'The Unlicense':
      return globalVariables.theUnlicense;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  In case of questions, please check out my [GitHub](https://github.com/${data.github}) or feel free to email me at ${data.email}
`;
}

module.exports = generateMarkdown;
