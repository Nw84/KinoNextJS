function ReviewForm({ handleReview, setRating, setReview, setName, name, review, rating }) {
  function submitReview(ev) {
    ev.preventDefault();

    handleReview();
  }

  return (
    <div>
      <h1>Skriv din recension för filmen </h1>
      <form onSubmit={submitReview}>
      <input
          autoComplete="Fyll i ditt namn"
          placeholder="Namn"
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />

        <input
          autoComplete="Skriv din recension"
          placeholder="Recension"
          type="text"
          value={review}
          onChange={(ev) => setReview(ev.target.value)}
        />

        <select
          className="review"
          value={rating}
          onChange={(ev) => setRating(parseInt(ev.target.value))} >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
        </select>
        
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;
