const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const personalQuestions = ["What is your name?", "What is your GitHub username?",
    "What is your email?"];

const projectQuestions = ["What is the name of this project?", "What languages did you use?",
    "What is the GitHub repo link?", "What is the GitHub deployed page link?", "Brief description: "];

const promptUser = () => {
    console.log(`====== README Personal Questions ======`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: personalQuestions[0]
        },
        {
            type: 'input',
            name: 'username',
            message: personalQuestions[1]
        },
        {
            type: 'input',
            name: 'email',
            message: personalQuestions[2]
        }
    ]);
};

const promptQuestions = readmeDATA => {
    console.log(`====== README Project Questions ======`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: projectQuestions[0]
        },
        {
            type: 'checkbox',
            name: 'lang',
            message: projectQuestions[1],
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'repoLink',
            message: projectQuestions[2]
        },
        {
            type: 'input',
            name: 'pageLink',
            message: projectQuestions[3]
        },
        {
            type: 'input',
            name: 'desc',
            message: projectQuestions[4]
        }
    ])
    .then(projectData => {
        readmeDATA.project = projectData;
        return readmeDATA;
    });
}

promptUser()
    .then(promptQuestions)
    .then(readmeDATA => {
        console.log(readmeDATA);
        
        const readmeTXT = generateMarkdown(readmeDATA);
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
