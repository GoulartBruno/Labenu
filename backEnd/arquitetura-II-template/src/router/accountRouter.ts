import express from "express";
import { AccountController } from "../controller/AccountController";

export const accountRouter = express.Router();
const accountController = new AccountController();

accountRouter.get("/", accountController.getAccounts);
accountRouter.get("/:id/balance", accountController.getAccountBalance);
accountRouter.post("/", accountController.createAccount);
accountRouter.put("/:id/balance", accountController.editAccountBalance);
