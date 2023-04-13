// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "No license") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
      }
      return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contact](#contact)
  

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Contact
${data.username} on GitHub
${data.email} via email
`;
}

module.exports = generateMarkdown;
