// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',  
        message: 'What is the title?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What kind of contributing has been done?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the main usage?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the project here',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation requirements?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Creating READme');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
      });
   
}

  init();
