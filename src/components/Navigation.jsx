import { useState } from "react";
import "./Navigation.scss";

function Navigation({ page, setApi }) {
  let prev = page.prev;
  let next = page.next;

  let [input, setInput] = useState("");
  let [count, setCount] = useState(1);

  return (
    <div className="Navigation">
      <div className="main">
        <button className={prev !== null ? "show" : "hide"}
          onClick={() => {
            setApi(prev);
            setCount(count - 1);
          }}
        >
          BACK
        </button>
        <h4>{count}</h4>
        <button className={next !== null ? "show" : "hide"}
          onClick={() => {
            setApi(next);
            setCount(count + 1);
          }}
        >
          NEXT
        </button>
      </div>

      <form className="goto">
        <input type="text" placeholder="Page number" value={input} 
          onChange={(e) => {
            setInput((input = e.target.value));
          }}
        />

        <button onClick={() => {
            let numbers = /^[-+]?[0-9]+$/;
            console.log(page.pages)
            if (input.match(numbers)  && parseInt(input)>0 && parseInt(input)<=page.pages ) {
              setApi(`https://rickandmortyapi.com/api/character?page=${input}`);
              setCount((count = parseInt(input)));
            }
            setInput((input = ""));
          }}
        > GO </button>
      </form>
    </div>
  );
}

export default Navigation;
