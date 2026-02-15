import express from "express";
import { authMiddleware } from "../middleware";
import { prismaClient } from "db/client";

const app = express();

app.get("/api/v1/website", authMiddleware, async(req, res) => {
  const userId = req.userId!;
  const url = req.query.url;

  const data = await prismaClient.website.create({
    data: {
      userId,
      url,
    },
  });

  res.json({
    id: data.id,
  });
});

app.get("/api/v1/status", authMiddleware, async(req, res) => {


  const websiteId =req.query.websiteId! as unknown as string;
  const userId = req.userId!;
   const data = await prismaClient.website.findfirst({
      where:{
          id: websiteId,
          userId
      },
      include:{
        ticks:true
      }
    });

    res.json(data);
});
app.get("/api/v1/websites");
app.delete("/api/v1/website");

app.listen(8080);
