import { Request, Response } from "express";

export class Controller {
  constructor() {}

  sendMessage(status: number, message: string = "") {
    return (req: Request, response: Response) => {
      response.status(status).json({ data: null, error: message });
    };
  }
  sendData(status: number = 200, response: any = "status success") {
    return (req: Request, res: Response) => {
      res.status(status).json({ data: response, error: null });
    };
  }
}
