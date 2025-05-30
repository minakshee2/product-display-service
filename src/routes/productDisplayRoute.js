const express = require("express");
const router = express.Router();
const productDisplayController = require("../controllers/productDisplayController");

router.get("/display", productDisplayController.getAllProductsDisplay);

//export default router;
module.exports = router;
