import { useState } from "react";

const useCursor = (height, width) => {
  const [column, setColumn] = useState(0);
  const [row, setRow] = useState(0);
  const [index, setIndex] = useState(0);
  const endOfRow = width - 1;

  const nextColumn = () => {
    if (column !== endOfRow) {
      setColumn(column + 1);
      setIndex(index + 1);
    }
  };

  const nextRow = () => {
    setRow(row === height - 1 ? row : row + 1);
    setColumn(0);
    setIndex(index + 1);
  };

  const previousColumn = () => {
    if (column === endOfRow) {
        setColumn(endOfRow);
        setIndex(index - 1);
    }
    if (column !== 0) {
      setColumn(column - 1);
      setIndex(index - 1);
    }
  };

  return { column, row, index, nextColumn, nextRow, previousColumn };
};

export default useCursor;
