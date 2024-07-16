import { melody } from "../melody";
import { getRange } from "./keyboard";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import { useState, useEffect, useCallback } from "react";

const screenWidth = 418;

const whiteNoteFilter = (n) => !n.name.includes("b") && !n.name.includes("#");
const blackNoteFilter = (n) => n.name.includes("b") || n.name.includes("#");
const range = getRange(melody.notes.filter((n) => n.pitch !== null).map((n) => n.pitch));

export function PianoKeyboard(props) {
    const [keyWidth, setKeyWidth] = useState(20);
    const [whiteKeys] = useState(range.notes.filter(whiteNoteFilter));
    const [blackKeys] = useState(range.notes.filter(blackNoteFilter));
    const guessMap = props.guesses
        .flat()
        .filter((g, index, arr) => g.note && arr.findIndex(a => a.note === g.note) === index);

    const handleResize = useCallback(() => {
        const newScreenWidth = parseInt(window.innerWidth);
        const _screenWidth = newScreenWidth > 1024 ? screenWidth : (newScreenWidth - 32);
        const length = range.notes.filter(whiteNoteFilter).length
        setKeyWidth((_screenWidth / length) - 3);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <div style={{ height: `${236}px`, marginTop: 'auto' }}>

            <svg className="piano" height={236} width="100%">

                <g transform="translate(12, 0)">
                    {whiteKeys.map((n, i) => <WhiteKey
                        key={n.name}
                        status={guessMap.find(g => g.note === n.name)?.status}
                        noteName={n.name}
                        index={i}
                        width={keyWidth}
                        onKeyPress={props.onKeyPress}
                    />)}

                    {blackKeys.map((n) => <BlackKey
                        key={n.name}
                        status={guessMap.find(g => g.note === n.name)?.status}
                        whiteKeys={whiteKeys}
                        noteName={n.name}
                        width={keyWidth}
                        onKeyPress={props.onKeyPress}
                    />)}
                </g>
            </svg>
        </div>
    );
}
