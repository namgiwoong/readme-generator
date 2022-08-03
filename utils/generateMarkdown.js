// Function for rendering table of contents
function renderTableOfContents(tableOfContents) {
  // WHEN I click on the links in the Table of Contents
  // THEN I am taken to the corresponding section of the README
  return `# ${data.tableOfContents}`;
}
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
  //WHEN I enter my email address
  //THEN this is added to the section of the README entitled Questions,
  //with instructions on how to reach me with additional questions
  return `# ${data.questions}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description 
${data.description}

## Table of Contents

## Installation
${data.installation}

## Usage
${data.usuage}

## License

- [Link to the Website] (https://github.com/namgiwoong/readme-generator)
- [Link to the Repository]

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions

`;
}

module.exports = generateMarkdown;
