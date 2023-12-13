import React from 'react'

function Dinner() {
  return (
    <div> <section className="dinner-menu">
    <div className="container">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="dinner-menu-content">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-image">
                                <img src="img/dinner_menu.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h2>Dinner Menu</h2>
                            <div id="owl-dinner" className="owl-carousel owl-theme">
                                <div className="item col-md-12">
                                    <div className="food-item">
                                        <img src="img/dinner_item.jpg" alt=""/>
                                        <div className="price">$8.25</div>
                                        <div className="text-content">
                                            <h4>Meal Apples Almonds</h4>
                                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-12">
                                    <div className="food-item">
                                        <img src="img/lunch_item.jpg" alt=""/>
                                        <div className="price">$12.50</div>
                                        <div className="text-content">
                                            <h4>Ditch Corn Art</h4>
                                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-md-12">
                                    <div className="food-item">
                                        <img src="img/breakfast_item.jpg" alt=""/>
                                        <div className="price">$16.00</div>
                                        <div className="text-content">
                                            <h4>Kale Chips Art Party</h4>
                                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                        </div>
                                    </div>
                                </div>
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

export default Dinner;