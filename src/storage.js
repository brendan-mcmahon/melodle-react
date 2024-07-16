import { justDate } from "./utilities";

export const getScores = () =>
  localStorage.getItem("melodle-score") ? JSON.parse(localStorage.getItem("melodle-score")) : [];

export const save = (gameState) => {
  const scoreArray = getScores();
  const today = justDate(new Date());
  const existingEntryIndex = scoreArray.findIndex(entry => entry.date === today);
  if (existingEntryIndex !== -1) {
    scoreArray[existingEntryIndex] = gameState;
  } else {
    scoreArray.push(gameState);
  }
  localStorage.setItem("melodle-score", JSON.stringify(scoreArray));
};
