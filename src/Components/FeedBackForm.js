import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import {AppContext} from '../Context/AppContext';
import { v4 as uuidv4 } from "uuid";
const FeedBackForm = () => {
    const {dispatch} = useContext(AppContext)
    const [text,setText] = useState('')
    const [message,setMessage] = useState('')
    const [disabled,setDisabled] = useState(true)
    const [rating,setRating] = useState()
    console.log(rating,"rating")
    const formHandler = (e) => {
        if (text === ''){
            setDisabled(true)
            setMessage(null)
        }
        else if (text !=='' && text.trim().length <=10){
            setMessage('text must be atleast 10 characters')
            setDisabled(true)
        }
        else {
            setMessage(null)
            setDisabled(false)
        }

        setText(e.target.value)
        console.log(text)
    }

    const select = (_rating) =>{
        setRating(_rating)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedBack = {
            text,
            rating,
            id : uuidv4()
        }
        dispatch({
            type:'ADD_NEW_FEEDBACK',
            payload : newFeedBack
        })

    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select = {select} selected = {rating}/>
                <div className="input-group">
                    <input placeholder="Write your review" value={text} type='text' onChange={formHandler}></input>
                    <Button  isdisabled={disabled} type = 'submit' >Submit</Button>
                </div>
                <h3>{message}</h3>
            </form>
        </Card>
    )
}
export default FeedBackForm;