import express, { Response } from "express";
import { ClimateType } from "../types";
import climateTypesService from "../services/climateTypesService";

const router = express.Router();

router.get("/", (_req, res: Response<ClimateType[]>) => {
    res.send(climateTypesService.getClimateTypes());
});

export default router;