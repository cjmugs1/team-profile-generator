const inquirer = require('inquirer');
const { createProject, createEmployeeCard } = require('./answerHandler');


const openingQuestions = async () => { 
    await inquirer.prompt([
        // name the project
        {
            type: 'input',
            name: 'projectTitle',
            message: "First, what is your Project/Company/Group called?",
            validate: (value) => { if (value) { return true } else { return "Please tell us what to call your team!" } },
        },
        // collect the managers info
        {
            type: 'input',
            name: 'employeeName',
            message: "Now, what is your Name?",
            default (answers) {
                let defaultName = answers.projectTitle + " Team Manager";
                return defaultName;
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Your employee ID? (if you do not have one, we will assign you #01)",
            default () {
                return '01';
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Your email?",
            validate(value) {
                const pass = value.match(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                );
                if (pass) {
                return true;
                }
                return "Please enter a valid email";
            }
        },
        {
            type: 'number',
            name: 'managerOfficeNumber',
            message: "Your office number? (If you do not have one, we will assign it remote.)",
            default() {
                return "remote";
            },
        },
        // add more team members
        {
            type: 'list',
            name: 'role',
            message: "Which team member would you like to add next?",
            choices: ["Engineer", "Intern", "None, Im Done!"],
            validate: (value) => { if (value) { return true } else { return "Please choose an option!" } },
        }
    ])
    .then(async (answers) => {
        await createProject(answers);
        await createEmployeeCard(answers);

        setTimeout(function() { if (answers.role === 'Engineer') {
            newEngineerQuestions();
        } else if (answers.role === 'Intern') {
            newInternQuestions();
        }}, 1000);
    });
}


const newEngineerQuestions = async () => { 
    await inquirer.prompt([
        // collect info about the engineer
        {
            type: 'input',
            name: 'employeeName',
            message: "What is your engineer's name?",
            validate: (value) => { if (value) { return true } else { return "Please tell us your team member's name!" } },
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is your engineer's Employee ID? (if they have no ID, we will assign them a random ID #.)",
            default () {
                return Math.floor(Math.random() * 100).toString();
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Their email?",
            validate(value) {
                const pass = value.match(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                );
                if (pass) {
                return true;
                }
                return "Please enter a valid email";
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Can you provide your engineer's Github profile name? (If they do not have one, we will assign it n/a by default)",
            default() {
                return "n/a";
            },
        },
        // add more team members
        {
            type: 'list',
            name: 'role',
            message: "Which team member would you like to add next?",
            choices: ["Engineer", "Intern", "None, Im Done!"],
            validate: (value) => { if (value) { return true } else { return "Please choose an option!" } },
        }
    ])
    .then(async (answers) => {
        await createEmployeeCard(answers);

        setTimeout(function() { if (answers.role === 'Engineer') {
            newEngineerQuestions();
        } else if (answers.role === 'Intern') {
            newInternQuestions();
        }}, 1000);
    });
};


const newInternQuestions = async () => { 
    await inquirer.prompt([
        // collect info about the intern
        {
            type: 'input',
            name: 'employeeName',
            message: "What is your intern's name?",
            validate: (value) => { if (value) { return true } else { return "Please tell us your team member's name!" } },
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is your intern's Employee ID? (if they have no ID, we will assign them a random ID #.)",
            default () {
                return Math.floor(Math.random() * 100).toString();
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Their email?",
            validate(value) {
                const pass = value.match(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                );
                if (pass) {
                return true;
                }
                return "Please enter a valid email";
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What university did your intern attend? (If they did not attend, we will assign n/a by default.)",
            default() {
                return "n/a";
            },
        },
        // add more team members
        {
            type: 'list',
            name: 'role',
            message: "Which team member would you like to add next?",
            choices: ["Engineer", "Intern", "None, Im Done!"],
            validate: (value) => { if (value) { return true } else { return "Please choose an option!" } },
        }
    ])
    .then(async (answers) => {
        await createEmployeeCard(answers);

        setTimeout(function() { if (answers.role === 'Engineer') {
            newEngineerQuestions();
        } else if (answers.role === 'Intern') {
            newInternQuestions();
        }}, 1000);
    });
};


const beginPrompts = () => {
    openingQuestions();
};


exports.beginPrompts = beginPrompts;