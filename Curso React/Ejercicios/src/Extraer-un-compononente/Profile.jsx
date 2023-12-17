import React from "react";
import { getImageUrl } from "./utils";

const Profile = ({
  imgId,
  name,
  profession,
  awards,
  discovered,
  imageSize = 70,
}) => {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profesión: </b> {profession}
        </li>
        <li>
          <b>Premios: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Descubrió: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
};

export default Profile;
