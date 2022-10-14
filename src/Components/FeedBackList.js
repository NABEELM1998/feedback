import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import FeedBackItem from "./FeedBackItem";

const FeedBackList = () => {
    const {state} = useContext(AppContext)
    console.log(state.FeedbackData)
    return (
        
        <div className="feedback_list">
            
                {state.FeedbackData?.length > 0 ?(state.FeedbackData.map((item)=>{
                return <FeedBackItem {...item} key={item.id}/>
                })):(<p>No feedbacks yet</p>) }
            
        </div>
        
    
    )
}
export default FeedBackList;
