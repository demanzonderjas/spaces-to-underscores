
const fs = require('fs');

const filenames = fs.readdirSync('./');

var fileDir = process.argv[2] || './';
var destDir = process.argv[3] || './clean';

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir);
}

filenames.filter((f) => !/\.js/.test(f) && !fs.lstatSync(f).isDirectory())
.forEach((filename) => {
    const filenameWithoutSpaces = filename.replace(/\s/g, '_');
    fs.rename(`${fileDir}${filename}`, `${destDir}/${filenameWithoutSpaces}`, console.error);
}); 