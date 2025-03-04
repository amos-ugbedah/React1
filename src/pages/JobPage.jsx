import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        console.log(`Fetching job with id: ${id}`);
        if (!id) throw new Error("Job ID is undefined");
        const res = await fetch(`http://localhost:4000/jobs/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch job: ${res.statusText}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};

export default JobPage;
