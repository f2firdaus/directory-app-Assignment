import { Link } from "react-router-dom";
const Buttons = () => {
    
    return (
        <>
            
            <div className="add-retrv">
            <div className="add-person">
              <Link to="/"> <button className="btn">Add person</button> </Link>
                    </div>
                    <div className="retrv">
                    <Link to="/page1"> <button className="btn1"> Retrieve Information</button></Link> 
                    </div>
                    </div>
        </>
    )
}
export default Buttons;