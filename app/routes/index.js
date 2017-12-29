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
        path: `/user/{id?}`,
        handler: function (request, reply) {
            let user = request.params.id;

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

    server.route({
        method: 'PUT',
        path: `/user/{id}`,
        handler: function (request, reply) {
            let user = new User(request.payload),
                id = request.params.id;

            user_routes.put(id, user, reply);
        }
    });

}
