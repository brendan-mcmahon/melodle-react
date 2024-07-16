
export const DeleteButton = (props) => {
  return (
    <button disabled={props.disabled} className="btn-icon" id="delete" onClick={props.onDelete}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="76"
        viewBox="0 0 22 16"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 20 0 H 7 L 0 8 l 7 8 h 13 a 2 2 0 0 0 2 -2 V 2 a 2 2 0 0 0 -2 -2 z" fill="orange" stroke="none" />
        <line stroke="black" x1="18" y1="5" x2="12" y2="11" />
        <line stroke="black" x1="12" y1="5" x2="18" y2="11" />
      </svg>
    </button>
  );
};
