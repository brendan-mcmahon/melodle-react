export const getScores = () =>
  localStorage.getItem("melodle-score") ? JSON.parse(localStorage.getItem("melodle-score")) : [];

export const save = (gameState) => {
  const scoreArray = getScores();
  scoreArray.push(gameState);
  localStorage.setItem("melodle-score", JSON.stringify(scoreArray));
};
