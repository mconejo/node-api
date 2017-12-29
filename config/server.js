'use strict';

import Hapi from 'hapi';
import hapi_cors_headers from "hapi-cors-headers";

const server = new Hapi.Server();

server.connection({port: process.env.PORT || 3000 });

require('../app/routes/index.js')(server);

server.ext('onPreResponse', hapi_cors_headers)

server.start((err) => {
  if(err){
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
