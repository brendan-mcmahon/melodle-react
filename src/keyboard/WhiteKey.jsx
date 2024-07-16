
const whiteKeyHeight = 200;

const WhiteKey = ({ noteName, index, width, onKeyPress, status }) => {

  const x = index * width;

  return (
    <g onClick={() => onKeyPress(noteName)} className={`white-note ${status}`} cursor="pointer">
      <rect className="shadow" x={x + 12} y={24} width={width - 10} height={whiteKeyHeight} fill="#526d73" ry={width / 3} />
      <rect className="key" x={x} y={12} width={width - 10} height={whiteKeyHeight} fill="white" ry={width / 3} />

      <text x={x + (width - 10) / 2} y={whiteKeyHeight - 32} fill="black" textAnchor="middle" dominantBaseline="middle" fontSize={28}>
        {noteName.substring(0, noteName.length - 1)}
      </text>
    </g>
  );
};

export default WhiteKey;
