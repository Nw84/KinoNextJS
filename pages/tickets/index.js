import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

import ScreeningSearch from "../../components/screenings/Screening-search";

function tickets(props) {
    const router = useRouter();
    function onSearchHandler(name) {
        const fullPath = `/tickets/${name}`;
        router.push(fullPath)
    }


    return <div>
        <h1>Biljetter</h1>
        <ScreeningSearch onSearch={onSearchHandler} posters={props.posters} />
    </div>
}


export async function getStaticProps() {

    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/moviePosters?retryWrites=true&w=majority");

    const db = client.db();

    const postersCollection = db.collection("moviePosters");

    const posters = await postersCollection.find().toArray();

    client.close();

    return {
        props: {
            posters: posters.map((poster) => ({
                title: poster.title,
                id: poster._id.toString()
            })),
        },
        revalidate: 1
    };
}

export default tickets; 