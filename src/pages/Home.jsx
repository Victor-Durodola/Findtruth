import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
      <div className="container">
        <Link to={"/Findtruth/video"}><div className="button video">Video</div></Link>
        <Link to={"/Findtruth/text"}><div className="button text">Text</div></Link>
      </div>
    </>
  )
}
