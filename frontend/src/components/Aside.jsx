const LEAGUES = [
  { code: "CL", name: "Champions League" },
  { code: "PL", name: "Premier League" },
  { code: "PD", name: "La Liga" },
  { code: "SA", name: "Serie A" },
  { code: "BL1", name: "Bundesliga" },
  { code: "WC", name: "World Cup" },
  { code: "FL1", name: "Ligue 1" },
  { code: "DED", name: "Eredivisie" },
  { code: "PPL", name: "Primeira Liga" },
  { code: "EC", name: "European Championship" },
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