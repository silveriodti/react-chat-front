import React from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem/ListItem";

const List = ({ meetingList, handleOnClick, title }) => {
  return (
    <span>
      <h4 className={styles.header}>{title}</h4>
      <ul className={styles.list}>
        {meetingList.map((meeting, index) => {
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
