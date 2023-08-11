require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect("mongodb://localhost/organization-app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const Organization = require("./models/Organization");
const User = require("./models/User");
const Store = require("./models/Store");

// Define your endpoints here
// Create a new organization
app.post("/organizations", async (req, res) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all organizations
app.get("/organizations", async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a specific organization
app.get("/organizations/:id", async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id).populate(
      "users"
    );
    res.json(organization);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update an organization
app.put("/organizations/:id", async (req, res) => {
  try {
    const updatedOrganization = await Organization.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedOrganization);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new user
app.post("/organizations/:orgId/users", async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
      organization: req.params.orgId,
    });
    const organization = await Organization.findByIdAndUpdate(
      req.params.orgId,
      { $push: { users: user._id } },
      { new: true }
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all users for an organization
app.get("/organizations/:orgId/users", async (req, res) => {
  try {
    const users = await User.find({ organization: req.params.orgId });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a user
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new store for a user
app.post("/users/:userId/stores", async (req, res) => {
  try {
    const store = await Store.create({ ...req.body, user: req.params.userId });
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $push: { stores: store._id } },
      { new: true }
    );
    res.status(201).json(store);
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all stores for a user
app.get("/users/:userId/stores", async (req, res) => {
  try {
    const stores = await Store.find({ user: req.params.userId });
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
