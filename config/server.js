'use strict';

import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({port: process.env.PORT || 3000 });

require('../app/routes/index.js')(server);

server.start((err) => {
  if(err){
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
