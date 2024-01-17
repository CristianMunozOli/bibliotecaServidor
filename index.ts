import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
const allowedOrigins = ["*"];

app.set('view engine', 'ejs');
app.set('views', './context/views');


//routers
/*import { routerPeriodista } from "./periodista/infrastructure/rest/Periodista.route";
app.use("/api", routerPeriodista);
*/
app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});