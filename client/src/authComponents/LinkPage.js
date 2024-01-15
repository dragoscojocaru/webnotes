import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/login">Login</Link>
            <Link to="/">Register</Link>
            <br />
            <h2>Private</h2>
            {/* <Link to="/home">Home</Link> */}
           
        </section>
    )
}

export default LinkPage
