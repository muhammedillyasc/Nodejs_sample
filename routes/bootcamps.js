const express = require("express");
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const router = express.Router();

//1-ivide app.get('/',(req,res)=>{})  ingane access illa, app inu ivide access illa. ath kondanu router use cheyyunnath
//2- ivide path ap1/v1/bootcamps ingane kodukkunnath oyivakkam
//1-in server.js-->   const bootcamps=require('./routes/bootcamps');
//app.use('./api/v1/bootcamp',bootcamps)
//bottom here module.exports=router

//this is the way of using the routes here
// by this way we can have delete,post,get,put.
// router.get("/", (req, res) => {
//   res.send("hello");
// });

// we can use controllers to write the neet code
router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
