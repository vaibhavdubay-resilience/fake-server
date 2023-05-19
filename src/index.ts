import express, { json } from "express";
import cors from "cors";
import { mainRoutes } from "./module";
class Main {
  server;
  constructor() {
    this.server = express();
    this.server.use(json(), cors());
    this.configureRoutes();
    this.startServer();
  }

  configureRoutes() {
    this.server.use("/api", mainRoutes);
  }
  startServer() {
    this.server.listen(80, () => {
      console.log("server started");
    });
  }
}
new Main();
