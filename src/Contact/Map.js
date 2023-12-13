/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';

function Map() {
  return (
    <div> <section className="map">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div id="map">
    {/* <!-- How to change your own map point
        1. Go to Google Maps
        2. Click on your location point
        3. Click "Share" and choose "Embed map" tab
        4. Copy only URL and paste it within the src="" field below
    --> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27443.22985367461!2d31.28448636040569!3d30.707048522835105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1701820401925!5m2!1sar!2seg" width="100%" height="500" frameborder="0" 
                    style={{border :"0"}} allowfullscreen>

                   </iframe>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Map;