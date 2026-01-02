import { Request, Response } from "express";
import { ensureBrowser } from '@remotion/renderer';

export default async function handler(req: Request, res: Response) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, x-copilotkit-runtime-client-gql-version");

  await ensureBrowser();
  
  if (req.method === "OPTIONS") {
    res.status(200).send("Method Allowed");
    return;
  }

  res.status(200).send("Hello world");
}