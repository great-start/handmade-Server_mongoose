const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

const cpus = os.cpus().length;

if (cluster.isPrimary) {
    // console.log(`Process ${process.pid} is running`);

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code) => {
        console.log(`worker ${worker.process.pid} id dies with code ${code}`);
        cluster.fork();
    });

} else {

    console.log(`Worker with ${process.pid} is started`)

}

// for (let i = 0; i < cpus.length - 2; i++) {
//     const CPUcore = cpus[i];
//     console.log('Запустить еще один процесс');
// }
//
// console.log(process.pid);

