import * as Tone from 'tone';

export function playMelody(synth, melody, onFinish) {
  Tone.Transport.bpm.value = melody.tempo;
    
  Tone.Transport.start();
  let noteIndex = 0;
    
  Tone.Transport.cancel();

  function playNextNote(onFinish) {
    if (noteIndex < melody.notes.length) {
      let note = melody.notes[noteIndex];
      
      let duration = parseDuration(note);

      synth.triggerAttackRelease(note.pitch, duration);
      noteIndex++;
      setTimeout(() => playNextNote(onFinish), Tone.Time(duration).toMilliseconds());
    } else {
      Tone.Transport.cancel();
      setTimeout(() => onFinish(), 2000);
    }
  }

  playNextNote(onFinish);
}
function parseDuration(note) {
  let durationInSeconds = 0;
  if (note.duration.includes("+")) {
    const durations = note.duration.split("+");
    durations.forEach(dur => {
      durationInSeconds += Tone.Time(dur).toSeconds();
    });
  } else {
    durationInSeconds = Tone.Time(note.duration).toSeconds();
  }

  return durationInSeconds + "i";
}

