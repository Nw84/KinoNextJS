import { useRouter } from "next/router";
import { MongoClient } from "mongodb";

function FilteredTicketsPage(props) {

    return <div>

        <h1>Hello</h1>
    </div>

}

export async function getStaticProps() {
    const router = useRouter();
    const filter = router.query.slug;

    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/movieScreenings?retryWrites=true&w=majority");

    const db = client.db();

    const screeningsCollection = db.collection("movieScreenings");

    const screenings = await screeningsCollection.find({ movie: { filter } }).toArray();

    client.close();

    return {
        props: {
            screenings: screenings.map((screening) => ({
                title: screening.movie,
                id: screening._id.toString()
            })),
        },
        revalidate: 1
    };
}



export default FilteredTicketsPage;