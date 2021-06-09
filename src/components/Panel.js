export const Panel = ({ url, text, active, makePanelActive, idx }) => {
  const handleClick = () => {
    makePanelActive(idx);
  };

  return (
    <div
      className={`panel ${active ? "active" : null}`}
      style={{
        backgroundImage: `url(
              ${url}
            )`,
      }}
      onClick={handleClick}
    >
      <h3>{text}</h3>
    </div>
  );
};
