import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DestinationDetail.css"; // Import your CSS file

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

function TouristPlaceDetails() {
  const [fadeIn, setFadeIn] = useState(false);

  const { id } = useParams();
  console.log(`Selected ID: ${id}`);

  // Replace this dummy data with the actual destination data from your source
  // You should fetch the data from an API or another data source based on the provided id
  const destinationsData = [
    {
      id: 1,
      name: "Destination 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$500",
      image: "https://via.placeholder.com/400x300",
      itinerary: "Day 1: Lorem ipsum\nDay 2: Lorem ipsum",
      travelDetails: "Flight: Lorem ipsum\nAccommodation: Lorem ipsum",
      roadmap: [
        { step: "Step 1", description: "Lorem ipsum" },
        { step: "Step 2", description: "Lorem ipsum" },
        // Add more steps
      ],
    },
    {
      id: 2,
      name: "Destination 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$600",
      image:
        "https://lp-cms-production.imgix.net/2022-01/Young%20woman%20traveler%20with%20backpack%20traveling%20into%20beautiful%20pagoda%20in%20Wat%20Pra%20Kaew%20Witthaya%20Prasongsin%20GettyImages-1333211288%20rfc.jpg",
      itinerary: "Day 1: Lorem ipsum\nDay 2: Lorem ipsum",
      travelDetails: "Flight: Lorem ipsum\nAccommodation: Lorem ipsum",
      roadmap: [
        { step: "Day 1", description: "Lorem ipsum" },
        { step: "Day 2", description: "Lorem ipsum" },
        { step: "Day 3", description: "Lorem ipsum" },
        // Add more steps
      ],
    },
    {
      id: 3,
      name: "Destination 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$700",
      image: "https://via.placeholder.com/400x300",
      itinerary: "Day 1: Lorem ipsum\nDay 2: Lorem ipsum",
      travelDetails: "Flight: Lorem ipsum\nAccommodation: Lorem ipsum",
      roadmap: [
        { step: "Step 1", description: "Lorem ipsum" },
        { step: "Step 2", description: "Lorem ipsum" },
        // Add more steps
      ],
    },
  ];

  const destination = destinationsData.find((dest) => dest.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setFadeIn(true);
  }, [id]);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const animatedStyle = {
    animation: fadeIn ? "fadeIn 1s ease-in-out" : "none",
  };

  return (
    <div className="destination-detail" style={animatedStyle}>
      <div className="destination-image" style={animatedStyle}>
        <img src={destination.image} alt={destination.name} />
      </div>
      <div className="destination-info" style={animatedStyle}>
        <h2>{destination.name}</h2>
        <p>{destination.description}</p>
        <p>Price: {destination.price}</p>
      </div>
      <div className="destination-itinerary" style={animatedStyle}>
        <h3 style={animatedStyle}>Itinerary</h3>
        <p style={animatedStyle}>{destination.itinerary}</p>
      </div>
      <div className="destination-travel-details" style={animatedStyle}>
        <h3 style={animatedStyle}>Travel Details</h3>
        <p style={animatedStyle}>{destination.travelDetails}</p>
      </div>
      <div className="destination-roadmap" style={animatedStyle}>
        <h3 style={animatedStyle}>Roadmap</h3>
        <ul>
          {destination.roadmap.map((step, index) => (
            <li key={index} style={animatedStyle}>
              <FontAwesomeIcon
                icon={faPlane}
                className="plane-icon"
                style={animatedStyle}
              />
              <div className="step-info" style={animatedStyle}>
                <h4>{step.step}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TouristPlaceDetails;
