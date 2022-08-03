// Function for rendering title
function renderTitle(title) {
  return `# ${data.title}`;
}

// Function for rendering
function renderDescription(description) {
  return `# ${data.description}`;
}

// Function for rendering
function renderTableOfContents(tableOfContents) {
  return `# ${data.tableOfContents}`;
}

// Function for rendering
function renderInstallation(installation) {
  return `# ${data.installation}`;
}

// Function for rendering
function renderUsuage(usuage) {
  return `# ${data.usuage}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function for rendering
function renderContributing(contributing) {
  return `# ${data.contributing}`;
}

// Function for rendering
function renderTests(tests) {
  return `# ${data.tests}`;
}

// Function for rendering
function renderQuestions(questions) {
  return `# ${data.questions}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${renderTitle(data.title)}

## Description

## Table of Contents

## Installation

## Usage

## License

- [Link to the Website] (https://github.com/namgiwoong/readme-generator)
- [Link to the Repository]

## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
