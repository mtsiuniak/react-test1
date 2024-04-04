

export default function Feedback({item, total, average}) {
    return (
        <div>
            {total > 0 ? <>
                <p>Good: {item.good}</p>
                <p>Neutral: {item.neutral}</p>
                <p>Bad: {item.bad}</p>
                <p>Total reviews: {total}</p>
                <p>Positive: {average}%</p>
            </> : "No reviews yet"}
        </div>
    )
}