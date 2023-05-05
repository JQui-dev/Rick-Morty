import { useState } from "react";
import "./Navigation.scss";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Navigation({ page, setApi, count, setCount, error }) {
  let prev = page.prev;
  let next = page.next;

  let [input, setInput] = useState("");

  return (
    <div className={error=="" ? "Navigation show" : "hide"}>
      

      <div className="main">
        <button className={prev !== null ? "show" : "hide"}
          onClick={() => {
            if (count>1) {
              setApi(prev);
              setCount(count - 1);
            }
          }}
        >
          <AiFillCaretLeft/>
        </button>

        <form className="goto">
        <input type="text" placeholder={count} value={input} 
          onChange={(e) => {
            setInput((input = e.target.value));
          }}
        />

        <button onClick={(e) => {
            e.preventDefault()
            let numbers = /^[-+]?[0-9]+$/;
              if (input.match(numbers)  && parseInt(input)>0 && parseInt(input)<=page.pages ) {
                setApi(`https://rickandmortyapi.com/api/character?page=${input}`);
                setCount((count = parseInt(input)));
              }
            setInput((input = ""));
          }} > GO </button>
        </form>

        <button className={next !== null ? "show" : "hide"}
          onClick={() => {
            if (count<page.pages) {
              setApi(next);
              setCount(count + 1);
            }
          }}
        >
          <AiFillCaretRight/>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
