import { postReview } from "../../helpers/getReviews";

export default async function handler(req, res) {
    if(req.method === "POST") {
        const data = req.body;
        const result = postReview(data);

        res.status(201).json({ message: "Review posted"})
    }
}