// try catch finally
function readFile(path) {
  throw new Error('File path not found.');
  return 'File Contents';
}

function processFile(path) {
  // const content = readFile(path);
  // const result = 'hi' + content;
  // return result;
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.massage);
    // console.log(error.stack);
    content = 'Basic Content';
  } finally {
    console.log('Successful or unsuccessful, resources can be cleaned up last');
  }
  const result = 'hi ' + content;
  return result;
}

const result = processFile('the route');
console.log(result);
