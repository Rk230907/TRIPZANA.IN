import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./DestinationList.css";

function DestinationList() {
  // Dummy destination data
  const destinations = [
    {
      id: 1,
      name: "Destination 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$500",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "Destination 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$600",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Destination 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$700",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      name: "Destination 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$700",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      name: "Destination 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.",
      price: "$700",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Duration of the animation in milliseconds
  });

  const images = [
    "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://racolblegal.com/wp-content/uploads/2016/10/o-TOURIST-facebook.jpg",
    "https://www.treebo.com/blog/wp-content/uploads/2018/08/Tourist-Places-in-India.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const preloadImages = () => {
      images.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          setLoading(false);
        };
      });
    };

    preloadImages();

    // Automatically switch images with fading every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="destination-list">
      {/* Horizontal Image Slider */}
      <div className="image-slider-container">
        {images.map((image, index) => (
          <animated.img
            key={index}
            src={image}
            alt={`Slider ${index}`}
            style={{
              ...fadeIn,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      <div className="destination-cards">
        {destinations.map((destination) => (
          <animated.div
            className="destination-card"
            key={destination.id}
            style={{ ...fadeIn, width: 400, borderRadius: 10 }}
          >
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p>Price: {destination.price}</p>
            <Link to={`/destination/${destination.id}`}>View Details</Link>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;
