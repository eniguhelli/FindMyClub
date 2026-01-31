import { useEffect, useState } from "react";
import  api  from "../services/api";

export default function ClubModal({ id, onClose }) {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    api.get(`/clubs/${id}`).then((res) => setTeam(res.data));
  }, [id]);

  if (!team) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose}>X</button>
        <h2>{team.name}</h2>
        <p>Coach: {team.coach?.name}</p>
        <p>Stadium: {team.venue}</p>
        <p>Founded: {team.founded}</p>
        <p>
          Running Competitions:{" "}
          {team.runningCompetitions?.map((c) => c.name).join(", ")}
        </p>
      </div>
    </div>
  );
}