import {FaTimes} from 'react-icons/fa'
import Card from "./Shared/Card";
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
const FeedBackItem = ({id,rating,text}) => {
    console.log(rating,text)
    const {dispatch} = useContext(AppContext)
    const closeHandler = (_id) => {
        if(window.confirm('Are you sure?')){
            dispatch({
                type:"REMOVE_FEEDBACK",
                payload :_id
            })
        }
        
    }
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button className='close' onClick={()=>closeHandler(id)}>
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{text}</div>
            
        </Card>
            
        
    )
}
export default FeedBackItem;