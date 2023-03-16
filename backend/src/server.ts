import * as dotenv from "dotenv";
import { app } from "./app";
import { populateDummyData } from "./database/database_seeds";

const environment = process.env.NODE_ENV?.trim() || "dev"; //window adds extra space
dotenv.config({ path: `.env.${environment}` });

const PORT = process.env.PORT;

console.log(`🌍 Running in ${environment} environment`);
app.listen(PORT, () => {
  console.log(`🚂 Express started on port ${PORT}`);
});
