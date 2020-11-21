import React from "react";
import { Button } from "react-bootstrap";
import { Meeting } from "../../../interfaces/Meeting";
import styles from "./ListItem.module.css";

interface Props {
  content: Meeting;
  handleOnClick: Function;
}

const ListItem = ({ content, handleOnClick }: Props): JSX.Element => {
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
