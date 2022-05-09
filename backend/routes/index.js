import express from "express";
import {
    getAllBiodata,
    getBiodataById,
    createBiodata,
    updateBiodata,
    deleteBiodata
} from "../controllers/Biodata.js";

const router = express.Router();

router.get("/", getAllBiodata);
router.get("/:id", getBiodataById);
router.post("/", createBiodata);
router.patch("/:id", updateBiodata);
router.delete("/:id", deleteBiodata);

export default router;