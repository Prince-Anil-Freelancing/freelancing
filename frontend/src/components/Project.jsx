import React from "react";
import image2 from "../assets/mainimage.jpg";
import vi from "../assets/free video.mp4";
import vi2 from "../assets/ngo video.mp4";
import vi3 from "../assets/blog.mp4";

const Project = () => {
  return (
    <>
      <div className="project">
        <h1>Projects</h1>
        <div className="p-box">
          <div className="p-image">
            <video src={vi} controls autoplay>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-detail">
            <p>
              Project Title: Freelancing Platform using MERN Stack. <br />
              Description: <br />
              Our project is a comprehensive freelancing platform built using
              the MERN stack (MongoDB, Express.js, React, and Node.js). This
              platform connects freelancers with clients, providing a seamless
              experience for both parties to collaborate on various projects.{" "}
              <br />
              User Authentication: Secure login and registration for both
              freelancers and clients using JWT (JSON Web Tokens). <br />
            </p>
            <br />
            {/* <button>Click It!</button> */}{" "}
            <h3>Tech Stack :: Reactjs, Nodejs , Expressjs & MongoDB</h3>
          </div>
        </div>

        <div className="p-box">
          <div className="p-image">
            <video src={vi2} controls autoplay>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-detail">
            <p>
              Project Title: NGO Management Platform using MERN Stack <br />
              Description: <br /> Our project is a robust NGO management
              platform built using the MERN stack (MongoDB, Express.js, React,
              and Node.js). This platform is designed to streamline the
              operations of non-governmental organizations, enhancing their
              ability to manage projects, volunteers, and donations efficiently.
            </p>
            <br />
            {/* <button>Click It!</button> */}{" "}
            <h3>Tech Stack :: Reactjs, Nodejs , Expressjs & MongoDB</h3>
          </div>
        </div>

        <div className="p-box">
          <div className="p-image">
            <video src={vi3} controls autoplay>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-detail">
            <p>
              Project Title: Blogging Platform using MERN Stack <br />Description: <br /> Our
              project is a dynamic blogging platform built using the MERN stack
              (MongoDB, Express.js, React, and Node.js). This platform allows
              users to create, manage, and share their blogs with a wide
              audience, providing a seamless and engaging experience for both
              writers and readers.
            </p>
            <br />
            {/* <button>Click It!</button> */}{" "}
            <h3>Tech Stack :: Reactjs, Nodejs , Expressjs & MongoDB</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
