const ClubCard = ({ team, onClick }) => (
  <div onClick={() => onClick(team.id)}>
    <img src={team.crest} />
    <h3>{team.name}</h3>
    <p>{team.area.name}</p>
    <small>{team.venue}</small>
  </div>
);

export default ClubCard;