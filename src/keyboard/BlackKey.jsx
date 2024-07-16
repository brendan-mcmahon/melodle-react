const blackKeyHeight = 120;

const getNaturalNeighbor = (note) => {
  const octave = note[note.length - 1];
  const noteName = note.substring(0, note.length - 1);
  switch (noteName) {
    case "C#":
    case "Db":
      return `C${octave}`;
    case "D#":
    case "Eb":
      return `D${octave}`;
    case "F#":
    case "Gb":
      return `F${octave}`;
    case "G#":
    case "Ab":
      return `G${octave}`;
    case "A#":
    case "Bb":
      return `A${octave}`;
    default:
      return `t${octave}`;
  }
};

const BlackKey = ({ whiteKeys, noteName, width, onKeyPress, status }) => {
  const whiteNoteIndex = whiteKeys.findIndex(note => note.name === getNaturalNeighbor(noteName));

  const offset = 5;

  const actualWidth = width - offset;
  const whiteX = whiteNoteIndex * width;
  const center = (actualWidth / 2);
  const keyStartX = whiteX + center + 5;

  return (
    <g onClick={() => onKeyPress(noteName)} className={`black-note ${status}`} cursor="pointer">
      <rect className="shadow" x={keyStartX - 7} y={0} width={width - offset} height={blackKeyHeight} fill="black" ry={width / 2} />
      <rect className="key" x={keyStartX - 7} y={0} width={width - offset} height={blackKeyHeight - 20} fill="#213640" ry={width / 2} />

      <text x={keyStartX + center - 7} y={blackKeyHeight - 48} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={28}>
        {noteName.substring(0, noteName.length - 1)}
      </text>

      {/* <circle cx={keyStartX + center} cy={blackKeyHeight} r={10} fill="#00FF00" /> */}
    </g>
  );
};

export default BlackKey;
