const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res, next) => {
    const sub1 = `
    Select id, parent_id, name, slug
    from categories
    where parent_id is not null
    `
    db.query(sub1, (err, results, fields) =>{
      console.log(results)
      res.json(results)
    })
})

module.exports = router