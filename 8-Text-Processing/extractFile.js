function extractFile(string) {
    let elements = string.split('\\');
    // let lastEl = elements[elements.length - 1];
    let lastEl = elements.pop();
    let index = lastEl.lastIndexOf('.');

    let name = lastEl.substring(0, index);
    let extension = lastEl.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');