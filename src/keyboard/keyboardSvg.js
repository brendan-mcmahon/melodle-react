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
    // same as before
  ];
  