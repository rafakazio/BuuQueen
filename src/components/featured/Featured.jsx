import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured=()=>{
    const navigate=useNavigate();
    const {data,loading,error}=useFetch("/hotels/countByCity?cities=Viseu,Porto,Lisboa")

    const handleclick=()=>{
        navigate("/hotels/Viseu")

    }
    const handleclick1=()=>{
        navigate("/hotels/Porto")
        
    }
    const handleclick2=()=>{
        navigate("/hotels/Lisboa")
        
    }
    
    return(
        <div className="featured">
            
             <><div className="featuredItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_15BPlbzyI3dmLUm9n_sbtmHEFD-UPzkOA&usqp=CAU" alt="" 
                className="featuredImg"
                onClick={handleclick}
                 />
                <div className="featureTitles">
                    <h1>Viseu</h1>
                    <h2>{data[0]} Properties</h2>


                </div>

                
            </div>
            <div className="featuredItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzk9_B3pc-H1-UluOx9t2RbJolPP44SAylw&usqp=CAU" alt="" className="featuredImg"onClick={handleclick1} />
                <div className="featureTitles">
                    <h1>Porto</h1>
                    <h2>{data[1]} Properties</h2>


                </div>

                
            </div>
            <div className="featuredItem">
                <img src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/05/shrutisuman13-wikicommons.jpg" alt="" className="featuredImg" onClick={handleclick2} />
                <div className="featureTitles">
                    <h1>Lisboa</h1>
                    <h2>{data[2]} Properties</h2>


                </div>

                
            </div></>
            
        </div>
    )
}
export default Featured