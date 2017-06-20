'use strict';

import User from '../models/user.js';
import DB from '../db.js';

const db = new DB();

db.connect();

// export default class Routes {
//   let server;
//
//   constuctor (serv) {
//     server = serv;
//   }
//
//   userRoutes () {
//
//   };
//
// }

module.exports = function (server) {

  server.route({
    method: 'GET',
    path: `/user/{name?}`,
    handler: function (request, reply) {
      const user = request.params.name;

      if(user) {
        User.findOne({name: user}, function(err, user){
          if(err) reply(`Error retrieving user: ${user}!`);

          reply({user: user});
        });
      } else {
        User.find(function(err, users){
          if(err) reply('Error retrieving users!');

          reply({users: users});
        });
      }
    }
  });

  server.route({
    method: 'POST',
    path: `/user`,
    handler: function (request, reply) {
      let newUser = new User(request.payload);

      newUser.save(function (err) {
        if(err) reply(`Error creating user: ${newUser.name}!`);

        reply(`User ${newUser.name} created sucessfully!`);
      });
    }
  });

}
