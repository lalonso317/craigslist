const router = require("express").Router()
const db = require('../db')



router.get("/posts/:slug", (req, res, next) =>{
  const catId = req.params.catId

  const sql = `
  SELECT * FROM listing WHERE slug = ?
  `
  db.query(sql, [slug], (err, results, fields) =>{
    res.json(results)
  })
})

router.get("/post/:postId", (req, res, next) =>{
  const postId = req.params.postId

  const sql = `
  SELECT * FROM listing WHERE id = ?
  `
  db.query(sql, [postId], (err, results, fields) =>{
    res.json(results)
  })
})

router.post("/posts", (req, res, next) => {
    const title = req.body.title
    const categoryId = req.body.all
    const price = req.body.price
    const city = req.body.cityorneighborhood
    const descr = req.body.description
    const email = req.body.email

    const post = `
    INSERT INTO listing (title, categoryId, price, 'city or neighborhood', description, email)
    VALUES (?, ?, ?, ?, ?, ?)
    `
    db.query(post, [title, categoryId, price, city, descr, email], (err, results, fields) =>{
      if (err) {
        throw new Error("WHOOPS")
      }else{
        console.log(results)
        res.json(results)
      }
    })
})

module.exports = router


// const post = `
// INSERT INTO listing (id, title, categoryId, price, 'city or neighborhood', 'postal code', description, 'make / manufacturing', 'model / name', email)
// VALUES
// (,'', , , '', , '', '', '','')
// `