import Review from '../models/Review'

export const createReview = async (req, res) => {
    //console.log(req.body)

    const {content, approved, imgURL} = req.body

    const newReview = new Review({content, approved, imgURL});

    newReview.user = req.user.id;

    const reviewSaved = await newReview.save()

    res.status(201).json(reviewSaved)
}

export const getReviews = async (req, res) => {
    const reviews = await Review.find().populate("user", {firstname:1, lastnamefather:1, lastnamemother:1, picture:1});
    res.json(reviews)
}

export const getReviewById = async (req, res) => {
    const review = await Review.findById(req.params.reviewId).populate("user", {firstname:1, lastnamefather:1, lastnamemother:1, picture:1});
    res.status(200).json(review)  
}

export const updateReviewById = async (req, res) => {
    const updatedReview = await Review.findByIdAndUpdate(req.params.reviewId, req.body, {
        new:true
    })
    res.status(200).json(updatedReview)

}

export const deleteReviewById = async (req, res) => {
    const {reviewId} = req.params;
    await Review.findByIdAndDelete(reviewId)
    res.status(204).json()
}