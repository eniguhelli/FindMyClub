const LEAGUES = [
  { code: "PL", name: "Premier League" },
  { code: "PD", name: "La Liga" },
  { code: "SA", name: "Serie A" },
  { code: "BL1", name: "Bundesliga" },
  { code: "WC", name: "World Cup" },
];

export default function AsideLeagues({ onSelect }) {
  return (
    <aside>
      {LEAGUES.map((l) => (
        <button key={l.code} onClick={() => onSelect(l.code)}>
          {l.name}
        </button>
      ))}
    </aside>
  );
}