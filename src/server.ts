import express, { Application } from "express";
import placeRoutes from "./places/placeRoutes";
import path from "path";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3001", // Replace with your front-end URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
};

// Initialize express
const app: Application = express();

// Serve static files from the "public" directory
app.use("/images", express.static("public/images"));

app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api/place", placeRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
