const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res, next) => {
  const sql = `
  SELECT name, id, parent_id, slug
  FROM craigslist.categories
  where parent_id is null
 `
  db.query(sql, (err, results, fields) =>{
    console.log(results)
    res.json(results)
  })
})


module.exports = router
