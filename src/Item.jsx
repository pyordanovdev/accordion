function Item({ title, content, number, currentOpen, onClickHandle }) {
  const isOpen = number === currentOpen;
  return (
    <div
      className={isOpen ? "item open" : "item"}
      onClick={(e) => {
        onClickHandle(number === currentOpen ? null : number);
      }}
    >
      <span className='number'>{number + 1}</span>
      <span className='title'>{title}</span>
      <span className='icon'>{isOpen ? "-" : "+"}</span>
      {isOpen && <div className='content-box'>{content}</div>}
    </div>
  );
}

export default Item;
