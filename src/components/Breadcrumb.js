import { Link } from "react-router-dom"


function Breadcrumb() {
    return (
        <div>
            <section className="bg-gray-100 py-8 px-4">
                <div className="container mx-auhref">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="/">Office Room</a>
                        </li>
                        <li>
                            <a href="/" aria-label="current-page">Details</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Breadcrumb