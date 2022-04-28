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

    if (props.filter) {

        return <div><form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <select id="title" ref={titleInputRef}>
                        {props.list.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <Button>Filtrera</Button>
            </div>
        </form>
            <div className={classes.filter}>
                <h6>Aktivt Filter: {props.filter} </h6>
                <Button link="/tickets">Nollställ filtret</Button>
            </div>
        </div>
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <select id="title" ref={titleInputRef}>
                    {props.list.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <Button>Filtrera</Button>
        </div>
    </form>
}

export default ScreeningSearch; 