'use strict';

import mongoose from 'mongoose';

export default class DB {

  connect () {
    mongoose.connect('mongodb://admin:123@cluster0-shard-00-00-tmfmm.mongodb.net:27017,cluster0-shard-00-01-tmfmm.mongodb.net:27017,cluster0-shard-00-02-tmfmm.mongodb.net:27017/users?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function() {
      console.log('Connected to DB! \nWaiting...');
    });
  }

}
