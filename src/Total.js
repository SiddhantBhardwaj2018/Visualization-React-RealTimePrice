import React from "react";

export default function Total({ title, value }) {
  return (
    <div style={styles.row}>
      <h4 style={styles.title}>{title}:</h4>
      <h4 style={styles.value}>{value}</h4>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 350,
    margin: "10px auto",
  },
  title: {
    fontWeight: 600,
    margin: 0,
  },
  value: {
    color: "#f7931a",
    fontSize: 24,
    margin: 0,
  },
};