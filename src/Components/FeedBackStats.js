import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const FeedBackStats = () =>{
    const {state} = useContext(AppContext)
    let average = state.FeedbackData.reduce((acc,curr)=>acc+curr.rating,0)/state.FeedbackData.length
    average = average.toFixed(1)

    return (
        <div className="feedback-stats">
            <h4>{state.FeedbackData.length} Reviews</h4>
            <h4>Average Reviews: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}
export default FeedBackStats;