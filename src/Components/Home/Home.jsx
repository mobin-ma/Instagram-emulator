import React from "react";
import Posts from "./Posts";
import Sitebar from "./Sitebar";
import Stories from "./Stories";
import "./Home.css";

const Home = () => {
  return (
    <div className="home mt-4 mx-aotu d-flex gap-3">
      {/* stories & Posts */}
      <section className="col-sm-12 col-md-8 d-flex justify-content-center d-flex flex-column mt-5 mx-3 overflow-hidden">
        <Stories />
        <Posts />
      </section>

      {/* Sitebar */}
      <section className="col-4 d-none d-md-block mt-5">
        <Sitebar />
      </section>
    </div>
  );
};

export default Home;
