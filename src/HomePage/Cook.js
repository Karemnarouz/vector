/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Cook() {
  return (
    <div>
         <section class="cook-delecious">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-md-offset-1">
                    <div class="first-image">
                        <img src="img/cook_01.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="cook-content">
                        <h4>We cook delecious</h4>
                        <div class="contact-content">
                            <span>You can call us on:</span>
                            <h6>+ 1234 567 8910</h6>
                        </div>
                        <span>or</span>
                        <div class="primary-white-button">
                            <a href="#" class="scroll-link" data-id="book-table">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="second-image">
                        <img src="img/cook_02.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Cook