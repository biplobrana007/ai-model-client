import React from "react";
import Container from "./Container";

const AboutAiModels = () => {
  return (
    <div className="py-15">
      <Container>
        <div>
          <h2 className="font-semibold text-center text-3xl mb-5">
            About AI Models
          </h2>
          <div>
            <p className="text-lg font-semibold">
              AI models are computer programs designed to learn from data and
              make intelligent decisions. Most modern AI models use neural
              networks, which help them recognize patterns just like the human
              brain.AI models play an important role in machine learning and are
              used in many real-world applications, including:
            </p>

            <ul className="list-disc ml-20 mt-5 ">
              <li>Chatbots and virtual assistants</li>
              <li>Image and face recognition</li>
              <li>Speech-to-text and voice commands</li>
              <li>Recommendation systems (like YouTube or Netflix)</li>
              <li>Predictive analytics and automation</li>
              <li>
                AI is transforming industries and making technology smarter,
                faster, and more efficient.
              </li>{" "}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutAiModels;
