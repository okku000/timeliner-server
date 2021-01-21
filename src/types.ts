import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Session } from "express-session";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  // 1:53:00
  req: Request & {
    session: Session & { userId: number };
  };
  res: Response;
};
