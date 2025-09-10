import express from "express";
import { engine } from "express-handlebars";
import path from "path";

import { routerApp } from "./routes";

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(routerApp);
