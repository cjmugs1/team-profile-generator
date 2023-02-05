const fs = require('fs');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const createProject = ({ projectTitle }) => {
    let htmlTitle = `
    <title>${projectTitle}</title>
    </head>`;

    fs.appendFile('./dist/generatedHTML.html', htmlTitle, (err) => {
        if (err) {console.log(err)}
    });

    let htmlHeader = `
    <h2 class="text-center team-title">${projectTitle} <span class="header-span">| Team</span></h2>
    <div class="container py-4 py-xl-5" style="min-width: 90vw;">
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style="margin: 0;">`;

    fs.appendFile('./dist/generatedHTML.html', htmlHeader, (err) => {
        if (err) {console.log(err)}
    });    
};

const createEmployeeCard = (answers) => {
    if (answers.projectTitle !== undefined) {
        var constructor = new Manager(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.managerOfficeNumber);
        var specialInfo = `
        <div class="row h-auto mx-0 p-1 d-flex justify-content-start rounded-1 employee-info">
            <p class="m-0 p-0">Office Number: <span>${constructor.getOfficeNumber()}</span></p>
        </div>`
        var icon = "groups_2"
    } else if (answers.engineerGithub !== undefined) {
        var constructor = new Engineer (answers.employeeName, answers.employeeID, answers.employeeEmail, answers.engineerGithub);
        var specialInfo = `
        <div class="row h-auto mx-0 p-1 d-flex justify-content-start rounded-1 employee-info">
            <p class="m-0 p-0">Github Profile: <span><a href="https://github.com/${constructor.getGithub()}">${constructor.name}</a></span></p>
        </div>`
        var icon = "code_blocks"
    } else if (answers.internSchool !== undefined) {
        var constructor = new Intern (answers.employeeName, answers.employeeID, answers.employeeEmail, answers.internSchool);
        var specialInfo = `
        <div class="row h-auto mx-0 p-1 d-flex justify-content-start rounded-1 employee-info">
            <p class="m-0 p-0">University: <span>${constructor.getSchool()}</span></p>
        </div>`
        var icon = "local_cafe"
    } 

    let employeeCard = `
    <div class="col">
        <div class="card">
            <div class="card-body p-4 position-relative z-0" style="border-style: none;">
                <div class="position-absolute top-0 start-0 w-100 card-header z-1"></div>
                <div class="container d-flex justify-content-start p-0 mb-2 position-relative z-2"><span class="material-symbols-outlined" style="margin-bottom: 0px;">${icon}</span><span class="employee-role">${constructor.getRole()}</span></div>
                <h4 class="card-title employee-name mb-2 position-relative z-2">${constructor.name}</h4>
                <div class="container pt-4 pb-0 px-0 position-relative z-2">
                    <div class="row h-auto mx-0 mb-1 p-1 d-flex justify-content-start rounded-1 employee-info">
                        <p class="m-0 p-0">Employee ID: <span class="employee-id">${constructor.id}</span></p>
                    </div>
                    <div class="row h-auto mx-0 mb-1 p-1 d-flex justify-content-start rounded-1 employee-info">
                        <p class="m-0 p-0">Email: <span class="employee-email"><a href ="mailto:${constructor.email}">${constructor.email}</a></span></p>
                    </div>
                    ${specialInfo}
                </div>
            </div>
        </div>
    </div>
    `

    fs.appendFile('./dist/generatedHTML.html', employeeCard, (err) => {
    err
        ? console.log(err)
        : console.log("\nSuccessfully added an employee to your team page!")
    });

    if (answers.role === 'None, Im Done!') {
        finishHtml();
        return;
    }
};


const finishHtml = async () => {
    let htmlFinish = `
        </div>
        </div>
        <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
    </body>

    </html>`

    await fs.appendFile('./dist/generatedHTML.html', htmlFinish, (err) => {
    err
        ? console.log(err)
        : console.log("Successfully created your team's HTML page!")
    });

    console.log("Great work, you can now view your new team page in the /dist folder! You may copy and paste this HTML into your own project.")
}



exports.createProject = createProject;
exports.createEmployeeCard = createEmployeeCard;
