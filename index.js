const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const personalQuestions = ["What is your name?", "What is your GitHub username?",
    "What is your email?", "Brief bio: "];

const projectQuestions = ["What is the name of this project?", "What languages did you use?",
    "What dependecies did you use?", "Brief description: ", "What license do you have?"];

const promptUser = () => {
    console.log(`====== README Personal Questions ======`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: personalQuestions[0],
            //default: 'dankle',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your name...');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: personalQuestions[1],
            //default: 'danklebob',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your username...');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: personalQuestions[2],
            //default: 'danklebob@gmail.com',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email...');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: personalQuestions[3], 
            //default: 'I am dankle bob. The man, the myth, the legend.',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                }
                else {
                    console.log('Please enter info about yourself or your team...');
                    return false;
                }
            }
        }
    ]);
};

const promptQuestions = readmeDATA => {
    console.log(`====== README Project Questions ======`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: projectQuestions[0],
            //default: 'dankle-reader',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter the project name...');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'lang',
            message: projectQuestions[1],
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            validate: langInput => {
                if (langInput) {
                    return true;
                }
                else {
                    console.log('Please enter your the languages used in this project...');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'dependecies',
            message: projectQuestions[2],
            //default: 'inquirer',
        },
        {
            type: 'input',
            name: 'desc',
            message: projectQuestions[3],
            //default: 'i love to dankle the bob',
            validate: descInput => {
                if (descInput) {
                    return true;
                }
                else {
                    console.log('Please enter info about your project...');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: projectQuestions[4],
            choices: ['IBM', 'ISC', 'MIT', 'Boost']
        }
    ])
    .then(projectData => {
        readmeDATA.project = projectData;
        return readmeDATA;
    });
};

promptUser()
    .then(promptQuestions)
    .then(readmeDATA => {
        console.log(readmeDATA);
        
        const readmeTXT = generateMarkdown(readmeDATA);

        fs.writeFile('./README.md', readmeTXT, err => {
            if (err) throw err;
        
            console.log('README.md Generated!');
        });
    });