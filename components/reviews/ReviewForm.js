import classes from "./ReviewForm.module.css"

function ReviewForm({ handleReview, setRating, setReview, setName, name, review, rating }) {
  function submitReview(ev) {
    ev.preventDefault();

    handleReview();
  }

  return (
    <div className={classes.container}>
      <h1> Lämna en recension för filmen </h1>

      <form onSubmit={submitReview}>
        <div className={classes.partial}>
          <input
            className={classes.name}
            autoComplete="Fyll i ditt namn"
            placeholder="Namn"
            required
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

            <select
              className={classes.rating}
              value={rating}
              required
              onChange={(ev) => setRating(parseInt(ev.target.value))} >
              <option value="1"> 1/5 </option>
              <option value="2"> 2/5 </option>
              <option value="3"> 3/5 </option>
              <option value="4"> 4/5 </option>
              <option value="5"> 5/5 </option>
            </select>
        </div>

        <div className={classes.partial2}>
          <textarea
            className={classes.comment}
            autoComplete="Skriv din recension"
            placeholder="Recension"
            type="text"
            required
            maxLength={330}
            value={review}
            onChange={(ev) => setReview(ev.target.value)}
          />

          <input className={classes.btn} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
