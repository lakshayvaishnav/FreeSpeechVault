import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="w-full flex-center flex-col bg-slate-950 h-screen absolute">
        <section className="h-[50vh] absolute top-10">
          <h1 className="head_text text-center  purple-gradient">
            Free Speech Vault
          </h1>
          <h2 className="text-center">
            <br className="max-md:hidden" />
            <span className="purple-gradient text-center text-lg font-bold">
              {" "}
              CHAIN-POWERED PETITION
            </span>
          </h2>
          <p className="desc text-center light-shadow">
            Our decentralized petition app empowers users to create, sign, and
            share petitions securely on the blockchain. Revolutionizing
            advocacy, we democratize the petitioning process for global impact
            and social change. Join us in amplifying voices and shaping
            tomorrow, one signature at a time.{" "}
          </p>
        </section>
        <div className="bg-yellow-250 z-30 bg-cyan-500 p-3 rounded-lg text-white font-bold ">
          <button onClick={() => navigate("/app")}>Create Campaign</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
