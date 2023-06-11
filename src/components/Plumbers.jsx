import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Plumber({ plumber }) {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6">
      <div className="bg-white rounded shadow p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{plumber.name}</h3>
            <p className="text-sm text-gray-600">{plumber.location}</p>
          </div>
          <div>
            {plumber.available ? (
              <span className="px-2 py-1 text-xs font-bold text-green-100 bg-green-600 rounded-full">
                Available
              </span>
            ) : (
              <span className="px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full">
                Unavailable
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">{plumber.email}</span>
          </div>
          <div>
            <span className="text-sm text-gray-600">{plumber.phoneNumber}</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <span className="text-sm text-gray-600">Price per hour:</span>
            <span className="font-bold text-gray-900 ml-2">
              {plumber.pricePerHour}
            </span>
          </div>
          <Link
            to={`/plumbers/${plumber.id}`}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Plumber;
