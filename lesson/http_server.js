const { app } = require('../framework');
const { userRouter } = require('../src');
const { parseJson, parseURL } = require('../middlewares');


const PORT = process.env.PORT || 5000;

// router.request('GET','/users', (req, res) => {
//     res.end(`${req.url} page from my server`);
// })
//
// router.request('GET','/posts', (req, res) => {
//     res.end(`${req.url} page from my server`);
// })



// router.get('/posts', (req, res) => {
//     res.end(`${req.url} page from my server`);
// });
//
// router.get('/comments', (req, res) => {
//     res.end(`${req.url} page from my server`);
// });

app.use(parseURL('http://localhost:5000'));
app.use(parseJson);

app.addRouter(userRouter);

app.listen(PORT);

// const server = http.createServer((req, res) => {
//     // res.writeHead(200, {
//     //     // 'Content-Type': 'text/html; charset=utf-8'});   // передача в хедере для отображения кирилицы b html страниц
//     //     'Content-Type': 'application/json'
//     // });   // передача в хедере для передачи json строки
//
//     console.log(`${req.method}:${req.url}`);
//     console.log('-------------------------------------------------------');
//     emitter.emit(`${req.method}:${req.url}`, req, res);
//     // console.log(emitted);
//     // if (!emitted) {
//     //     res.end('Page not found');
//     // }
// })


    // if (req.url === '/users') {
    //     res.end(JSON.stringify([
    //         {id: 1, name: 'Vanya'},
    //         {id: 2, name: 'Petya'},
    //     ]));
    // }
    //
    // if (req.url === '/posts') {
    //     res.end('<h1>Posts</h1>');
    // }

    //  server side rendering - генерация страницы на сервере и передача клиенту
    // res.end('<h1>Hello World</h1>');
    // res.end(req.url);
// })
//     .listen(PORT, HOST,(err) => {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log(`Server started at port ${PORT}`);
// });


// http.get('http://localhost:5000', res => {
//     res.end('Hello Jenya');
// })


    // server.listen(PORT, (err) => {
    //     if (err) {
    //         console.log(err.message);
    //     }
    //     console.log(`Server started at port ${PORT}`);
    // });


