import { useRouter } from "next/router";
import { getSpecifikScreenings, getMovieList } from "../../../helpers/screeningHelper";
import ScreeningsList from "../../../components/screenings/ScreeningsList";
import ScreeningSearch from "../../../components/screenings/Screening-search";
import classes from "../../../styles/tickets.module.css";

function FilteredTicketsPage(props) {
    const router = useRouter();
    function onSearchHandler(name) {
        const fullPath = `/tickets/${name}`;
        router.push(fullPath)
    }

    if (props.screenings.length > 0) {
        return <div className={classes.tickets}>
            <h1>Biljetter</h1>
            <ScreeningSearch onSearch={onSearchHandler} list={props.list} filter={props.name} />
            <ScreeningsList screenings={props.screenings} />
        </div>
    } else {
        return <div className={classes.tickets}>
            <h1>Biljetter</h1>
            <ScreeningSearch onSearch={onSearchHandler} list={props.list} />
            <h6>Active Filter: {props.name} </h6>
            <h2>Något gick fel och det finns inga visningar för den valda filmen</h2>
        </div>
    }
}

export async function getServerSideProps(context) {
    const name = context.params.movieName;
    const screenings = await getSpecifikScreenings(name);
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
            list: list,
            name: name
        }
    }

}


export default FilteredTicketsPage;