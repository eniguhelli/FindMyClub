import ClubCard from "./ClubCard.jsx";

const ClubGrid = ({ teams, onSelect }) => (
  <section>
    {teams.map((t) => (
      <ClubCard key={t.id} team={t} onClick={onSelect} />
    ))}
  </section>
);

export default ClubGrid;