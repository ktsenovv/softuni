function requestValidator(req) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]*$/;

    if (!req.hasOwnProperty('method') || !methods.includes(req.method)) {
        throw Error(`Invalid request header: Invalid Method`);
    }

    if (!req.hasOwnProperty('uri') || !uriPattern.test(req.uri)) {
        throw Error(`Invalid request header: Invalid URI`);
    }

    if (!req.hasOwnProperty('version') || !versions.includes(req.version)) {
        throw Error(`Invalid request header: Invalid Version`);
    }

    if (!req.hasOwnProperty('message') || !messagePattern.test(req.message)) {
        throw Error(`Invalid request header: Invalid Message`);
    }

    return req;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

/* Invalid request header: Invalid Method
console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));*/

/* Invalid request header: Invalid Version
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));*/