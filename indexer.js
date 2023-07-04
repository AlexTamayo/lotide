const fs = require('fs');
const path = require('path');

const currentDirectory = process.cwd();

const fileName = 'index.js';


const createIndexString = function(arr) {

  const elementsToRemove = ['index', 'indexer'];

  const filteredArr = arr.filter((element)=> !elementsToRemove.includes(element));

  // Find the longest string in the array
  const longestString = filteredArr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });

  // Pad each string in the array to match the length of the longest string
  const paddedStringEnd = filteredArr.map((string) => string.padEnd(longestString.length));

  // Initialize the result string
  let theString = '';

  // Loop through the array and construct the string for each element
  filteredArr.forEach((element, index) => {
    const string = `const ${paddedStringEnd[index]} = require('./${element}');\n`;
    theString += string;
  });

  // Add module.exports part
  theString += `\n\nmodule.exports = {\n`;

  // Loop through the array again to construct the module.exports part
  for (const [index, element] of filteredArr.entries()) {

    if (index + 1 === filteredArr.length) {
      // If it's the last element, add without a comma
      // const string = `  ${paddedStringEnd[index]} : ${element}\n`;
      const string = `  ${element}\n`;
      theString += string;
      continue;
    }

    // Add with a comma for other elements
    // const string = `  ${paddedStringEnd[index]} : ${element},\n`;
    const string = `  ${element},\n`;
    theString += string;
  }

  // Close the module.exports object and the function
  theString += "};";

  // console.log(theString);

  return theString;

};


fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const jsFiles = files.filter((file) => {
    const filePath = path.join(currentDirectory, file);
    const fileExtension = path.extname(filePath);
    return fs.statSync(filePath).isFile() && fileExtension === '.js';
  }).map(file => file.slice(0, -3));

  const content = createIndexString(jsFiles); // Capture the generated string

  // console.log(content);

  
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${fileName} has been saved.`);
  });

});