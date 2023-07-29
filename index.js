// needed to call inquirer
const inquirer = require('inquirer');
// needed to call to write to file
const fs = require('fs');
// needed to import the generated shapes
const { Triangle, Circle, Square } = require('./utils/generateShapes');
// so variable needed for each shape? or just the generated page?
// need to generate the svg
// need to take the response, if the user chooses circle, need a new circle class constructor. Conditional statement (if/else) to generate shapes based on their answers.


function promptMe() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please input the 3 characters you would like your logo to say:',
      name: 'initials',
    },
    {
      type: 'input',
      message: 'What color would you like your text to be?',
      name: 'textcolor',
    },
    {
      type: 'checkbox',
      message: 'Choose a shape for your logo:',
      name: 'shapes',
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: 'input',
      message: 'What color would you like your shape to be?',
      name: 'bgcolor',
    }
  ])
  .then((response) =>
  writeToFile("logo.svg"(response))
  );
}

promptMe()
