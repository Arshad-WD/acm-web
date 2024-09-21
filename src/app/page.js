"use client"; // Ensure this is a client component

import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/logo.png'; // Replace with your image path
import AcmBg from '/public/images/acmbg.jpeg'; // Update with your actual image path

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${AcmBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0 }} />
      
      <div className="absolute inset-0 bg-black/85" />

      <nav className="bg-transparent p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={logo} 
              alt="Logo" 
              width={60} 
              height={60} 
              className="rounded-full object-contain ml-12"
            />
          </div>
          <ul className="flex space-x-12 mr-32">
            <li><Link href="/" className="text-white hover:text-yellow-500">Home</Link></li>
            <li><Link href="/events" className="text-white hover:text-yellow-500">Events</Link></li>
            <li><Link href="/team" className="text-white hover:text-yellow-500">Our Team</Link></li>
            <li><Link href="/magazine" className="text-white hover:text-yellow-500">Magazine</Link></li>
            <li><Link href="/blogs" className="text-white hover:text-yellow-500">Blogs</Link></li>
            <li><Link href="/gallery" className="text-white hover:text-yellow-500">Gallery</Link></li>
            <li><Link href="/membership" className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2">Become a Member</Link></li>
            <li><Link href="/login" className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2">Log In</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center min-h-screen relative z-10">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-cover mb-20" style={{ backgroundImage: `url(${AcmBg.src})`, backgroundSize: "300vh" }}>
            ACM MHSSCOE
          </h1>
          <p className="text-center  max-w-prose text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, reiciendis. Nihil quisquam aut praesentium deleniti, sunt nemo distinctio inventore facere.
          </p>
        </div>
      </main>
    </div>
  );
}
