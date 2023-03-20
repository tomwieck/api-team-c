import * as dotenv from "dotenv";
import { app } from "./app";
import "./database/database"

const environment = process.env.NODE_ENV?.trim() || "dev"; //window adds extra space
dotenv.config({ path: `./.env.${environment}` });
console.log("API KEY=",process.env.WEATHER_API_KEY)
const PORT = process.env.PORT || 5000;

console.log(`🌍 Running in ${environment} environment`);
app.listen(PORT, () => {
  console.log(`🚂 Express started on port ${PORT}`);
  console.log(`http://localhost:${PORT}/cities -> to get all cities`);
  console.log(`http://localhost:${PORT}/city/1 -> to get one day forecast for a city, given cityId`); 
  console.log(`http://localhost:${PORT}/city/5 -> to get five forecast for a a city, given cityId`);
  console.log(`http://localhost:${PORT}/cities/filter -> to get list of cities which match 'filter' in long name`);
  console.log(`http://localhost:${PORT}/admin/city -> to get list of cities full data for admin`);
  console.log(`http://localhost:${PORT}/admin/city -> to put new city full data for admin`);
  console.log(`http://localhost:${PORT}/admin/city -> to delete city`);
  console.log(`http://localhost:${PORT}/admin/city -> to update city data`);
  console.log(`http://localhost:${PORT}/favourites -> to get program options`);
  console.log(`http://localhost:${PORT}/favourites -> to put program options`);
}); 