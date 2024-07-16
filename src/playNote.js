import { solfegeLabels, keys } from "./melody.js";
import { disableSubmit } from "./disableSubmit.js";

export function playNote(note, synth, gameState, setGameState) {
  const newGuesses = structuredClone(gameState.guesses);
  if (gameState.currentCol !== gameState.melody.length) {
    synth.triggerAttackRelease(note, "8n");
    addNoteNameToSquare(gameState.currentRow, gameState.currentCol, note, gameState.keyLabelType);

    newGuesses[gameState.currentRow][gameState.currentCol] = note;
    setGameState({ guesses: newGuesses, currentCol: gameState.currentCol + 1 });
  }
  disableSubmit(newGuesses);
}

function addNoteNameToSquare(row, column, note, keyLabelType) {
  document.getElementById(`row-${row + 1}`).children[column].querySelector("span").innerHTML =
    keyLabelType === "letters" ? note.substring(0, note.length - 1) : solfegeLabels[keys.indexOf(note)];
}