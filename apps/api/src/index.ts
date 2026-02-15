import express from "express";
import { authMiddleware } from "../middleware";
import { prismaClient } from "db/client";

const app = express();

app.get("/api/v1/website", authMiddleware, (req, res) => {
  const userId = req.userId!;
  const url = req.query.url;

  prismaClient.website.create({
    data: {
      userId,
      url,
    },
  });
});

app.get("/api/v1/status", authMiddleware, () => {});
app.get("/api/v1/websites");
app.delete("/api/v1/website");

app.listen(8080);
