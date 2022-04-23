const Emitter = require('events');
const http = require('http');
const { bodyParse } = require('../middlewares');

class Application {
    constructor() {
        this.emitter = new Emitter();
        this.server = this._createServer();
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }

    addRouter(router) {
        Object.keys(router.endpoint).forEach(path => {
            const endpoint = router.endpoint[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method];

                // создание событий и callback при срабатывании событий
                this.emitter.on(this._getRouteMask(method, path), (req, res) => {
                    this.middlewares.forEach(middleware => middleware(req, res));
                    handler(req, res);
                });
            });
        });
    }

    _createServer() {
        return http.createServer((req, res) => {
            // res.writeHead(200, {
            //     // 'Content-Type': 'text/html; charset=utf-8'});   // передача в хедере для отображения кирилицы b html страниц
            //     'Content-Type': 'application/json',   //  передача в хедере для передачи json строки
            //     'Access-Control-Allow-Origin': '*',
            // });

            bodyParse(req, () => {
                // запуск события
                const emitted = this.emitter.emit(this._getRouteMask(req.method, req.url), req, res);

                if (!emitted) {
                    res.end('Page not found');
                }
            });
        });
    }

    listen(port) {
        return this.server.listen(port, (err) => {
            if (err) {
                console.log(err.message);
            }
            console.log(`Server started at port ${port}`);
        });
    }

    _getRouteMask(method, path) {
        return `${method}:${path}`;
    }
}

module.exports = new Application();