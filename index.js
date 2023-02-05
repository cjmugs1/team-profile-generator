const fs = require('fs');
const { beginPrompts } = require('./src/inquirerPrompts')

function beginHtml() {
    let htmlHead = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    
    <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css/Features-Cards-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
    <link rel="stylesheet" href="../assets/css/styles.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>`;

    fs.writeFileSync('./dist/generatedHTML.html', htmlHead, (err) => {
    if (err) {console.log(err)}
    })
};

function collectInfo() {
    console.log('\x1b[37m%s\x1b[0m', 'Welcome to the team profile generator! Answer the following prompts to get your team page up and running in no time!')
    console.log('\x1b[37m%s\x1b[0m', 'We will assume that you are the team manager. Lets begin!\n')
    
    beginPrompts();

}

beginHtml();
collectInfo();