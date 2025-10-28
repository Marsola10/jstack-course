const http = require('http');

// const users = require('./mocks/users');

// const UserController = require('./controllers/UserController');

const routes = require('./routes');


const server = http.createServer((request, response) => {
  console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`);
  
  
  const route = routes.find((routObj) => (
    routObj.endpoint === request.url && routObj.method === request.method
  ));

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);

  }
  
  // if (request.url === '/users' && request.method === 'GET') {

  //   // response.writeHead(200, { 'Content-Type': 'application/json' });
  //   // response.end(JSON.stringify(users));
  //   UserController.listUsers(request, response);


  // } else {
  //   response.writeHead(404, { 'Content-Type': 'text/html' });
  //   response.end(`Cannot ${request.method} ${request.url}`);

  // }
  
  
  // response.writeHead(200, { 'Content-Type': 'text/html' });
  // response.end('<h1>Hello, world!</h1>');

}); 

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));