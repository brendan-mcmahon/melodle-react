import Modal from "./Modal";
import ShareButton from "./ShareButton";

const iconMap = {
  correct: "🟩",
  wrongPosition: "🟧",
  incorrect: "🔲",
};

export default function GameOverModal(props) {

  const victory = "Congratulations! You won!";
  const defeat = "Sorry, you lost!";

  return (
    <Modal title="Game Over" showClose={false} isOpen={props.show} id="game-over-dialog">
      {props.victory ? <p>{victory}</p> : <p>{defeat}</p>}
      <div>
        {props.guesses.map((row, index) => (
          <div key={index}>
            {row.map((guess, i) => (
              <span key={i}>{iconMap[guess.status]}</span>
            ))}
          </div>
        ))}
      </div>
      <ShareButton guesses={props.guesses} />
    </Modal>
  );
}
