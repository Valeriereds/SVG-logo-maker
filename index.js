// needed to call inquirer
const inquirer = require('inquirer');
// needed to call to write to file
const fs = require('fs');
// needed to import the generated shapes
const { Triangle, Circle, Square } = require('./lib/generateShapes');


function asYouWish(deFileMe, response) {
  let randySvg = ""
  let shapeMe;

  randySvg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  if (response.shapes === 'Circle') {
    shapeMe = new Circle();
    randySvg += `<circle cx="150" cy="100" r="80" fill="${response.bgColor}"/>`;
  } else if (response.shapes === 'Square') {
    shapeMe = new Square();
    randySvg += `<rect x="100" y="50" width="100" height="100" fill="${response.bgColor}"/>`;
    } else if (response.shapes === 'Triangle') {
      shapeMe = new Triangle;
      randySvg += `<polygon points="150, 18 244, 182 56, 182" fill="${response.bgColor}"/>`;
    } else {
      console.log("Don't be a square, choose a shape!");
    }

    randySvg += `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${response.textColor}">${response.initials}</text></svg>`;

    fs.writeFile(deFileMe, randySvg, (err) => {
      err ? console.log(err) : console.log("It's Aliveeeeeee!");
    })
  }
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
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose a shape for your logo:',
      name: 'shapes',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      message: 'What color would you like your shape to be?',
      name: 'bgColor',
    }
  ])
  .then((response) => {
    if (response.initials.length > 3){
      console.log('Please input only 3 letters');
      promptMe();
    } else{
      asYouWish("logo.svg", response);
      }
    }
  );
}


promptMe();

