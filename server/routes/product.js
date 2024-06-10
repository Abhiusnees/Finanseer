import express from "express";
import PRODUCT from "../models/PRODUCT.js";

const router = express.Router();
router.get("/products", async (req, res) => {
  try {
    const products = await PRODUCT.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
