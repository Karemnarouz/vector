import React from 'react'

function Lunch() {
  return (
    <div><section className="lunch-menu">
    <div className="container">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="lunch-menu-content">
                    <div className="row">
                        <div className="col-md-7">
                            <h2>Lunch Menu</h2>
                            <div id="owl-lunch" className="owl-carousel owl-theme">
                                <div className="item col-md-12">
                                    <div className="food-item">
                                        <img src="img/lunch_item.jpg" alt=""/>
                                        <div className="price">$6.50</div>
                                        <div className="text-content">
                                            <h4>Mumble Ditch Corn</h4>
                                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-12">
                                    <div className="food-item">
                                        <img src="img/breakfast_item.jpg" alt=""/>
                                        <div className="price">$11.75</div>
                                        <div className="text-content">
                                            <h4>Wayfare Lomo Core</h4>
                                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-12">
                                    <div className="food-item">
                                        <img src="img/dinner_item.jpg" alt=""/>
                                        <div className="price">$16.50</div>
                                        <div className="text-content">
                                            <h4>Taiyaki Gastro Tousled</h4>
                                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="left-image">
                                <img src="img/lunch_menu.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Lunch;