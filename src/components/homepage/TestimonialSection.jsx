"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote:
        "The task manager helped me organize my work efficiently. Great tool!",
    },
    {
      id: 2,
      name: "Jane Smith",
      quote:
        "I love the simplicity and flexibility of this task manager. Highly recommended!",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="bg-gray-800 py-12 ">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-orange-300">
          Testimonials
        </h2>
        <div className="max-w-md mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-lg mb-4">{testimonial.quote}</p>
                  <p className="text-gray-600 font-semibold">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
