import React from "react";

// import img
import Image from "../assets/img/about.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Rikshitha Ravikumar 
                              </h2>
              <p className="mb-4 text-accent">Masters Student</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              An Upcoming MS Graduate offering a strong foundation in Computer Science. I have always had a keen interest in coding
and technology since childhood which made me choose this course. I am a motivated student who would love to explore and
learn more about IT and Computers.

                <br />
                <br />I am now a more confident in coding and data analysis.
                I like to learn new things.
              </p>
            </div>
            <a href="https://www.linkedin.com/in/rikshitha-ravikumar/" target="_blank">
             
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Linkedin Profile
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
