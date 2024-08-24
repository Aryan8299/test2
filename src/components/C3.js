import { Link } from "react-router-dom";

function C3() {
    return(
        <div class="navbar bg-danger px-4">
            <Link to="/" class="navbar-brand">Flipkart</Link>
            <div class="nav ms-auto">
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/contact">Contact</Link>
                <Link class="nav-link" to="/blog">Blog</Link>
                <Link class="nav-link" to="/projects">Project</Link>
            </div>
            <button class="btn btn-success">Order Now</button>
        </div>
    );
}

export default C3;
