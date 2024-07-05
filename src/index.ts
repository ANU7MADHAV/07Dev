import express, { Express, Request, Response } from "express";
import serverConfig from "./config/serverConfig";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(serverConfig.port, () => {
  console.log("server started" + serverConfig.port);
});
