import { getWeatherApibyCityName} from "../controllers/weather.js";
import express from "express";

const router=express.Router();
router.get("/:cityName",getWeatherApibyCityName);


export default router;
