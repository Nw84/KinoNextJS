
import { useRouter } from "next/router";
import ScreeningsList from "../../components/screenings/ScreeningsList";
import { getAllScreenings } from "../../helpers/getScreenings";
import { getAllMoviePosters } from "../../helpers/getAllPosters";
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
        <ScreeningsList screenings={props.screenings} />
    </div>
}


export async function getStaticProps() {

    const screenings = await getAllScreenings();
    const posters = await getAllMoviePosters();

    return {
        props: {
            posters: posters.map((poster) => ({
                title: poster.title,
                id: poster._id.toString()
            })),
            screenings: screenings.map((screening) => ({
                title: screening.movie,
                id: screening._id.toString(),
                date: screening.date,
                image: screening.image,
                seats: screening.Seats
            }))
        },
        revalidate: 1
    };
}

export default tickets; 