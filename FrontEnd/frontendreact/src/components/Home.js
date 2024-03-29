import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { Contract } from "ethers"; // Removed unnecessary import 'providers'
import Form from "./Form";
import { DEPETITION_CONTRACT_ADDRESS, abi } from "./constants";

const Home = (props) => {
  const { walletConnected, web3ModalRef, getProviderOrSigner, connectWallet } =
    props;

  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [campaignAddress, setCampaignAddress] = useState("");
  const [campaign, setCampaign] = useState({
    hash: "",
    from: "",
    to: "",
  });

  const createNewPetition = async (title, description) => {
    try {
      const signer = await getProviderOrSigner(true);
      const depetitionContract = new Contract(
        DEPETITION_CONTRACT_ADDRESS,
        abi,
        signer
      );

      const tx = await depetitionContract.createNewPetition(title, description);
      setLoading(true);
      await tx.wait();
      setLoading(false);
      setCampaign({ hash: tx.hash, from: tx.from, to: tx.to });
      console.log("tx : ", tx);
      console.log("tx hash : ", tx.hash);
      console.log("this is the campaign : ", campaign);
      alert("new petition created");
      await returnAllPetition();
    } catch (err) {
      console.error(err);
    }
  };

  const returnAllPetition = async () => {
    try {
      const provider = await getProviderOrSigner();
      const depetitionContract = new Contract(
        DEPETITION_CONTRACT_ADDRESS,
        abi,
        provider
      );

      const addresses = await depetitionContract.returnAllPetitiono();
      console.log(addresses);
      setAddresses(addresses);

      setCampaignAddress(addresses[addresses.length - 1]);
      console.log(addresses.length, campaignAddress);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
      returnAllPetition();
    }
  }, [walletConnected]);

  console.log(walletConnected);

  return (
    <>
      <div>
        <Form
          createNewPetition={createNewPetition}
          walletConnected={walletConnected}
          loading={loading}
          setLoading={setLoading}
          connectWallet={connectWallet}
          transaction={campaign}
          campaignAddress={campaignAddress}
          returnAllPetition={returnAllPetition}
        />
      </div>
    </>
  );
};

export default Home;
