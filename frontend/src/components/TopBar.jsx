import DarkModeToggle from "./DarkModeToggle.jsx";

const TopBar = ({ onSearch }) => (
  <div className="topbar">
    <header>
      <input
        placeholder="Search club..."
        onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
      />
      <DarkModeToggle />
    </header>
  </div>
);

export default TopBar;