import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import HeroSection from "../components/HeroSection";
import HeaderSection from "../components/HeaderSection";
import StakingSection from "../components/StakingSection";
// import InfoSection from "../components/InfoSection";
import Investments from "../components/Investments";
// import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
const Home = () => {
  const [buttonTxt, setButtonTxt] = useState("Connect");

  const [account, setAccount] = useState(undefined);

  const [contract, setContract] = useState(undefined);

  const [networkId, setNetworkId] = useState(undefined);

  const props = {
    account,
    contract,
    networkId,
    buttonTxt,
    setButtonTxt,
    setAccount,
    setContract,
    setNetworkId
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleConnect = () => {};

  return (
    <Router>
      {/* <SideBar isOpen={isOpen} toggle={toggle} /> */}
      <NavBar toggle={toggle} onClickConnect={handleConnect} {...props} />
      {/* <HeroSection /> */}
      <HeaderSection />
      <Services {...props} />
      <StakingSection {...props} />
      <Investments {...props} />
      <Footer />
    </Router>
  );
};

export default Home;
