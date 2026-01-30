const TopBar = ({ onSearch }) => (
  <header>
    <input
      placeholder="Search club..."
      onKeyDown={(e) =>
        e.key === "Enter" && onSearch(e.target.value)
      }
    />
  </header>
);

export default TopBar;