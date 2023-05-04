const Cell = ({ id, cell, setCells }) => {
  const handleClick = (event) => {
    const taken =
      event.target.firstChild.classList.contains("circle") ||
      event.target.firstChild.classList.contains("cross");
  };

  return <div className="square" id={id} onClick={handleClick}></div>;
};

export default Cell;
