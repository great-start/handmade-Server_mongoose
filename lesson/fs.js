const fs = require('lesson/fs');
const path = require('lesson/path');

// create folder sync
// fs.mkdirSync(path.resolve(__dirname,'dir'));

// create folder sync recursive
// fs.mkdirSync(path.resolve(__dirname,'dir','dir2','dir3'),{recursive: true});

// create folder async
// fs.mkdir(path.resolve(__dirname,'dir'),(err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Folder was created!')
// });

// remove folder
// fs.rmdir(path.resolve(__dirname,'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// write file
// fs.writeFile(path.resolve(__dirname,'file.js'), 'First data', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Data was written');
// })

// append data to file
// fs.appendFile(path.resolve(__dirname,'file.js'), 'Second data', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Data was added')
// })

// writeFile using callback
async function asyncWriteFile(path, data) {
    await new Promise((resolve, reject) => {
        fs.writeFile(path, data,(err) => {
            if (err) {
                reject(err.message);
            }

            resolve();
        })
    })
}

async function asyncAppendFile(path, data) {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
            if (err) {
                reject(err.message);
            }

            resolve();
        }),
    );
}

const asyncReadFile = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf8'}, (err,data) => {
            if (err) {
                reject(err.message);
            }

            resolve(data);
        }),
    );
}

const asyncRemoveFile = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, err => {
        if (err) {
            reject(err.message)
        }
        resolve();
    }))
}

// asyncWriteFile(path.resolve(__dirname,'file.txt'), 'First DATA \n')
//     .then(() => asyncAppendFile(path.resolve(__dirname,'file.txt'),'SECOND DATA \n'))
//     .then(() => asyncAppendFile(path.resolve(__dirname,'file.txt'),'THIRD DATA'))
//     .then(() => asyncReadFile(path.resolve(__dirname,'file.txt')))
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));

// asyncRemoveFile(path.resolve(__dirname, 'file.txt'))
//     .then(() => console.log('file was removed'));

const text = process.env.STRING || '';
const filePath = path.resolve(__dirname,'new_file.txt');

const write = async(path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, err => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }));
}

const read = async(path, data) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf8'}, (err,data) => {
        if (err) {
            reject(err.message);
        }
        resolve(data);
    }));
}

const remove = async(path) => {
    return new Promise((resolve, reject) => fs.rm(path, err => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }));
}

write(filePath, text)
    .then(() => read(filePath))
    .then((data) => {
        console.log('Quantity of words: ', data.trim().split(' ').length);
    })
    .then(() => write(path.join(__dirname, 'new_file2.txt'), text))
    .then(() => remove(filePath))
    .catch((err) => console.log(err.message));


