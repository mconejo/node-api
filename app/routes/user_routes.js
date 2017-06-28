'use strict';

import mongoose from 'mongoose';
import User from '../models/user.js';
import Hapi from 'hapi';

export default class User_Routes {

    get(user, reply) {
        if(user) {
            User.findOne({name: user}).exec(function(err, user) {
                if(err) reply(err);
                reply(user);
            });
        } else {
            User.find().exec(function(err, users) {
                if(err) reply(err);
                reply(users);
            });
        }
    }

    post(user, reply) {
        newUser.save().exec(function (err) {
          if(err) reply(`Error creating user: ${newUser.name}!`);

          reply(`User ${newUser.name} created sucessfully!`);
        });
    }

}
