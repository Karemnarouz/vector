import React from 'react'
import { a } from 'react-router-dom';

function Service() {
  return (
    <div><section className="services">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                    <a href="/">
                    <img src="img/cook_breakfast.png" alt="Breakfast"/>
                    <h4>Breakfast</h4>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                    <a href="/">
                    <img src="img/cook_lunch.png" alt="Lunch"/>
                    <h4>Lunch</h4>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                    <a href="/">
                    <img src="img/cook_dinner.png" alt="Dinner"/>
                    <h4>Dinner</h4>
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="service-item">
                    <a href="/">
                    <img src="img/cook_dessert.png" alt="Desserts"/>
                    <h4>Desserts</h4>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Service;