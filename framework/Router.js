class Router {
    constructor() {
        this.endpoint = {};
    }

    request(method = "GET", path, handler) {
        if (!this.endpoint[path]) {
            this.endpoint[path] = {};
        }
        // /users [GET, POST, PUT] /posts [GET, POST, PUT, DELETE]
        const endpoint = this.endpoint[path];

        if(endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже существует`)
        }

        endpoint[method] = handler;
    }

    get(path, handler) {
        return this.request('GET', path, handler);
    }

    post(path, handler) {
        return this.request('POST', path, handler);
    }

    put(path, handler) {
        return this.request('PUT', path, handler);
    }

    delete(path, handler) {
        return this.request('DELETE', path, handler);
    }
}

module.exports = new Router();