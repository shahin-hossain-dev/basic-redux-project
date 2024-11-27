import React from "react";

const Button = ({ children, type, handler }) => {
  const styles =
    type === "danger"
      ? "bg-red-500  text-white px-3 py-1 shadow rounded"
      : "bg-sky-500 text-white px-3 py-1 shadow rounded";

  return (
    <button className={styles} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
