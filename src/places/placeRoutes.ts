import { Router, Request, Response } from "express";
import { places } from "../data";
import { Place } from "../dto/types";

const router: Router = Router(); // Correctly define the router

// @route GET /api/places
// @desc Fetch all historical places
router.get("/", (req: Request, res: Response) => {
  res.json(places);
});

// @route GET /api/places/:id
// @desc Fetch a specific historical place by ID
router.get("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const place: Place | undefined = places.find((p) => p.id === id);
  if (!place) {
    res.status(404).json({ error: "Place not found" });
  }
  res.send(place);
});

// @route GET /api/places/:id
// @desc Fetch a specific historical place by ID
router.put("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const place: Place | any = places.find((p) => p.id === id);

  if (!place) {
    res.status(404).json({ error: "Place not found" });
  }

  // Extract the visited field from the request body
  const { visited } = req.body;

  // Check if visited is a boolean
  if (typeof visited !== "boolean") {
    res
      .status(400)
      .json({ error: "Invalid value for visited. It should be a boolean." });
  }

  // Update the visited status of the place
  place.visited = visited ?? false;

  // Send the updated place object as a response
  res.json(place);
});

export default router;
