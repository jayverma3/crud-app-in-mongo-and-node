const mongoose = require("mongoose");
const express = require("express");
const application = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

//middleware
application.use(express.json());
application.use(express.urlencoded({ extended: false }));

//route
application.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://jeremydsanta:zndth1yGZY9nBFnS@course.vterduq.mongodb.net/?retryWrites=true&w=majority&appName=course"
  )
  .then(() => console.log("Connected to mongoose"))
  .catch(() => {
    console.log("Conn Failed");
  });

application.listen("3000", () => {
  console.log("Server started on port 3000");
});

application.get("/", (req, res) => {
  res.send("Ahoy pirate");
});

/*
application.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});


application.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    res.json({ message: err.message });
  }
});

application.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
});

application.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.json({ message: "Not GOtenns" });
    }
    const updateProduct = await Product.findById(id);

    res.json(updateProduct);
  } catch (err) {
    res.json({ message: err.message });
  }
});

application.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      return res.json({ message: "Not GOtenns" });
    }
    res.json({ message: "Product deleted Succesfully" });
    //const deleteProduct = await Product.findById(id);

    res.json(deleteProduct);
  } catch (err) {
    res.json({ message: err.message });
  }
});*/
