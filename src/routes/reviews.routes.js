import { Router } from "express";
const router = Router();

import * as reviewsCtrl from "../controllers/reviews.controller";
import { authJwt } from "../middlewares";

router.post("/", [authJwt.verifyToken/*, authJwt.isModerator*/], reviewsCtrl.createReview);

router.get("/", reviewsCtrl.getReviews);

router.get("/user/:userId", reviewsCtrl.getReviewsByUserId);

router.get('/:reviewId', reviewsCtrl.getReviewById);

router.put("/:reviewId", [authJwt.verifyToken, authJwt.isAdmin], reviewsCtrl.updateReviewById);

router.delete("/:reviewId", [authJwt.verifyToken, authJwt.isAdmin], reviewsCtrl.deleteReviewById);


export default router;