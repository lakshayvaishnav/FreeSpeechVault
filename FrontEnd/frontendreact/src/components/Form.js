import React, { useState } from "react";
import Loader from "./Loader";
import "../index.css";
const Form = (props) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    console.log("handle click");
    e.preventDefault();
    console.log(campaign.title, campaign.description);
    props.setLoading(true);
    if (props.Loading) {
      alert("loading");
    }
    props.createNewPetition(campaign.title, campaign.description);
    setCampaign({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
    console.log("campaign title : ", campaign.title, campaign.description);
  };

  const transaction = {
    hash: props.transaction.hash,
    from: props.transaction.from,
    to: props.transaction.to,

    url: `https://sepolia.etherscan.io/tx/${props.transaction.hash}`,
    campaignurl: `http://localhost:3000/${props.campaignAddress}`,
    campaignurlexplorer: `https://sepolia.etherscan.io/${props.campaignAddress}`,
  };

  const renderAlert = () => {
    if (props.walletConnected) {
      if (props.loading) {
        return (
          <div className="relative">
            <Loader />
          </div>
        );
      } else {
        return (
          <div
            className="mb-20 bg-green-500 h-[40px] text-center text-xl  items-center"
            role="alert"
          >
            Success, Your wallet is connected! Create Your Campaign Below.
            {console.log(props.campaignAddress)}
          </div>
        );
      }
    } else {
      return (
        <div
          className=" text-center bg-red-500 mb-20 h-[40px] text-xl "
          role="alert"
        >
          Please connect your metamask wallet and switch to Sepolia Network to
          create campaign!{" "}
        </div>
      );
    }
  };

  const displayLinks = () => {
    if (transaction.hash !== "") {
      return (
        <div className=" my-3 flex flex-col glassmorphism2 absolute left-[900px]">
          <div className="container mb-5  text-center  items-center w-full">
            <a
              target="_blank"
              rel="noreferrer"
              className="link"
              href={transaction.campaignurl}
            >
              <span className="z-10">Campaign Link</span>
            </a>
          </div>
          <div className="container mb-5  text-center  items-center w-full">
            <a
              target="_blank"
              rel="noreferrer"
              className="link"
              href={transaction.url}
            >
              <span className="z-10">View Transaction On Etherscan</span>
            </a>
          </div>
          <div className="container mb-5  text-center  items-center w-full">
            <a
              href={transaction.campaignurlexplorer}
              rel="noreferrer"
              target="_blank"
              className="link"
            >
              <span className="z-10">
                View Petition Contract On Etherscanpet
              </span>
            </a>
          </div>
          <div className="container my-3 text-[#FF69B4] ">
            <span className="text-[#FFD700]">Creator :</span> {transaction.from}
          </div>
          <div className="container my-3 text-[#FF69B4]">
            <span className="text-[#FFD700]">
              Your Petition Contract Address:
            </span>{" "}
            {props.campaignAddress}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-black h-screen text-white  w-screen">
      {renderAlert()}
      <div className="container  p-10 ml-[100px] w-[800px] h-[500px] flex justify-start flex-col glassmorphism2">
        <h1 className="text-center text-2xl light-shadow">
          {" "}
          Create A New Petition
        </h1>
        <form>
          <div className="mb-3 ">
            <div className=" gap-10 mb-4 mt-10 text-xl ">
              <label htmlFor="title" className="form-label">
                Petition Title :
              </label>{" "}
            </div>
            <textarea
              id="title"
              name="title"
              value={campaign.title}
              onChange={onChange}
              className="block w-full h-10 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <div className="mb-3">
            <div className="mb-4 text-xl">
              <label htmlFor="description" className="form-label">
                Petiton Description :
              </label>
            </div>
            <textarea
              id="description"
              name="description"
              value={campaign.description}
              onChange={onChange}
              className="block w-full h-32 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div
            disabled={
              campaign.title.length < 5 || campaign.description.length < 5
            }
            type="submit"
            className=" z-10 hover:cursor-pointer link"
            onClick={handleClick}
          >
            <span className="z-10">Create Campaign</span>
          </div>
        </form>
        {displayLinks()}
      </div>
    </div>
  );
};

export default Form;
