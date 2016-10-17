const path = require('path');
const express = require('express');
const http = require('http');
let app = require('./app');

const isDev = process.env.NODE_ENV === 'development';
const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost: ${app.get('port')}/`);
});

if (module.hot) {
  // This will handle HMR and reload the server
  module.hot.accept('./app.js', function() {
    server.removeListener('request', app);
    app = require('./app.js');
    server.on('request', app);
    console.log('Server reloaded!');
  });
}
