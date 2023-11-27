import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
      <div className="container">
        <Link to={"/video"}><div className="button video">Video</div></Link>
        <Link to={"/text"}><div className="button text">Text</div></Link>
      </div>
    </>
  )
}
