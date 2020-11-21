import React from "react";
import { Meeting } from "../../interfaces/Meeting";
import styles from "./List.module.css";
import ListItem from "./ListItem/ListItem";

interface Props {
  meetingList: Array<Meeting>;
  handleOnClick: Function;
  title: String;
}

const List = ({ meetingList, handleOnClick, title }: Props): JSX.Element => {
  return (
    <span>
      <h4 className={styles.header}>{title}</h4>
      <ul className={styles.list}>
        {meetingList.map((meeting: Meeting, index: number) => {
          return (
            <ListItem
              content={meeting}
              handleOnClick={handleOnClick}
              key={index}
            />
          );
        })}
      </ul>
    </span>
  );
};

export default List;
