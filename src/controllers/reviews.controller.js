import Review from '../models/Review'

export const createReview = async (req, res) => {
    //console.log(req.body)

    const {content, approved, imgURL} = req.body

    const newReview = new Review({content, approved, imgURL});

    const reviewSaved = await newReview.save()

    res.status(201).json(reviewSaved)
}

export const getReviews = async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews)
}

export const getReviewById = async (req, res) => {
    const review = await Review.findById(req.params.reviewId);
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