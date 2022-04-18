const fs = require('fs');
const path = require('path');
const http = require('http');

const filePath = path.resolve(__dirname, 'IMG_3529.MP4');

const readStream = fs.createReadStream(filePath);
// const readStream = fs.createReadStream(filePath,{encoding: 'utf8'});

readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk)
});


readStream.on('error', (err) => console.log(err.message));


// ----------------------------------------------------------------------------
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));

writeStream.end();
writeStream.close();
writeStream.destroy();
writeStream.on('error', (err) => console.log(err.message));




http.createServer((req, res) => {
    // req - readable stream
    // res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

    // стрим закончить читать раньше, чем пользователь скачает
    // достигается синхронилация записи и ответа. в pipe передается stream
    stream.pipe(res);
})
