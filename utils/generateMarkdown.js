// Function for rendering table of contents
function renderTableOfContents(tableOfContents) {
  // WHEN I click on the links in the Table of Contents
  // THEN I am taken to the corresponding section of the README
  // if (license === none) return "" else return -[license](#license)
  return `# ${tableOfContents}`;
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // WHEN I choose a license for my application from a list of options
  // THEN a badge for that license is added near the top of the README
  // and a notice is added to the section of the README entitled License
  // that explains which license the application is covered under
}
// Function for rendering question
function renderQuestions(questions) {
  //WHEN I enter my GitHub username
  //THEN this is added to the section of the README entitled Questions,
  // with a link to my GitHub profile
  if (data.username) {
    ("- [GitHub] (https://github.com/namgiwoong)");
  }
  //WHEN I enter my email address
  //THEN this is added to the section of the README entitled Questions,
  //with instructions on how to reach me with additional questions
  if (data.email) {
    ("- [To contact me] (nameric@ymail.com)");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} //badge to render 

## Description 
${data.description}

## Table of Contents
- [Installation](#installation)

- [Usage](#Usage)

- [License](#license)

- [Contributing](#contributing)

- [Test](#test)

- [Question])(#questions)

## Installation
${data.installation}

## Usage
${data.usuage}

## License

- [Link to the Website] (https://github.com/namgiwoong/readme-generator)
- [Link to the Repository]
//this project is licensed under ....

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
${renderQuestions}


`;
}

module.exports = generateMarkdown;

// https://img.shields.io/badge/License-LicenseName-<COLOR>.svg

// how to display badge in readme
