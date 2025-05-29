const currentDate = new Date().toISOString().split("T")[0];

const noteDurations = {
  '1n': 4,
  '2n': 2,
  '2n.': 3,
  '4n': 1,
  '4n.': 1.5,
  '8n': 0.5,
  '8n.': 0.75,
  '16n': 0.25,
  '16n.': 0.375
};

function calculateMelodyDuration(melody) {
  const beatsPerMinute = melody.tempo;
  const beatsPerSecond = beatsPerMinute / 60;
  const secondsPerBeat = 1 / beatsPerSecond;

  let totalBeats = 0;

  melody.notes.forEach(note => {
    const durations = note.duration.split('+').map(d => d.trim());
    durations.forEach(duration => {
      totalBeats += noteDurations[duration];
    });
  });

  const totalDurationInSeconds = totalBeats * secondsPerBeat;
  return totalDurationInSeconds;
}

const beethovenFifth = {
  tempo: 100,
  accidentals: "flat",
  notes: [
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "8n" },
    { pitch: "Eb4", duration: "2n" },
    { pitch: null, duration: "4n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "D4", duration: "2n" },
  ],
};
beethovenFifth.duration = calculateMelodyDuration(beethovenFifth);

const imperialMarch = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3", duration: "4n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "F3", duration: "8n." },
    { pitch: "C4", duration: "16n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "F3", duration: "8n." },
    { pitch: "C4", duration: "16n" },
    { pitch: "A3", duration: "2n." },
  ],
};
imperialMarch.duration = calculateMelodyDuration(imperialMarch);

const heyJude = {
  tempo: 90,
  accidentals: "flat",
  notes: [
    { pitch: "C4", duration: "4n" },
    { pitch: "A3", duration: "2n" },
    { pitch: null, duration: "8n" },
    { pitch: "A3", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "D4", duration: "8n" },
    { pitch: "G3", duration: "2n" },
  ],
};
heyJude.duration = calculateMelodyDuration(heyJude);

const furElise = {
  tempo: 70,
  accidentals: "sharp",
  notes: [
    { pitch: "E5", duration: "16n" },
    { pitch: "D#5", duration: "16n" },
    { pitch: "E5", duration: "16n" },
    { pitch: "D#5", duration: "16n" },
    { pitch: "E5", duration: "16n" },
    { pitch: "B4", duration: "16n" },
    { pitch: "D5", duration: "16n" },
    { pitch: "C5", duration: "16n" },
    { pitch: "A4", duration: "4n" },
  ],
};
furElise.duration = calculateMelodyDuration(furElise);

const smokeOnTheWater = {
  tempo: 115,
  accidentals: "flat",
  notes: [
    { pitch: "G2", duration: "4n" },
    { pitch: "Bb2", duration: "4n" },
    { pitch: "C3", duration: "4n." },
    { pitch: "G2", duration: "4n" },
    { pitch: "Bb2", duration: "4n" },
    { pitch: "Db3", duration: "8n" },
    { pitch: "C3", duration: "2n" },
  ],
};
smokeOnTheWater.duration = calculateMelodyDuration(smokeOnTheWater);

const somewhereOverTheRainbow = {
  tempo: 110,
  accidentals: "sharp",
  notes: [
    { pitch: "G4", duration: "2n" },
    { pitch: "G5", duration: "2n" },
    { pitch: "F#5", duration: "4n" },
    { pitch: "D5", duration: "8n" },
    { pitch: "E5", duration: "8n" },
    { pitch: "F#5", duration: "4n" },
    { pitch: "G5", duration: "4n" },
  ],
};
somewhereOverTheRainbow.duration = calculateMelodyDuration(somewhereOverTheRainbow);

const blueDanube = {
  tempo: 180,
  accidentals: "flat",
  notes: [
    { pitch: "C4", duration: "4n" },
    { pitch: "C4", duration: "4n" },
    { pitch: "E4", duration: "4n" },
    { pitch: "G4", duration: "4n" },
    { pitch: "G4", duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: "G5", duration: "4n" },
    { pitch: "G5", duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: "E5", duration: "4n" },
    { pitch: "E5", duration: "4n" },
  ],
};
blueDanube.duration = calculateMelodyDuration(blueDanube);

