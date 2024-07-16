export function Squares(props) {
  const gridTemplateColumns = `repeat(${props.melodyLength}, 1fr`;
  const gridTemplateRows = `repeat(6, 1fr)`;

  const squareClass = (i) => {
    const row = props.guesses[Math.floor(i / props.melodyLength)];
    const guess = row[i % props.melodyLength];
    return`square ${guess.status}`;
  };

  return (
    <div
      id="squares"
      className="squares"
      style={{
        gridTemplateColumns,
        gridTemplateRows,
      }}
    >
      {props.guesses.flat().map((guess, i) => (
        <div
          key={i}
          className={squareClass(i)}
          style={{
            fontSize: "2rem",
          }}
        >
          <span className="guess">{guess?.note?.slice(0, -1)}</span>
        </div>
      ))}
    </div>
  );
}
