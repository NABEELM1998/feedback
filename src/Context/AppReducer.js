import FeedbackData from "../Data/feedbacks"
export const initialtState = {
    FeedbackData,
    

}
export const reducer = (state,action) => {
    console.log(state,"rd state")
    switch (action.type){
        case 'REMOVE_FEEDBACK':
            console.log(state)
            let result = state.FeedbackData.filter((item)=> item.id !== action.payload)
            return {...state,FeedbackData:result}
        case 'ADD_NEW_FEEDBACK':
            console.log(state,"acase")
            console.log(action.payload,"reducer")
            console.log(state.FeedbackData)
            return {...state,FeedbackData:[...state.FeedbackData,action.payload]}
        default:
            return state
    }
}