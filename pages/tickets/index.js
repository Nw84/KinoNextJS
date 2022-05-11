import { useRouter } from "next/router";
import ScreeningsList from "../../components/screenings/ScreeningsList";
import { getAllScreenings, getMovieList } from "../../helpers/screeningHelper";
import ScreeningSearch from "../../components/screenings/Screening-search";

function tickets(props) {
    const router = useRouter();
    function onSearchHandler(name) {
        const fullPath = `/tickets/${name}`;
        router.push(fullPath)
    }

    return <div>
        <h1>Biljetter</h1>
        <ScreeningSearch onSearch={onSearchHandler} list={props.list} />
        <ScreeningsList screenings={props.screenings} />
    </div>
}


export async function getStaticProps() {

    const screenings = await getAllScreenings();
    const list = await getMovieList();

    return {
        props: {
            screenings: screenings.map((screening) => ({
                title: screening.title,
                id: screening._id.toString(),
                date: screening.date,
                poster: screening.poster,
                seats: screening.seats,
                time: screening.time
            })),
            list: list
        },
        revalidate: 1
    };
}

export default tickets; 