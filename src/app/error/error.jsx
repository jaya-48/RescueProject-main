import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  const message = 'Something went wrong. Please Try Again.';
  const code = '500';

  return (
    <div className="text-center mt-10">
      <h3 className="text-xl font-semibold text-red-600">
        {message}
        <br />
        Error Code: {code}
        <br />
        <Link to="/home">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Home
          </button>
        </Link>
      </h3>
    </div>
  );
};

export default Error;
