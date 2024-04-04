
export default function Options({updateClick, reset, total}) {
    return (
        <div>
                <button onClick={() => { updateClick('good') }}> Good</button>
                <button onClick={() => { updateClick('neutral') }}>Neutral</button>
                <button onClick={() => { updateClick('bad') }}>Bad</button>
                {total >0 ? <button onClick={reset}>Reset</button> : '' }
            </div>
    )
}