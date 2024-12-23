import React, { useEffect, useState } from "react";

// Testimonial data
const testimonials = [
  {
    name: "Pushp Raj",
    title: "Developer",
    review:
      "A promising and reliable platform for event hosting and managing smooth rollout of entry passes. Very much impressed with the customer support.",
   
  },
  {
    name: "Sneha Verma",
    title: "Event Planner",
    review:
      "Evento made it seamless to organize my event. Easy to use and well-managed. Highly recommended!",

  },
  {
    name: "Rahul Ranjan",
    title: "Manager, EventCo",
    review:
      "Efficient and user-friendly platform. Helped us achieve our event goals successfully. Great experience!",
    
  },
  {
    name: "Pooja Singh",
    title: "Freelancer",
    review:
      "Loved using Evento. It provided all the tools I needed to host my workshop effortlessly. Will use it again!",
   
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update testimonial index
  const updateTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(updateTestimonial, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="text-center p-10 bg-gray-100 bg-cover bg-center h-screen" style={{}}>
      <h2 className="text-xl text-gray-600">WHAT CUSTOMER SAYS</h2>
      <h3 className="text-3xl font-bold mb-8">RECENT REVIEWS</h3>

      <div className="max-w-lg mx-auto bg-blue-100 p-8 rounded-xl shadow-xl">
        {/* <img
          src={currentTestimonial.image}
          alt={currentTestimonial.name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        /> */}
        <h4 className="text-2xl text-gray-800">{currentTestimonial.name}</h4>
        <p className="text-lg text-gray-600 mb-4">{currentTestimonial.title}</p>
        <p className="text-md text-gray-700">&#8220;{currentTestimonial.review}&#8221;</p>
      </div>

      <div className="mt-8">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
          className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
          className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

