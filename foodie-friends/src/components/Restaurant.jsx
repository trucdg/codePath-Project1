import React from "react";

const Restaurant = () => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="img-cont card h-100">
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/4Na6YdEKTo1MJrHCsHLd4A/o.jpg"
          alt="displayed food"
          class="card-img-top"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Fogo de Chao</h5>
          <h6 class="card-subtitle mb-2">Mexican</h6>
          <p class="card-text">Description about the restaurant</p>
          <a href="#" class="btn mr-2">
            <i class="fas fa-link"></i> Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
