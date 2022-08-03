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
    message: "Hello?",
    name: "test",
  },
];

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
