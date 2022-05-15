import { postReview } from "../../helpers/reviewHelper";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const movieId = req.body.movieId;
        await postReview(data);
        try {
            await res.unstable_revalidate(`/movies/${movieId}`);

            return res.json({ revalidated: true })
        } catch (err) {
            // If there was an error, Next.js will continue
            // to show the last successfully generated page
            return res.status(500).send('Error revalidating')
        }
    } else {
        return res.status(405)
    }
}