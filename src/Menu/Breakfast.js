import React from 'react'

function Breakfast() {
  return (
    <div>
        <section className="breakfast-menu">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="breakfast-menu-content">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="left-image">
                                    <img src="img/breakfast_menu.jpg" alt="Breakfast"/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2>Breakfast Menu</h2>
                                <div id="owl-breakfast" className="owl-carousel owl-theme">
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="\img\breakfast_item.jpg" alt=""/>
                                            <div className="price">$3.50</div>
                                            <div className="text-content">
                                                <h4>Kale Chips Art Party</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/lunch_item.jpg" alt=""/>
                                            <div className="price">$7.25</div>
                                            <div className="text-content">
                                                <h4>Drink Vinegar Prism</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/dinner_item.jpg" alt=""/>
                                            <div className="price">$11.50</div>
                                            <div className="text-content">
                                                <h4>Taiyaki Gastro Tousled</h4>
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
    </section>
    </div>
  )
}

export default Breakfast;