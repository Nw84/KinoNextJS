import { useState } from "react";

function Skip(props) {
    const [skip, setSkip] = useState();

    function incSkip() {
        setSkip(0) + 5
    }

    function decSkip() {
        setSkip(0) - 5
    }

    console.log(skip)

  return (
    <>
      <button onClick={decSkip}>Previous</button>
      <button onClick={incSkip}>Next</button>
    </>
  );
}

export default SkipReview;
