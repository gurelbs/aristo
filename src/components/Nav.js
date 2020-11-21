import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark line py-0">
        <div className="col d-flex align-items-start flex-column px-0">
            <h1 className="masthead-brand m-0">
                <span>
                    <Link to="/" className="logo">ARISTO</Link>
                </span>
            </h1>
        </div>
        <div className="col d-flex align-items-end align-items-xs-center flex-column">
            <button className="navbar-toggler border-0 outline-0" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
        </div>
        <div className="px-5 collapse navbar-collapse justify-content-md-end" id="navbarsExample08">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link varela-font">ראשי</Link>
                </li>
                <li >
                <Link to="/main" className="nav-link varela-font active">מילון מונחים
                </Link>
                </li>
                <li >
                <Link to="/about" className="nav-link varela-font">אודות
                </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}
