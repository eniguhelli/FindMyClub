const ClubCard = ({ team, onClick }) => (
  <div onClick={() => onClick(team.id)} className="club-card">
    <div className="badge">
      <img src={team.crest} />
    </div>
    <h3>{team.name}</h3>
    <p>{team.area.name}</p>
    <small>{team.venue}</small>
    <p>Founded: {team.founded}</p>
  </div>
);

export default ClubCard;