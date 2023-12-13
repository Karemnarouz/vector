import React from 'react'

function Featured_food() {
  return (
    <div>
         <section className="featured-food">
        <div className="container">
            <div className="row">
                <div className="heading">
                    <h2>Weekly Featured Food</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="food-item">
                        <h2>Breakfast</h2>
                        <img src="img/breakfast_item.jpg" alt=""/>
                        <div className="price">$4.50</div>
                        <div className="text-content">
                            <h4>Kale Chips Art Party</h4>
                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean shorts hexagon street art knausgaard wolf...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="food-item">
                        <h2>Lunch</h2>
                        <img src="img/lunch_item.jpg" alt=""/>
                        <div className="price">$7.50</div>
                        <div className="text-content">
                            <h4>Taiyaki Gastro Tousled</h4>
                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean shorts hexagon street art knausgaard wolf...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="food-item">
                        <h2>Dinner</h2>
                        <img src="img/dinner_item.jpg" alt=""/>
                        <div className="price">$12.50</div>
                        <div className="text-content">
                            <h4>Batch Squid Jean Shorts</h4>
                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean shorts hexagon street art knausgaard wolf...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Featured_food;