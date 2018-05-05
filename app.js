
const fs = require('fs');

const filenames = fs.readdirSync('./');

var dir = './clean';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

filenames.filter((f) => !/\.js/.test(f) && !fs.lstatSync(f).isDirectory())
.forEach((filename) => {
    const filenameWithoutSpaces = filename.replace(/\s/g, '_');
    fs.rename(`./${filename}`, `${dir}/${filenameWithoutSpaces}`, console.error);
}); 