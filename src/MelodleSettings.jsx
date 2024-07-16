import Modal from "./Modal";

export default function MelodleSettings(props) {
  const handleGameModeChange = (event) => {
    props.setSettings({ ...props.settings, difficulty: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.close();
  };

  return (
    <Modal title="Settings" showClose={false} isOpen={props.show} id="melodle-settings-dialog">
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
