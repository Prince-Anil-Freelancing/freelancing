import React from "react";
import image2 from "../assets/mainimage.jpg";

const Project = () => {
  return (
    <>
      <div className="project">
        <h1>Projects</h1>
        <div className="p-box">
          <div className="p-image">
            <img src={image2} alt="image" />
          </div>
          <div className="p-detail">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias, perferendis. Qui magnam, doloremque earum itaque rerum
              odio libero nisi ad fuga, quos animi iure aperiam! Eaque beatae
              maiores voluptates eveniet accusantium tempora reiciendis, nemo
              blanditiis natus impedit ad ullam. Ab, eum? Repudiandae enim
              aperiam recusandae mollitia officia eaque dolorum ea.
            </p>
            <br />
            <button>Click It!</button>
          </div>
        </div>

        <div className="p-box">
          <div className="p-image">
            <img src={image2} alt="image" />
          </div>
          <div className="p-detail">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias, perferendis. Qui magnam, doloremque earum itaque rerum
              odio libero nisi ad fuga, quos animi iure aperiam! Eaque beatae
              maiores voluptates eveniet accusantium tempora reiciendis, nemo
              blanditiis natus impedit ad ullam. Ab, eum? Repudiandae enim
              aperiam recusandae mollitia officia eaque dolorum ea.
            </p>
            <br />
            <button>Click It!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
