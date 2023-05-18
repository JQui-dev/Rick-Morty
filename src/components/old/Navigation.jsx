import { useState } from "react";
import "./Navigation.scss";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Navigation({ page, setApi, count, setCount, error, nav }) {
  let prev = page.prev;
  let next = page.next;

  let [input, setInput] = useState("");

  return (
    // If there is a 404, pagination doesnt show up
    <div className={error=="" && nav==true ? "Navigation" : "hide"}>
      

      <div className="main">
        
        {/* GO BEFORE */}
        <button className={prev !== null ? "show" : "hide"}
          onClick={() => {
            {/* If it's the first page you cant go back */}
            if (count>1) {
              setApi(prev);
              setCount(count - 1);
              window.scrollTo({top: 0})
            }
          }}
        ><AiFillCaretLeft/></button>

        {/* Show the actual page and its an input */}
        <form className="goto">
          <input type="text" placeholder={count} value={input}
            onChange={(e) => {
              setInput((input = e.target.value));
            }}
          />

        <button onClick={(e) => {
            e.preventDefault()
            // Check if it's a number
            let numbers = /^[-+]?[0-9]+$/;
              if (input.match(numbers)  && parseInt(input)>0 && parseInt(input)<=page.pages ) {
                setApi(`https://rickandmortyapi.com/api/character?page=${input}`);
                setCount((count = parseInt(input)));
                window.scrollTo({top: 0})
              }
            setInput((input = ""));
          }} />
        </form>

        {/* GO NEXT */}
        <button className={next !== null ? "show" : "hide"}
          onClick={() => {
            {/* If it's the last page you cant go next */}
            if (count<page.pages) {
              setApi(next);
              setCount(count + 1);
              window.scrollTo({top: 0})
            }
          }}
        ><AiFillCaretRight/></button>
      </div>
    </div>
  );
}

export default Navigation;
