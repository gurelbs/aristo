import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import BgShape from './bgShape'
import './App.css'

export default function About() {
    return (
        <div>
            <BgShape/>
            <Nav/>
            <div className="container py-3 varela-font text-light rounded-0 shadow-lg about-page-size">
            <h1 className="display-3 bg-light text-dark px-5 about-title">מה:</h1>
            <p className="h2 mb-3">אתר<a href="https://aristo.cf" className="link-color"> זה</a> נבנה, עוצב והועלה לרשת על ידי <a href="http://github.com/gurelbs" className="link-color">גוראל בן שבת</a> כדי לסייע לסטודנטים ולסטודנטיות במדעי הרוח בכלל ובפילוסופיה בפרט</p>
            <h1 className="display-3 bg-light text-dark px-5 about-title">למה:</h1>
            <p className="h2 mb-3"> על אף שלא חסר במרשתת מקורות מידע על מושגים ומונחים מעולם הפילוסופיה, אתר זה הוקם בשאיפה לאגד ל'כרך אחד' את המושגים, המונחים והרעיונות בלשון ברורה, קלה להבנה וכמובן - בעברית.</p>
            <h1 className="display-3 bg-light text-dark px-5 about-title">איך:</h1>
            <p className="h2 mb-3">פשוט וקל; נכנסים<a href="http://aristo.cf/#/main" className="link-color"> למילון המונחים</a>, מקלידים את שאילתת החיפוש וצופים בתוצאות :)</p>
            </div>
            <Footer/>
        </div>
    )
}
