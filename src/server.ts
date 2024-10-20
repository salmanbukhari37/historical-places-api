import express, { Application } from "express";
import placeRoutes from "./places/placeRoutes";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app: Application = express();

app.use("/images", express.static("public/images"));

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/place", placeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
