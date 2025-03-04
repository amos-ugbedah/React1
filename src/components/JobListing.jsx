import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = job.description || "";
  const truncatedDescription =
    !showFullDescription && description.length > 90
      ? description.substring(0, 90) + "..."
      : description;

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <div>{truncatedDescription}</div>
      {description.length > 90 && (
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-indigo-500 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
      )}
      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
      <div className="flex justify-between">
        <div className="text-orange-700">
          <FaMapMarker className="inline mr-1" /> {job.location}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default JobListing;