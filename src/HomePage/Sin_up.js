import React from 'react'

function Sin_up() {
  return (
    <div>
         <section className="sign-up">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading">
                        <h2>Signup for our newsletters</h2>
                    </div>
                </div>
            </div>
            <form id="contact" action="" method="get">
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                        <fieldset>
                            <input name="email" type="text" className="form-control" id="email" placeholder="Enter your email here..." required=""/>
                        </fieldset>
                    </div>
                    <div className="col-md-2">
                        <fieldset>
                            <button type="submit" id="form-submit" className="btn">Send Message</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </section>
    </div>
  )
}

export default Sin_up;