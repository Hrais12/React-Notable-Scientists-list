import React from "react";

function Profile({ profiles }) {
  return (
    <div>
      <h1>Notable Scientists</h1>

      {profiles.map((profile) => (
        <section className="profile">
          <h2>{profile.name}</h2>
          <img
            className="avatar"
            src={profile.image}
            alt={profile.name}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profession: </b> {profile.profession}
            </li>
            <li>
              <b>Awards: {profile.awards.length}</b>
              {profile.awards.join(", ")}
            </li>
            <li>
              <b>Discovered: </b>
              {profile.discovered}
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Profile;
