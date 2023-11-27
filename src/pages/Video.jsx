import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
export default function Video() {
  return (
    <>
        <div className="container video-container">
          <div className="inner-container">
              <Link to="/" className="home-btn"><BiArrowBack /></Link>
              <div className="buttons">
                  <div className="button form">Short Video</div>
                  <div className="button form">Medium Video</div>
                  <div className="button form">Long Video</div>
              </div>
          </div>
        </div>
    </>
  )
}
