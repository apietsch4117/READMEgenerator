// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
  return `https://img.shields.io/badge/${license}-blue.svg`
}
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`;
  }
  return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
License: ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#License)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Installation requirements:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

[![License](${renderLicenseBadge(data.license)})](https://shields.io/)

  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

Contact Information: ${data.email}. 
Github URL: [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
