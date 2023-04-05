import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container mx-auto px-4 flex flex-col justify-center items-start">
        <h1 className="text-white text-5xl font-bold mb-4">
          Welcome to ChatterSphere
        </h1>
        <p className="text-white text-xl mb-8">
          Discover a world of conversations and connections.
        </p>
        <Link
          to="/signup"
          className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-500"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
