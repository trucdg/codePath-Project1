import React from "react";

const Restaurant = (props) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="img-cont card h-100">
        <img src={props.image} alt="displayed food" class="card-img-top"></img>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2">{props.cuisine}</h6>
          <p class="card-text">{props.location}</p>
          <a href={props.url} class="btn mr-2" target="_blank">
            <i class="fas fa-link"></i> Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
