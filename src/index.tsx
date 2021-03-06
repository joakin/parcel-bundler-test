import React from "react";
import { render } from "react-dom";
import styles from "./App.css";

const root = document.getElementById("root");
if (root) render(<App txt="hi" />, root);

console.log(styles);

function App({ txt }: { txt: string }) {
  return (
    <>
      <h1 className={styles.title}>Hello world</h1>
      <p>This is from parcel</p>
      <p>Root says {txt}</p>
    </>
  );
}
