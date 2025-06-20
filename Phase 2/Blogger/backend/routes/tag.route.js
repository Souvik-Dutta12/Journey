import { Router } from "express";
import {
    createTag,
    getAllTags
} from "../controllers/tag.controller.js"

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(getAllTags)

//secured routes
router.route("/tag/create").post(verifyJWT,createTag)

export default router;