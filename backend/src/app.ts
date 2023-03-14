import express from "express";
import router from "./routes/routes";

export const app = express();

app.use(express.json());

app.use("/", router);

// config
const PORT = 3030;

app.get("/", (req, res) =>
  res.json({ message: "Welcome to the Weather API!" })
);

// server
app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});