const swanLake = {
  tempo: 110,
  accidentals: "sharp",
  notes: [
    { pitch: "F#5", duration: "2n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "C#5", duration: "8n" },
    { pitch: "D5", duration: "8n" },
    { pitch: "E5", duration: "8n" },
    { pitch: "F#5", duration: "4n." },
    { pitch: "D5", duration: "8n" },
    { pitch: "F#5", duration: "2n" },
  ],
};
swanLake.duration = calculateMelodyDuration(swanLake);

const inTheHallOfTheMountainKing = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3", duration: "8n" },
    { pitch: "B3", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "D4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "E4", duration: "4n" },
  ],
};
inTheHallOfTheMountainKing.duration = calculateMelodyDuration(inTheHallOfTheMountainKing);

const iCantGetNoSatisfaction = {
  tempo: 132,
  accidentals: "sharp",
  notes: [
    { pitch: "A4", duration: "8n" },
    { pitch: null, duration: "8n" },
    { pitch: "A4", duration: "4n" },
    { pitch: null, duration: "8n" },
    { pitch: "A4", duration: "8n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "C5", duration: "2n" },
    { pitch: "C5", duration: "8n" },
    { pitch: "C5", duration: "8n" },
    { pitch: "B4", duration: "4n" },
  ],
};
iCantGetNoSatisfaction.duration = calculateMelodyDuration(iCantGetNoSatisfaction);

const rideOfTheValkyries = {
  tempo: 150,
  accidentals: "sharp",
  notes: [
    { pitch: "B3", duration: "8n" },
    { pitch: "E4", duration: "8n." },
    { pitch: "B3", duration: "16n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "G4", duration: "4n." },
    { pitch: "E4", duration: "4n." },
  ],
};
rideOfTheValkyries.duration = calculateMelodyDuration(rideOfTheValkyries);

const stairwayToHeaven = {
  tempo: 80,
  accidentals: "sharp",
  notes: [
    { pitch: "A3", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "A4", duration: "8n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "C5", duration: "8n" },
  ],
};
stairwayToHeaven.duration = calculateMelodyDuration(stairwayToHeaven);

const sevenNationArmy = {
  tempo: 123,
  accidentals: "sharp",
  notes: [
    { pitch: "E3", duration: "4n." },
    { pitch: "E3", duration: "8n" },
    { pitch: "G3", duration: "8n" },
    { pitch: null, duration: "16n" },
    { pitch: "E3", duration: "8n" },
    { pitch: null, duration: "16n" },
    { pitch: "D3", duration: "16n" },
    { pitch: null, duration: "16n" },
    { pitch: "C3", duration: "2n" },
    { pitch: "B2", duration: "2n" },
  ],
};
sevenNationArmy.duration = calculateMelodyDuration(sevenNationArmy);

const toccataAndFugue = {
  tempo: 58,
  accidentals: "sharp",
  notes: [
    { pitch: "A5", duration: "32n" },
    { pitch: "G5", duration: "32n" },
    { pitch: "A5", duration: "8n." },
    { pitch: null, duration: "8n" },
    { pitch: "G5", duration: "32n" },
    { pitch: "F5", duration: "32n" },
    { pitch: "E5", duration: "32n" },
    { pitch: "D5", duration: "32n" },
    { pitch: "C#5", duration: "8n." },
    { pitch: "D5", duration: "8n" },
  ],
};
toccataAndFugue.duration = calculateMelodyDuration(toccataAndFugue);

const danceOfTheSugarPlumFairy = {
  tempo: 108,
  accidentals: "sharp",
  notes: [
    { pitch: "C5", duration: "16n" },
    { pitch: null, duration: "16n" },
    { pitch: "A4", duration: "16n" },
    { pitch: null, duration: "16n" },
    { pitch: "C5", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "B4", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "G#4", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "A4", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "4n" },
  ],
};
danceOfTheSugarPlumFairy.duration = calculateMelodyDuration(danceOfTheSugarPlumFairy);

const crazyInLove = {
  tempo: 100,
  accidentals: "flat",
  notes: [
    { pitch: "D4", duration: "4n." },
    { pitch: null, duration: "8n" },
    { pitch: "D4", duration: "16n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "G4", duration: "16n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "D4", duration: "2n" },
  ],
};
crazyInLove.duration = calculateMelodyDuration(crazyInLove);

const uptownFunk = {
  tempo: 115,
  accidentals: "flat",
  notes: [
    { pitch: "D3", duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: null, duration: "8n" },
    { pitch: "D3", duration: "8n" },
    { pitch: "G3", duration: "8n." },
    { pitch: "F3", duration: "16n" },
    { pitch: null, duration: "8n" },
    { pitch: "D3", duration: "8n" },
    { pitch: "G3", duration: "8n." },
    { pitch: "F3", duration: "16n" },
    { pitch: null, duration: "8n" },
    { pitch: "C3", duration: "8n" },
    { pitch: "D3", duration: "4n" },
  ],
};
uptownFunk.duration = calculateMelodyDuration(uptownFunk);

const badRomance = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3", duration: "4n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
  ],
};
badRomance.duration = calculateMelodyDuration(badRomance);

const blindingLights = {
  tempo: 171,
  accidentals: "flat",
  notes: [
    { pitch: "F4", duration: "2n" },
    { pitch: "F4", duration: "4n." },
    { pitch: "Eb4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "G4", duration: "4n" },
    { pitch: "C4", duration: "4n" },
    { pitch: "Eb4", duration: "4n." },
  ],
};
blindingLights.duration = calculateMelodyDuration(blindingLights);

const kids = {
  tempo: 123,
  accidentals: "sharp",
  notes: [
    { pitch: "A4", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "B4", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "C#5", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "E5", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "F#5", duration: "4n" },
    { pitch: "G#5", duration: "8n" },
    { pitch: "F#5", duration: "8n" },
    { pitch: null, duration: "8n" },
    { pitch: "E5", duration: "8n" },
    { pitch: null, duration: "8n" },
    { pitch: "C#5", duration: "2n" },
  ],
};
kids.duration = calculateMelodyDuration(kids);

const iWantItThatWay = {
  tempo: 99,
  accidentals: "sharp",
  notes: [
    { pitch: "F#3", duration: "8n" },
    { pitch: "A3", duration: "2n" },
    { pitch: null, duration: "4n" },
    { pitch: "C#4", duration: "4n" },
    { pitch: "F#3", duration: "4n." },
    { pitch: "E3", duration: "4n." },
    { pitch: "F#3", duration: "8n" },
    { pitch: "A3", duration: "4n." }
  ],
};
iWantItThatWay.duration = calculateMelodyDuration(iWantItThatWay);

const uCantTouchThis = {
  tempo: 130,
  accidentals: "sharp",
  notes: [
    { pitch: "D3", duration: "4n" },
    { pitch: "C3", duration: "8n" },
    { pitch: "B2", duration: "8n" },
    { pitch: "A2", duration: "8n" },
    { pitch: null, duration: "4n" },
    { pitch: "E2", duration: "8n" },
    { pitch: "G2", duration: "8n" },
    { pitch: null, duration: "4n" },
    { pitch: "B2", duration: "8n" },
    { pitch: "A2", duration: "8n" },
  ],
};
uCantTouchThis.duration = calculateMelodyDuration(uCantTouchThis);

const enterSandman = {
  tempo: 123,
  accidentals: "flat",
  notes: [
    { pitch: "E2", duration: "4n" },
    { pitch: "E3", duration: "8n" },
    { pitch: "G3", duration: "8n" },
    { pitch: "Bb2", duration: "8n" },
    { pitch: "A2", duration: "4n" },
  ],
};
enterSandman.duration = calculateMelodyDuration(enterSandman);

const myHeartWillGoOn = {
  tempo: 90,
  accidentals: "sharp",
  notes: [
    { pitch: "E4", duration: "8n" },
    { pitch: "F#4", duration: "8n" },
    { pitch: "G#4", duration: "4n + 4n." },
    { pitch: "F#4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "F#4", duration: "8n." },
    { pitch: "B4", duration: "4n" },
  ],
};
myHeartWillGoOn.duration = calculateMelodyDuration(myHeartWillGoOn);

export const melodies = {
  "2025-05-29": imperialMarch,
  "2025-05-30": sevenNationArmy,
  "2025-05-31": kids,
  "2025-06-01": iCantGetNoSatisfaction,
  "2025-06-02": toccataAndFugue,
  "2025-06-03": blueDanube,
  "2025-06-04": blindingLights,
  "2025-06-05": uCantTouchThis,
  "2025-06-06": crazyInLove,
  "2025-06-07": rideOfTheValkyries,
  "2025-06-08": enterSandman,
  "2025-06-09": beethovenFifth,
  "2025-06-10": smokeOnTheWater,
  "2025-06-11": furElise,
  "2025-06-12": badRomance,
  "2025-06-13": inTheHallOfTheMountainKing,
  "2025-06-14": myHeartWillGoOn,
  "2025-06-15": somewhereOverTheRainbow,
  "2025-06-16": danceOfTheSugarPlumFairy,
  "2025-06-17": uptownFunk,
  "2025-06-18": stairwayToHeaven,
  "2025-06-19": heyJude,
  "2025-06-20": iWantItThatWay,
  "2025-06-21": swanLake,
};



export const keys = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4"];

export const melody = melodies[currentDate];
