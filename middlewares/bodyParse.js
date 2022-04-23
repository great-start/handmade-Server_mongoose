
//  req - это стрим(а значит любые данне приходят в виде буфера). Поэтому, для приема данннужно обработать данные
module.exports = (req, action) => {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });
    req.on('end', () => {
        if (data) {
            req.body = JSON.parse(data);
        }
        action();
    });
};