import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import mobin from "../../../asetss/mobin.jpg";
import "./Sitebar.css";

const Sitebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const user = [...Array(5)].map((_, i) => ({
      avatar: faker.image.avatar(),
      userName: faker.internet.userName(),
      id: i,
    }));
    setUsers(user);
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center justify-content-center px-3 mb-3">
        <img className="sitebar__profile-img" src={mobin} alt="mobin" />
        <div className="d-flex flex-column flex-fill ms-3">
          <p className="mb-0 text-1 fw-bold">mobin--ma</p>
          <p className="mb-0 text-1">mobin madadi</p>
        </div>
        <button className="mb-0 sitebar__butoon border-0">Switch</button>
      </div>
      <div className="px-3 d-flex align-items-center justify-content-between">
        <p className="mb-0 text-1 fw-bold text-secondary-1">
          Suggestions For You
        </p>
        <p className="mb-0 text-1 fw-bold">See All</p>
      </div>
      <div className="px-4">
        {users.map((profile) => (
          <div className="d-flex align-items-center justify-content-between mt-2" key={profile.id} >
            <img className="profiles-img" src={profile.avatar} alt="user" />
            <div className="flex-fill ms-3">
              <p className="m-0 w-50 text-1 fw-bold truncate">
                {profile.userName}
              </p>
              <span className="text-1 text-secondary-1">Follows you</span>
            </div>
            <button className="sitebar__butoon border-0">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitebar;
