const router = require("express").Router()
const db = require('../db')

router.post("/", (req, res, next) => {
    const title = req.body.title
    const categoryId = req.body.ids
    const price = req.body.price
    const city = req.body.cityorneighborhood
    const descr = req.body.description
    const email = req.body.email

    const post = `
    INSERT INTO listing (title, categoryId, price, 'city or neighborhood', description, email)
    VALUES (?, ?, ?, ?, ?, ?)
    `
    db.query(post, [title, categoryId, price, city, descr, email], (err, results, fields) =>{
      console.log("error",err)
      console.log(results)
      res.json(results)
    })
})

module.exports = router


// const post = `
// INSERT INTO listing (id, title, categoryId, price, 'city or neighborhood', 'postal code', description, 'make / manufacturing', 'model / name', email)
// VALUES
// (,'', , , '', , '', '', '','')
// `