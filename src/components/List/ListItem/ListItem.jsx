import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ListItem.module.css";

const ListItem = ({ content, handleOnClick }) => {
  return (
    <li>
      <Button
        className={styles.listItem}
        onClick={() => {
          handleOnClick(content.id);
        }}
        variant="link"
      >{`${content.date} - ${content.shortDescription}`}</Button>
    </li>
  );
};

export default ListItem;
