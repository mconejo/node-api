'use strict';

import User from '../models/user.js';
import User_Routes from './user_routes.js'
import DB from '../db.js';

const db = new DB();
const user_routes = new User_Routes();

db.connect();

module.exports = function (server) {

  server.route({
    method: 'GET',
    path: `/user/{name?}`,
    handler: function (request, reply) {
      const user = request.params.name;

      user_routes.get(user, reply);
    }
  });

  server.route({
    method: 'POST',
    path: `/user`,
    handler: function (request, reply) {
      let newUser = new User(request.payload);

      user_routes.post(newUser, reply);
    }
  });

}
