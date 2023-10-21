import React, { useState } from "react";
import "./DestinationPage.css";
import { Link } from "react-router-dom";

const states = [
  {
    name: "Gujarat",
    description: "Description for the state of Gujarat",
    image: "https://holidify.com/images/bgImages/INDIA.jpg",
    touristPlaces: [
      {
        name: "Tourist Place 1, Gujarat",
        description: "Description for Tourist Place 1 in Gujarat",
        price: "$500",
        image: "https://holidify.com/images/bgImages/INDIA.jpg",
        id: 1,
      },
      {
        name: "Tourist Place 2, Gujarat",
        description: "Description for Tourist Place 2 in Gujarat",
        price: "$600",
        image: "Image URL for Place 2 in Gujarat",
        id: 2,
      },
      // Add more tourist places for Gujarat
    ],
  },
  {
    name: "Uttarakhand",
    description: "Description for the state of Uttarakhand",
    image: "https://holidify.com/images/bgImages/INDIA.jpg",
    touristPlaces: [
      {
        name: "Tourist Place 1, Uttarakhand",
        description: "Description for Tourist Place 1 in Uttarakhand",
        price: "$700",
        image: "Image URL for Place 1 in Uttarakhand",
        id: 3,
      },
      {
        name: "Tourist Place 2, Uttarakhand",
        description: "Description for Tourist Place 2 in Uttarakhand",
        price: "$800",
        image: "Image URL for Place 2 in Uttarakhand",
        id: 4,
      },

      // Add more tourist places for Uttarakhand
    ],
  },

  {
    name: "Chennai Thala",
    description: "Description for the state of Gujarat",
    image: "https://holidify.com/images/bgImages/INDIA.jpg",
    touristPlaces: [
      {
        name: "Tourist Place 1, Gujarat",
        description: "Description for Tourist Place 1 in Gujarat",
        price: "$500",
        image: "https://holidify.com/images/bgImages/INDIA.jpg",
        id: 5,
      },
      {
        name: "Tourist Place 1, Gujarat",
        description: "Description for Tourist Place 1 in Gujarat",
        price: "$500",
        image: "https://holidify.com/images/bgImages/INDIA.jpg",
        id: 6,
      },
      {
        name: "Tourist Place 1, Gujarat",
        description: "Description for Tourist Place 1 in Gujarat",
        price: "$500",
        image: "https://holidify.com/images/bgImages/INDIA.jpg",
        id: 7,
      },
      {
        name: "Tourist Place 1, Gujarat",
        description: "Description for Tourist Place 1 in Gujarat",
        price: "$500",
        image: "https://holidify.com/images/bgImages/INDIA.jpg",
        id: 8,
      },
      // Add more tourist places for Gujarat
    ],
  },

  // Add more states as needed
];

function DestinationPage() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="destination-page">
      {selectedState ? (
        <div>
          <h2 className="headerState">{selectedState.name}</h2>
          <p className="stateDesc">{selectedState.description}</p>
          <img src={selectedState.image} alt={selectedState.name} />
          <div className="destination-cards">
            {selectedState.touristPlaces.map((place) => (
              <div key={place.id} className="destination-container">
                <img src={place.image} alt={place.name} />
                <div className="destination-description">
                  <h2>{place.name}</h2>
                  <p>{place.description}</p>
                  <p>Price: {place.price}</p>

                  <Link
                    to={`/details/${place.id}`}
                    className="view-details-link"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        states.map((state, index) => (
          <div
            key={index}
            className="state-container"
            onClick={() => setSelectedState(state)}
          >
            <img src={state.image} alt={state.name} />
            <h2>{state.name}</h2>
            <p>{state.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DestinationPage;
