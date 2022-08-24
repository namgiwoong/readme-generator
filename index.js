// write file
const fs = require("fs");
// ask the user for data
const inquirer = require("inquirer");
// generate the html
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of question for user input
const question = [
  {
    type: "input",
    message: "project title:",
    name: "title",
  },
  {
    type: "input",
    message: "description:",
    name: "description",
  },
  {
    type: "input",
    message: "installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "usage:",
    name: "usuage",
  },
  {
    type: "input",
    message: "contribution:",
    name: "contributing",
  },
  {
    type: "input",
    message: "test:",
    name: "test",
  },
  //badge added near the top of README and adde to the license section
  //list
  {
    type: "list",
    message: "license for the project:",
    name: "license",
  },
  //username added to question section with github link
  {
    type: "input",
    message: "Github username:",
    name: "username",
  },
  //email added to question section with instruction on how to reach me with additional quesiton
  {
    type: "input",
    message: "email address:",
    name: "email",
  },
];

//NOT REQUIRED TO USE THIS FUNCTION
//Create a function to write README file
// function writeToFile(fileName, data) {}

//Create a function to initialize app
function init() {
  //Ask the user the questions
  inquirer
    .prompt(question)
    //THEN I want to do pass `responses` to `generateMarkdown` so we can get the `markdown`
    .then((response) => {
      const markdown = generateMarkdown(response);

      //THEN write the `markdown` to a file ``OUTPUT_README.md`
      fs.writeFile("OUTPUT_README.md", markdown, (err) =>
        err ? console.error(err) : console.log("Success")
      );
    });
}

// Function call to initialize app
init();
