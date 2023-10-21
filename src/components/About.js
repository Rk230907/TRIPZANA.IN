import React from "react";
import "./About.css"; // Import your CSS file for styling
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const customerReviews = [
  // ... (Customer reviews data as before)
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    review:
      "I had an amazing trip with Tourism Website. The destinations were breathtaking, and the service was top-notch. I highly recommend them.",
  },
  {
    id: 2,
    name: "Alice Smith",
    rating: 5,
    review:
      "Tourism Website exceeded my expectations. The team is passionate about travel and it shows in their meticulously planned tours. Truly unforgettable!",
  },
  {
    id: 3,
    name: "Ella Johnson",
    rating: 3,
    review:
      "What a fantastic experience! I traveled with Tourism Website and discovered beautiful places and cultures. Their commitment to customer satisfaction is commendable.",
  },
];

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i <= rating ? "star star-filled" : "star star-empty"}
      />
    );
  }
  return stars.slice(0, rating);
}

function About() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn}>
      <div className="about">
        <h2>About Us</h2>

        <p>
          Welcome to Tourism Website, your gateway to unforgettable travel
          experiences. We are dedicated to providing the best tours and
          destinations for travelers seeking adventure, culture, and relaxation.
        </p>
        <p>
          With years of expertise and a passion for exploration, our team has
          curated a list of handpicked destinations that offer a perfect blend
          of beauty, history, and adventure.
        </p>
        <p>
          Our mission is to make your travel dreams a reality. We take pride in
          organizing successful trips that create lasting memories for our
          valued customers. Your journey with us is not just a vacation; it's an
          unforgettable experience.
        </p>
        <p>
          Join us as we explore new horizons, discover hidden gems, and embark
          on exciting adventures. We look forward to sharing our passion for
          travel with you.
        </p>
      </div>

      <div className="review">
        <h2>Customer Reviews</h2>
        <div className="customer-ratings">
          {customerReviews.map((review) => (
            <div key={review.id} className="cue-card">
              <div className="cue-card-rating">
                {renderStars(review.rating)}
              </div>
              <p className="cue-card-review">{review.review}</p>
              <p className="cue-card-reviewer">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </animated.div>
  );
}

export default About;
