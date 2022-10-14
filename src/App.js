import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import { AppContext } from "./Context/AppContext";
import { useReducer } from "react";
import { reducer,initialtState } from "./Context/AppReducer";
import FeedBackStats from "./Components/FeedBackStats";
import FeedBackForm from "./Components/FeedBackForm";
import About from "./pages/About";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
function App () {
    const [state,dispatch] = useReducer(reducer,initialtState)
    return (
        <div className="app-wrapper">
            <div className="container">
                <AppContext.Provider value={{state,dispatch}}>
                    <Header/>
                    <Routes>
                        <Route path="/" element = {<>
                        <FeedBackForm/>
                        <FeedBackStats/>
                        <FeedBackList/>
                        <Footer/>
                        </>}/>
                       
                    <Route path="/about" element = {<About/>}></Route>
                    </Routes>
                </AppContext.Provider>
                
            </div>
        </div>
        
    )
}
export default App;