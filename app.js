import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();

// Middleware: reads JSON request bodies
app.use(express.json());

// Basic route to confirm the API is running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Node + Express + MongoDB API is running" });
});

// Product CRUD routes
app.use("/api/products", productRoutes);

// Not-found handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID or value"
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

export default app;
