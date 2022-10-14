const Ratings = () => {
    const handleChange = (e) =>{
        console.log(e)
    }
    return (
        <>
                <li>    
                <input
                type='radio'
                id='num1'
                name="rating"
                value='1'
                onChange={handleChange}
                
                />
                <label htmlFor="num1">1</label>
            </li>
        </>  
            
    )
}
export default Ratings;