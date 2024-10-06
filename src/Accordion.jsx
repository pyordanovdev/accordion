import Item from "./Item";
function Accordion({ items }) {
  return (
    <div className='accordion'>
      {items.map((item, index) => {
        return (
          <Item
            title={item.title}
            content={item.text}
            number={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
