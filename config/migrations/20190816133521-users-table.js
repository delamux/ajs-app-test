'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('users', {
    id: {type: 'int', primaryKey: true, autoIncrement: true},
    name: {type: 'string', notNull: true, length: 255},
    last_name: {type: 'string', notNull: false, length: 255},
    age: {type: 'int', notNull: false, length: 11}
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
