import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OurTeam.css";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/team/list-web-teammembers");
        setTeamMembers(response.data.responseData || []);
        setError("");
      } catch (err) {
        console.error("Failed to fetch team members:", err);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) return <p>Loading team members...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <section className="our-team-section">
      <div className="container">
        <h2 className="our-team-title">Our Visionary Leaders</h2>
       <div className="team-cards">
  {teamMembers.length === 0 ? (
    <p className="no-data-message d-flex justify-content-center">No team members found.</p>
  ) : (
    teamMembers.map((member) => (
      <div key={member.id} className="team-card">
        <div className="team-card-left">
          <img
            src={member.img || "/default-avatar.png"}
            alt={member.name}
            className="team-card-img"
          />
        </div>
        <div className="team-card-right">
          <p className="team-card-description">{member.description}</p>
          <p>
            <strong>Experience:</strong> {member.experience || "N/A"} years
          </p>
          <p>
            <strong>Qualification:</strong> {member.qualification || "N/A"}
          </p>
          <h3 className="team-card-name">{member.name}</h3>
          <p className="team-card-designation">{member.designation}</p>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="linkedin-icon"
            >
              <img
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          )}
        </div>
      </div>
    ))
  )}
</div>

      </div>
    </section>
  );
};

export default OurTeam;
