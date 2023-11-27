import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
export default function Text() {
  return (
    <div>
        <div className="container text-container">
          <div className="inner-container">
              <Link to="/Findtruth" className="home-btn"><BiArrowBack /></Link>
              <div className="buttons">
                  <div className="button form">Short Text </div>
                  <div className="button form">Medium Text</div>
                  <div className="button form">Long Text</div>
              </div>
          </div>
        </div>
    </div>
  )
}
