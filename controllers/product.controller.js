import mongoose from "mongoose";
import Product from "../models/product.model.js";

// CREATE: POST /api/products
export async function createProduct(req, res) {
  const { name, description, price, quantity } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
    quantity
  });

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: product
  });
}

// READ ALL: GET /api/products
export async function getProducts(req, res) {
  const products = await Product.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
}

// READ ONE: GET /api/products/:id
export async function getProductById(req, res) {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid product ID" });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  res.status(200).json({ success: true, data: product });
}

// UPDATE: PUT /api/products/:id
export async function updateProduct(req, res) {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid product ID" });
  }

  const allowedFields = ["name", "description", "price", "quantity"];
  const updates = {};

  for (const field of allowedFields) {
    if (req.body[field] !== undefined) updates[field] = req.body[field];
  }

  const product = await Product.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true
  });

  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: product
  });
}

// DELETE: DELETE /api/products/:id
export async function deleteProduct(req, res) {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid product ID" });
  }

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    data: product
  });
}
