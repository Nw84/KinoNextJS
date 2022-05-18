import { postReview } from "../../helpers/reviewHelper";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        await postReview(data);
        return res.status(200).json("Recension inskickad");
    } else {
        return res.status(405)
    }
}