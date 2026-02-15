import { useState } from "react";
import api from "../services/api";
import Aside from "../components/Aside";
import ClubGrid from "../components/ClubGrid";
import TopBar from "../components/TopBar";
import ClubModal from "../pages/ClubModal";
import Spinner from "../components/Spinner";

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadLeague = async (code) => {
    try {
      setLoading(true);
      const res = await api.get(`/leagues/${code}/teams`);
      setTeams(res.data.filter(Boolean));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const search = async (name) => {
    try {
      setLoading(true);
      const res = await api.get(`/clubs/search`, { params: { name } });
      setTeams(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar onSearch={search} />
      <div className="layout">
        <Aside onSelect={loadLeague} />
        <main>
          {loading ? (
            <Spinner />
          ) : teams.length === 0 ? (
            <div className="home-empty">
              <h1>FindMyClub</h1>
              <p>Select a league or search for a team to get started</p>

              <div className="home-actions">
                <div className="home-card">
                  <h3>Browse Leagues</h3>
                  <p>Pick a league from the sidebar</p>
                </div>

                <div className="home-card">
                  <h3>Search Clubs</h3>
                  <p>Use the search bar above to find a club by name</p>
                </div>
              </div>
            </div>
          ) : (
            <ClubGrid teams={teams} onSelect={setSelected} />
          )}
        </main>
      </div>

      {selected && (
        <ClubModal id={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}