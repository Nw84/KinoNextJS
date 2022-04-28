import { useRouter } from "next/router";
import { Fragment } from "react";
import { getSpecifikScreenings, getMovieList } from "../../helpers/getScreenings";
import ScreeningsList from "../../components/screenings/ScreeningsList";
import ScreeningSearch from "../../components/screenings/Screening-search";

function FilteredTicketsPage(props) {
    const router = useRouter();
    function onSearchHandler(name) {
        const fullPath = `/tickets/${name}`;
        router.push(fullPath)
    }

    if (props.screenings.length > 0) {
        return <Fragment>
            <ScreeningSearch onSearch={onSearchHandler} list={props.list} />
            <h6>Active Filter: {props.name} </h6>
            <ScreeningsList screenings={props.screenings} />
        </Fragment>
    } else {
        return <Fragment>
            <ScreeningSearch onSearch={onSearchHandler} list={props.list} />
            <h6>Active Filter: {props.name} </h6>
            <h2>Something went wrong and no screenings could be found</h2>
        </Fragment>
    }
}

export async function getServerSideProps(context) {
    const name = context.params.slug;
    const screenings = await getSpecifikScreenings(name);
    const list = await getMovieList();

    return {
        props: {
            screenings: screenings.map((screening) => ({
                title: screening.movie,
                id: screening._id.toString(),
                date: screening.date,
                image: screening.image,
                seats: screening.Seats
            })),
            list: list,
            name: name
        }
    }

}


export default FilteredTicketsPage;