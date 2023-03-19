import * as dotenv from "dotenv";
import { app } from "./app";
import { populateDummyData } from "./database/database_seeds";

const environment = process.env.NODE_ENV?.trim() || "dev"; //window adds extra space
dotenv.config({ path: `.env.${environment}` });

const PORT = process.env.PORT || 5000;

console.log(`🌍 Running in ${environment} environment`);
app.listen(PORT, () => {
  console.log(`🚂 Express started on port ${PORT}`);
  console.log(`http://localhost:${PORT}/cities -> to get all cities`);
  console.log(`http://localhost:${PORT}/city/1 -> to get one day forecast for a city, given cityId`); 
  console.log(`http://localhost:${PORT}/city/5 -> to get five forecast for a a city, given cityId`); 

}); 