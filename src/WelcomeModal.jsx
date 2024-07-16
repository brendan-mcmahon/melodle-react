import Modal from "./Modal";

export default function WelcomeModal(props) {
  const handleGameModeChange = (event) => {
    props.setSettings({ ...props.settings, difficulty: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.close();
  };

  return (
    <Modal title="Melodle" showClose={false} isOpen={props.show} id="melodle-settings-dialog">
      <p>Click on the record player to hear a melody</p>
      <p>Then play it back on the piano</p>
      <p>When you think you've got it right, hit submit!</p>
      <p>Incorrect notes will stay <span className="grey">grey</span>.
        Notes that are in the wrong position will turn <span className="orange">orange</span>
        and notes that are correct will turn <span className="blue">blue</span>
        </p>
      <form onSubmit={handleSubmit}>
        <p>Difficulty:</p>
        <div className="radio-group">
          <input
            type="radio"
            id="easy"
            name="gameMode"
            value="easy"
            checked={props.settings.difficulty === "easy"}
            onChange={handleGameModeChange}
          />
          <label htmlFor="easy">Kid</label>
          <br />
          <input
            type="radio"
            id="hard"
            name="gameMode"
            value="hard"
            checked={props.settings.difficulty === "hard"}
            onChange={handleGameModeChange}
          />
          <label htmlFor="hard">Grown-Up</label>
        </div>

        <button id="start-button" type="submit">
          Start Game
        </button>
      </form>
    </Modal>
  );
}
