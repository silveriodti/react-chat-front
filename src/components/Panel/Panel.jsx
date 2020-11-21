import React from "react";
import styles from "./Panel.module.css";

const Panel = ({ selectedMeeting }) => {
  if (selectedMeeting) {
    return (
      <div className={styles.body}>
        <h4>{selectedMeeting.shortDescription}</h4>
        <p className={styles.date}>{selectedMeeting.date}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: selectedMeeting.fullDescriptionHtml,
          }}
        />
        {selectedMeeting.recordedVideoUrl && (
          <span>
            <br />
            <a
              className={styles.videoUrl}
              href={selectedMeeting.recordedVideoUrl}
              target="blank"
            >
              Clique aqui para assistir o encontro!
            </a>
          </span>
        )}
      </div>
    );
  } else {
    return <h6 className={styles.noMeetingSelected}>Selecione um encontro</h6>;
  }
};
export default Panel;
