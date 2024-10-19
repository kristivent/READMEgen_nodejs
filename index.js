// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of the project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the intended use for the project?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license was used?',
    choices: ['mit', 'apache', 'gpl']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email',
  },
];

function generateReadme(answers) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## License
  This project is licensed under the ${answers.license} license.

  ## Questions
  For any questions, please reach out via GitHub [${answers.username}](https://github.com/${answers.username}) or email at ${answers.email}.
  `;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Successfully created README.md');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
