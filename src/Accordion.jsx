import Item from "./Item";
import { useState } from "react";

function Accordion({ items }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className='accordion'>
      {items.map((item, index) => {
        return (
          <Item
            title={item.title}
            content={item.text}
            number={index}
            key={index}
            currentOpen={currentOpen}
            onClickHandle={setCurrentOpen}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
