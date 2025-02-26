const Icon = ({ size, color, shape, children }) => {
  const iconStyle = {
    fontSize: size === undefined ? "24px" : size,
    color: color === undefined ? "#000000" : color,
  };

  return (
    <i
      className={`material-icons-${shape === undefined ? "outlined" : shape}`}
      style={iconStyle}
    >
      {children}
    </i>
  );
};

export default Icon;
