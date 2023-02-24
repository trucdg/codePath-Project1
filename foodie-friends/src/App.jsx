import React from "react";
import Restaurant from "./components/Restaurant";

function App() {
  //hard-coded array of 10 restaurants in Boston Area
  const restaurants = [
    {
      name: "Fogo de Chao",
      cuisine: "Brazilian",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/4Na6YdEKTo1MJrHCsHLd4A/o.jpg",
      location: "200 Dartmouth St Boston, MA 02116",
      url: "https://fogodechao.com/",
    },
    {
      name: "O Ya",
      cuisine: "Japanese",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/DKgGXBFHWO0pkswkAHP3YA/o.jpg",
      location: "9 East St Boston, MA 02111",
      url: "https://www.o-ya.restaurant/",
    },
    {
      name: "Chickadee",
      cuisine: "Mediterranean",
      image: "https://media.timeout.com/images/105743738/750/562/image.jpg",
      location: "21 Drydock Ave Boston, MA 02210",
      url: "https://www.chickadeerestaurant.com/",
    },
    {
      name: "Mooncusser",
      cuisine: "American",
      image: "https://media.timeout.com/images/105882693/750/562/image.jpg",
      location: "304 Stuart St Boston, MA 02116",
      url: "https://www.mooncusserboston.com/about/",
    },
    {
      name: "Pho Le",
      cuisine: "Vietnamese",
      image:
        "https://www.thefoodlens.com/uploads/2022/01/PHO-LE_THE-FOOD-LENS_EXTERIOR_BRIAN-SAMUELS-PHOTOGRAPHY_JANUARY-2022-IMG_3459-copy-1-1440x960.jpg",
      location: "1356 Dorchester Ave, MA 02122",
      url: "https://pholedorchester.com/",
    },
    {
      name: "Krasi",
      cuisine: "Greek",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/TMcJuygq_jm9d97syg-Ejg/o.jpg",
      location: "48 Gloucester St, MA 02115",
      url: "https://krasiboston.com/",
    },
    {
      name: "Woods Hill Pier 4",
      cuisine: "American",
      image: "https://media.timeout.com/images/105561624/750/422/image.jpg",
      location: "300 Pier Four Blvd St Boston, MA 02210",
      url: "https://www.woodshillpier4.com/",
    },
    {
      name: "Shojo",
      cuisine: "Chinese",
      image: "https://media.timeout.com/images/103199716/750/422/image.jpg",
      location: "9 Tyler St Boston, MA 02111",
      url: "https://www.shojoboston.com/",
    },
    {
      name: "Kaju Tofu",
      cuisine: "Korean",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/GjXleSQp0BFPfFIXbIPZSg/o.jpg",
      location: "58 Harvard Ave Allston, MA 02134",
      url: "https://www.kajusofttofu.net/",
    },
    {
      name: "Pammy’s",
      cuisine: "Italian",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/t8ZePdw3by1G14uH2uT9dA/o.jpg",
      location: "928 Massachusetts Ave Cambridge, MA 02139",
      url: "https://www.pammyscambridge.com/",
    },
  ];
  return (
    <div className="main-content">
      <h1>Foodie Friends</h1>
      <div className="container">
        <div className="row">
          <Restaurant
            name={restaurants[0].name}
            image={restaurants[0].image}
            url={restaurants[0].url}
            cuisine={restaurants[0].cuisine}
            location={restaurants[0].location}
          />
          <Restaurant
            name={restaurants[1].name}
            image={restaurants[1].image}
            url={restaurants[1].url}
            cuisine={restaurants[1].cuisine}
            location={restaurants[1].location}
          />
          <Restaurant
            name={restaurants[2].name}
            image={restaurants[2].image}
            url={restaurants[2].url}
            cuisine={restaurants[2].cuisine}
            location={restaurants[2].location}
          />
          <Restaurant
            name={restaurants[3].name}
            image={restaurants[3].image}
            url={restaurants[3].url}
            cuisine={restaurants[3].cuisine}
            location={restaurants[3].location}
          />
          <Restaurant
            name={restaurants[4].name}
            image={restaurants[4].image}
            url={restaurants[4].url}
            cuisine={restaurants[4].cuisine}
            location={restaurants[4].location}
          />
          <Restaurant
            name={restaurants[5].name}
            image={restaurants[5].image}
            url={restaurants[5].url}
            cuisine={restaurants[5].cuisine}
            location={restaurants[5].location}
          />
          <Restaurant
            name={restaurants[6].name}
            image={restaurants[6].image}
            url={restaurants[6].url}
            cuisine={restaurants[6].cuisine}
            location={restaurants[6].location}
          />
          <Restaurant
            name={restaurants[7].name}
            image={restaurants[7].image}
            url={restaurants[7].url}
            cuisine={restaurants[7].cuisine}
            location={restaurants[7].location}
          />
          <Restaurant
            name={restaurants[8].name}
            image={restaurants[8].image}
            url={restaurants[8].url}
            cuisine={restaurants[8].cuisine}
            location={restaurants[8].location}
          />
          <Restaurant
            name={restaurants[9].name}
            image={restaurants[9].image}
            url={restaurants[9].url}
            cuisine={restaurants[9].cuisine}
            location={restaurants[9].location}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
