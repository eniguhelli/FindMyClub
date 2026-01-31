const TopBar = ({ onSearch }) => (
  <div className="topbar">
    <header>
      <input
        placeholder="Search club..."
        onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
      />
    </header>
  </div>
);

export default TopBar;