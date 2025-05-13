import { PrismaClient } from "@orm/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import invariant from "tiny-invariant";
import { singleton } from "./singleton";

const DB_URL = process.env.DATABASE_URL;
invariant(DB_URL);

const prisma = singleton("prisma", getPrismaClient);

function getPrismaClient() {
  return new PrismaClient().$extends(withAccelerate());
}

export default prisma;
