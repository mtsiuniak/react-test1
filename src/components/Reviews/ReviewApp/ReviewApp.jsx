import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function ReviewApp() {

    const [rating, setRating] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

   
    

    function updateRating(value) {
        setRating((rating) => {
            return {
                ...rating,
                [value]: rating[value] + 1
            }
        })
    }

    function resetData() {
        setRating(() => {
            return {
                good: 0,
                neutral: 0,
                bad: 0,
            }
        })
    }
    const totalReviews = rating.bad + rating.good + rating.neutral;
    const averagePositiveRating = Math.round((rating.good / totalReviews) * 100);

    
    return (
        <>
            <Description />
            <Options reset={resetData} updateClick={updateRating} total={totalReviews} />
            <Feedback item={rating} total={totalReviews} average={averagePositiveRating} />
        </>
    )}
