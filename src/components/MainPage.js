import React,{useState} from 'react'

import './mainpage-hegiht.css'
import Nav from './Nav'
import Footer from './Footer'
import BgShape from './bgShape'
import CardContainer from './CardContainer'
import musagim from './musagim'
import BackToTop from './BackToTop'

const MainPage = ({data}) => {

    let [word, setWord] = useState('')
    let [allData, setAllData] = useState(musagim)

    const changeHandler = (e) => {
        e.preventDefault();
        return setWord(e.target.value)
    }
    const createCardInfo = cardInfo => {
        return (
            <CardContainer
                data={data} 
                key={cardInfo.id}
                id={cardInfo.id}
                title={cardInfo.title}
                subTitle={cardInfo.subTitle}
                content={cardInfo.content.slice(0,110)+'...'}
                lastUpdate={cardInfo.lastUpdate}
                shareLink={cardInfo.shareLink}
                />
                )
        }
    const filterCard = allData.filter( card => {
            return ((card.title.includes(word)) || (card.content.includes(word)))
    })

    return (
    <div className="page">
        <BgShape/>
        <Nav/>
        <div className="container-fluid" id="top-of-the-app">
            <div className="row mt-5">
            <div className="col-lg-3 col-sm-2"></div> 
            <div className="col-lg-6 col-sm-8 mb-5">
                    <input autoFocus
                        className="varela-font input-style shadow-none text-center mx-auto col"
                        type="text"
                        placeholder="חיפוש חופשי"
                        onChange={changeHandler}
                        value={word}                        
                    />
            </div> 
            <div className="col-lg-3 col-sm-2"></div>
        </div>
        </div>
        <div className="container-fluid bg-light">
            <div className="row m-1 d-flex">
                <div className="mb-3 col col-lg-10 col-sm-12 m-0 px-0 justify-content-center mx-auto">
                    {
                    filterCard.map((card,index) => {
                        return (
                            <div key={index}>
                                {createCardInfo(card)}
                            </div>)})
                    }
                </div>
                <BackToTop />
            </div>
        </div>
        <Footer />
    </div>
    )        
}
export default MainPage