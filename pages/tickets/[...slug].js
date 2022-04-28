import { Fragment } from "react";
import { getSpecifikScreenings } from "../../helpers/getScreenings";
import ScreeningsList from "../../components/screenings/ScreeningsList";

function FilteredTicketsPage(props) {
    return <Fragment>
        <ScreeningsList screenings={props.screenings} />
    </Fragment>
}

export async function getServerSideProps(context) {
    const id = context.params.slug;
    const screenings = await getSpecifikScreenings(id);

    return {
        props: {
            screenings: screenings.map((screening) => ({
                title: screening.movie,
                id: screening._id.toString(),
                date: screening.date,
                image: screening.image,
                seats: screening.Seats
            }))
        },
    }

}


export default FilteredTicketsPage;