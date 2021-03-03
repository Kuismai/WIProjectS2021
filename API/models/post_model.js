const db = require("../database");

const item = {
  add: function (item, callback) {
    return db.query(
      "insert into item_table(id, user_id, name, photo_url, price, description, category, location, postdate, delivery) values($1,$2,$3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        item.id,
        item.user_id,
        item.name,
        item.photo_url,
        item.price,
        item.description,
        item.category,
        item.location,
        item.postdate,
        item.delivery
      ],
      callback
    );
  },

  get: function (callback) {
    return db.query("select * from item_table", callback);
  },

  getOne: (id, callback) => {
    return db.query("select * from item_table where id = $1", [id], callback);
  },

  deleteOne: (id, callback) => {
    return db.query("delete from item_table where id = $1", [id], callback);
  },

  deleteMany: function (callback) {
    return db.query("delete from item_table", callback);
  },
};

module.exports = item;
