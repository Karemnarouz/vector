import React from 'react'

function Book_table() {
  return (
    <div>
        <section id="book-table">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading">
                        <h2>Book Your Table Now</h2>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-2 col-sm-12">
                    <div className="left-image">
                        <img src="img/book_left_image.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="right-info">
                        <h4>Reservation</h4>
                        <form id="form-submit" action="" method="get">
                            <div className="row">
                                <div className="col-md-6">
                                    <fieldset>
                                        <select required name='day' onchange='this.form.()'>
                                            <option value="">Select day</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset>
                                        <select required name='hour' onchange='this.form.()'>
                                            <option value="">Select hour</option>
                                            <option value="10-00">10:00</option>
                                            <option value="12-00">12:00</option>
                                            <option value="14-00">14:00</option>
                                            <option value="16-00">16:00</option>
                                            <option value="18-00">18:00</option>
                                            <option value="20-00">20:00</option>
                                            <option value="22-00">22:00</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset>
                                        <input name="name" type="name" className="form-control" id="name" placeholder="Full name" required=""/>
                                    </fieldset> 
                                </div>
                                <div className="col-md-6">
                                    <fieldset>
                                        <input name="phone" type="phone" className="form-control" id="phone" placeholder="Phone number" required=""/>
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset>
                                        <select required className="person" name='persons' onchange='this.form.()'>
                                            <option value="">How many persons?</option>
                                            <option value="1-Person">1 Person</option>
                                            <option value="2-Persons">2 Persons</option>
                                            <option value="3-Persons">3 Persons</option>
                                            <option value="4-Persons">4 Persons</option>
                                            <option value="5-Persons">5 Persons</option>
                                            <option value="6-Persons">6 Persons</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="btn">Book Table</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Book_table;