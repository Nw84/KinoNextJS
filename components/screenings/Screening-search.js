import { useRef } from "react";

import Button from "../ui/Button";

import classes from "./Screening-search.module.css";

function ScreeningSearch(props) {
    const titleInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const selectedTitle = titleInputRef.current.value;

        props.onSearch(selectedTitle);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <select id="title" ref={titleInputRef}>
                    {props.posters.map((poster) => (
                        <option key={poster.id} value={poster.title}>{poster.title}</option>
                    ))}
                </select>
            </div>
            <Button>Find Event</Button>
        </div>
    </form>
}

export default ScreeningSearch; 