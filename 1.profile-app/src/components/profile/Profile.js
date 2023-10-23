import React from "react";
import styles from "./Profile.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import Card from "../UI/card/Card";

const Profile = (props) => {
  return (
    <Card>
      <div className={styles.profile}>
        <img src={props.img} alt="" />
        <div className={styles["profile-content"]}>
          <h2>My Profile</h2>
          <div className={styles.text}>
            <p>Name:</p>
            <p>{props.name}</p>
          </div>
          <div className={styles.text}>
            <p>Job:</p>
            <p>{props.job}</p>
          </div>
          <div className={styles.text}>
            <p>Company:</p>
            <p>{props.company}</p>
          </div>

            <div className={styles.icons}>
              <AiOutlineTwitter color="#00ABFF"/>
              <AiOutlineGithub />
              <AiOutlineGooglePlus color="#C70202"/>
            </div>

          <div className={styles.btn}>
            <a href={props.link} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
