const db = require("../../../database/dbConfig.js");

module.exports = { addToWatchList, getWatchlist, getListItemById };

async function addToWatchList(movie) {
  await db("user_letterboxd_watchlist")
  .select('*')
  .where("letterboxd_uri", movie.letterboxd_uri)
  .andWhere("user_id", movie.user_id)
  .then(watchlist => {
    if(watchlist.length === 0) {
      return db("user_letterboxd_watchlist")
      .insert(movie, "id")
    }
  }); 
};

function getWatchlist(user_id) {
  return db("user_letterboxd_watchlist")
    .where("user_id", user_id);
};

function getListItemById(id) {
  return db("user_letterboxd_watchlist")
    .where("id", id )
    .first();
};