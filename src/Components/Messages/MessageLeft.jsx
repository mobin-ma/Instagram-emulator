import { ChevronDownIcon, PencilAltIcon } from "@heroicons/react/outline";
import React from "react";
import "./Messages.css";

const MessageLeft = () => {
  const contacts = [
    {
      id: 1,
      userName: "ail-na",
      userImage:
        "https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png",
    },
    {
      id: 2,
      userName: "mobina-m",
      userImage: "https://cdn-icons-png.flaticon.com/512/219/219961.png",
    },
    {
      id: 3,
      userName: "mina-.s",
      userImage: "https://cdn-icons-png.flaticon.com/512/219/219961.png",
    },
    {
      id: 4,
      userName: "hasan-km",
      userImage:
        "https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png",
    },
    {
      id: 5,
      userName: "neda--a",
      userImage: "https://cdn-icons-png.flaticon.com/512/219/219961.png",
    },
    {
      id: 6,
      userName: "mehdi--kh",
      userImage:
        "https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png",
    },
    {
      id: 7,
      userName: "mohadeseh-ab",
      userImage: "https://cdn-icons-png.flaticon.com/512/219/219961.png",
    },
    {
        id: 8,
        userName: 'mohamad-mahdi',
        userImage: 'https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png',
    },
    {
        id: 9,
        userName: 'niloo-md',
        userImage: 'https://cdn-icons-png.flaticon.com/512/219/219961.png',
    }
  ];
  return (
    <div className="overflow-hidden h-100">
      {/* header */}
      <div className="d-flex align-items-center justify-content-center border-bottom border-gray p-3">
        <div className="d-flex gap-1 ms-5">
          <p className="mb-0 ms-4 fw-bold">mobin--ma</p>
          <ChevronDownIcon className="chevron-down-icon" />
        </div>
        <PencilAltIcon className="pencil-icon ms-auto" />
      </div>

      {/* PRIMARY & GENERAL */}
      <div className="py-3 border-bottom border-gray position-relative">
        <div className="d-flex gap-5  position-absolute bottom-0">
          <p className="mb-0 ms-3 text-1 pb-1 border-bottom border-dark">
            PRIMARY
          </p>
          <p className="mb-0 text-1 text-secondary-1">GENERAL</p>
        </div>
      </div>

      {/* contacts */}
      <div className="h-100 overflow-auto scroll d-flex d-sm-block">
        {contacts.map((profile) => (
          <div
            key={profile.id}
            className="d-flex align-items-center flex-sm-row flex-column mt-3 mb-sm-3 px-3"
          >
            <div className="position-relative me-3">
              <img
                className="contact__img"
                src={profile.userImage}
                alt="user"
              />
              <div className="online"></div>
            </div>
            <div>
              <p className="mb-0 fw-bold truncate">{profile.userName}</p>
              <p className="mb-0 text-1">Active</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageLeft;
