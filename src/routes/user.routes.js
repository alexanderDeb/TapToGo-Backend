import { Router } from "express";
import { getUser, getUsers, updateUserSaldo, createUser, spendSaldo } from "../controllers/user.controller.js";

const router = Router();

router.get("/user", getUsers);
router.get("/user/:rfid", getUser);
router.put("/user/:rfid", updateUserSaldo);
router.put("/userspend/:rfid", spendSaldo);
router.post("/user", createUser);

export default router;
