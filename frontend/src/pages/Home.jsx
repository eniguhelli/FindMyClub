import { useState } from "react";
import api  from "../services/api";
import Aside from "../components/Aside";
import ClubGrid from "../components/ClubGrid";
import TopBar from "../components/TopBar";
import ClubModal from "../pages/ClubModal";

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadLeague = async (code) => {
    const res = await api.get(`/leagues/${code}/teams`);
    setTeams(res.data);
  };

  const search = async (name) => {
    const res = await api.get(`/teams/search?name=${name}`);
    setTeams(res.data);
  };

  return (
    <>
      <TopBar onSearch={search} />
      <div className="layout">
        <Aside onSelect={loadLeague} />
        <ClubGrid teams={teams} onSelect={setSelected} />
      </div>
      {selected && <ClubModal id={selected} onClose={() => setSelected(null)} />}
    </>
  );
}