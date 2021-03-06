'use strict';

import mongoose from 'mongoose';
import User from '../models/user.js';
import Hapi from 'hapi';

export default class User_Routes {

    get(user, reply) {
        if(user) {
            this.getUserById(user, reply);
        } else {
            this.getAllUsers(user, reply);
        }
    }

    post(newUser, reply) {
        createUser(newUser, reply);
    }

    put(id, newUser, reply) {
        User.findOneAndUpdate(newUser, function(err, user) {
            reply(`User ${ newUser.name} updated sucessfully!`);
        });
        // user.update(user, function (err) {
        //   if(err) reply(`Error updating user: ${user.name}!`);
        //
        //   reply(`User ${ user.name} updated sucessfully!`);
        // });
    }

    getUserById(user, reply) {
        User.findOne({_id: user}).exec(function(err, user) {
            if(err) reply(err);
            reply(user);
        });
    }

    getAllUsers(user, reply) {
        User.find().exec(function(err, users) {
            if(err) reply(err);
            reply(users);
        });
    }

    createUser(newUser, reply) {
        User.save(function (err) {
          if(err) reply(`Error creating user: ${newUser.name}!`);

          reply(`User ${newUser.name} created sucessfully!`);
        });
    }

}
