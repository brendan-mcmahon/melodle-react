export function getRange(melody) {
  const [min, max] = minMax(melody);

  var notes = allNotes.slice(allNotes.indexOf(min), allNotes.indexOf(max) + 1);

  while (notes.length < 13) {
    if (notes.length % 2 === 0) {
      const lowIndex = allNotes.indexOf(notes[0]);
      notes.unshift(allNotes[lowIndex - 1]);
      if (!isWhiteNote(notes[0].name)) {
        notes.unshift(allNotes[lowIndex - 2]);
      }
    } else {
      const highIndex = allNotes.indexOf(notes[notes.length - 1]);
      notes.push(allNotes[highIndex + 1]);
      if (!isWhiteNote(notes[notes.length - 1].name)) {
        notes.push(allNotes[highIndex + 2]);
      }
    }
  }
  return { notes, gridTemplateColumns: generateGridTemplateColumns(notes.map((note) => note.name)) };
}

export function generateGridTemplateColumns(pitches) {
  const firstPitch = pitches[0].slice(0, -1);
  let gridTemplateColumns = firstPitch === "B" || firstPitch === "E" ? "1.25fr " : "1fr 0.25fr ";

  pitches.shift();
  pitches.pop();

  gridTemplateColumns = addMiddleColumns(pitches, gridTemplateColumns);

  gridTemplateColumns += ".25fr 1fr";

  return gridTemplateColumns;
}

function addMiddleColumns(pitches, gridTemplateColumns) {
  let cols = gridTemplateColumns;

  const noteMappings = {
    D: ".25fr .75fr .25fr ",
    G: ".25fr .75fr .25fr ",
    A: ".25fr .75fr .25fr ",
    C: "1fr .25fr ",
    F: "1fr .25fr ",
    E: ".25fr 1fr ",
    B: ".25fr 1fr ",
  };

  pitches.forEach((pitch) => {
    const note = pitch.slice(0, -1);
    if (isWhiteNote(pitch) && noteMappings[note]) {
      cols += noteMappings[note];
    }
  });
  return cols;
}

function minMax(pitches) {
  const sortedNotes = pitches
    .map((pitch) => allNotes.find((note) => note.name === pitch || note.enharmonic === pitch))
    .sort((a, b) => a.position - b.position);

  return [sortedNotes[0], sortedNotes[sortedNotes.length - 1]];
}

function isWhiteNote(note) {
  return !(note.includes("b") || note.includes("#"));
}

const allNotes = [
  { position: 15, name: "C2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 16, name: "C#2", enharmonic: "Db2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 17, name: "D2", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 18, name: "D#2", enharmonic: "Eb2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 19, name: "E2", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 20, name: "F2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 21, name: "F#2", enharmonic: "Gb2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 22, name: "G2", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 23, name: "G#2", enharmonic: "Ab2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 24, name: "A2", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 25, name: "A#2", enharmonic: "Bb2", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 26, name: "B2", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 27, name: "C3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 28, name: "C#3", enharmonic: "Db3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 29, name: "D3", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 30, name: "D#3", enharmonic: "Eb3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 31, name: "E3", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 32, name: "F3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 33, name: "F#3", enharmonic: "Gb3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 34, name: "G3", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 35, name: "G#3", enharmonic: "Ab3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 36, name: "A3", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 37, name: "A#3", enharmonic: "Bb3", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 38, name: "B3", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 39, name: "C4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 40, name: "C#4", enharmonic: "Db4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 41, name: "D4", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 42, name: "D#4", enharmonic: "Eb4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 43, name: "E4", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 44, name: "F4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 45, name: "F#4", enharmonic: "Gb4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 46, name: "G4", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 47, name: "G#4", enharmonic: "Ab4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 48, name: "A4", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 49, name: "A#4", enharmonic: "Bb4", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 50, name: "B4", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 51, name: "C5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 52, name: "C#5", enharmonic: "Db5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 53, name: "D5", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 54, name: "D#5", enharmonic: "Eb5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 55, name: "E5", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 56, name: "F5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 57, name: "F#5", enharmonic: "Gb5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 58, name: "G5", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 59, name: "G#5", enharmonic: "Ab5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 60, name: "A5", width: 3, overlap: 1, firstPositionWidth: 2 },
  { position: 61, name: "A#5", enharmonic: "Bb5", width: 2, overlap: 1, firstPositionWidth: 2 },
  { position: 62, name: "B5", width: 2, overlap: 0, firstPositionWidth: 1 },
  { position: 63, name: "C6", width: 2, overlap: 1, firstPositionWidth: 2 },
];
