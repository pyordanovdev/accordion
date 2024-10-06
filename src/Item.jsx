import { useState } from "react";
function Item({ title, content, number }) {
  const [show, setShow] = useState(false);
  return (
    <div className={show ? "item open" : "item"} onClick={() => setShow(!show)}>
      <span className='number'>{number + 1}</span>
      <span className='title'>{title}</span>
      <span className='icon'>{show ? "-" : "+"}</span>
      {show && <div className='content-box'>{content}</div>}
    </div>
  );
}

export default Item;
