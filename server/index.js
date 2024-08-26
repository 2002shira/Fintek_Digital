import express from "express"
import cors from "cors"
import { errorHandling } from "./middlewares/errorHandling.js";
import WeatherRouter from "./routes/weather.js"

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/weather",WeatherRouter);

app.use(errorHandling);
let port=3500;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})
