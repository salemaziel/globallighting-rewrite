import React from 'react'

import EnvelopContact from '../../images/envelope-contact.png'
import '../../css/HomePageCss/newsLetter.css'

const NewsLetter = () => (
    <section className="cx_news_letter">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <p>
                        Subscribe to Free Newsletter
                    </p>
                </div>
                <div className="col-md-8">
                    <div className="cx_contact_area">
                        <form action='{}'>
                            <input
                                type="text"
                                placeholder="Enter your email adress....."
                                required
                                style={{
                                    background: `url(${EnvelopContact}) left 20px center no-repeat, #FFF`
                                }}
                            />
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default NewsLetter
