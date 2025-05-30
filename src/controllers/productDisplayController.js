const { get } = require("../../db/mongo");

const getAllProductsDisplay = async (req, res) => {
  try {
    //console.log("Fetching all products...");
    const db = get();
    const productsDisplay = await db.collection("displays").find({}).toArray();
    //console.log("Products fetched successfully:", productsDisplay);

    res.status(200).json(productsDisplay);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllProductsDisplay,
};
