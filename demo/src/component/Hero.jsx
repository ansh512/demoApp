import React from 'react';
import heroImage from "../assets/Working-Professional.jpg";
import company from "../assets/companies.png";
import Card from "../component/Card"
import ProfileCard from "../component/profileCard"
import image1 from "../assets/img1.png"
import image2 from "../assets/img2.png"
import image3 from "../assets/img3.png"
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-row gap-4">
      <div className="py-16 px-4 relative">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-100 opacity-75"
        style={{ zIndex: -1 }}
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-grey">
          Welcome to TalentSphere
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-grey">
          Find the best software engineers, product managers, data scientists, and more for your company!
        </p>
        <Link to="/login">
          <button className="bg-white text-blue-500 py-2 px-6 rounded-full shadow-lg font-semibold hover:bg-gray-700 hover:text-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
      <div className="flex justify-center items-center flex-col h-full my-8">
        <h2 className="mr-4 text-2xl font-semibold">LEADING COMPANIES BUILD THEIR TEAMS ON TalentSphere</h2>
        <img
            src={company}
            alt="Company Background"
            className="w-2/3 h-100"
        />
      </div>
      <Card imageRight={image1} head={"5X higher response from companies"} />
      <Card imageLeft={image3} head={"Salary & Role transparency"}/>
      <Card imageRight={image2} head={"Privacy guaranteed"}/>
      <div className='flex items-center flex-col justify-center mb-20'>
      <h2 className="mr-4 text-2xl font-semibold p-4">Our TopHire</h2>
        <div className="flex space-x-4 w-full justify-center px-4">
          <ProfileCard name={"john Doe"} company={"Creed"} image={person1}/>
          <ProfileCard name={"john Doe"} company={"Myntra"} image={person2}/>
          <ProfileCard name={"john Doe"} company={"Amazon"} image={person3}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
