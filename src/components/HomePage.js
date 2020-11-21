import React from 'react'

import './App.css';
import './background.css'
import BgShape from './bgShape'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
    <div className="page">
      <BgShape />
      <div className="App">
      <header className="App-header">
        <h1 className="title scaling">אריסטו</h1>
        <h4 className="subtitle">מילון מונחים פילוסופיים</h4>
        <div className="btn-container">
        <Link to="/main" transition='glide-left' className="btn btn-outline-info btn-lg btn-block shadow-none">
        כניסה
        </Link>
        </div>
      </header>
    </div>
    </div>
    )
}
