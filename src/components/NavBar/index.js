import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from "./NavbarElements";
import { Button1 } from "../ButtonElement";
import { ethers, Contract } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import SimpleStorage from "./../contracts/BNBBoosterMetadata.json";
import Web3 from "web3";
import { notification } from "antd";

const NavBar = ({
  buttonTxt,
  networkId,
  setButtonTxt,
  setContract,
  setAccount,
  setNetworkId
}) => {
  const blockchainNetwork = "97";
  const connectToBlockchain = async () => {
    let detectProvider = await detectEthereumProvider();
    if (detectProvider) {
      const acct = await detectProvider.request({
        method: "eth_requestAccounts"
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const networkId = await provider.send("net_version", []);
      setAccount(acct[0]);
      setButtonTxt(acct[0]);
      setNetworkId(networkId);
      const signer = provider.getSigner();
      const bnbStaker = new ethers.Contract(
        "0xe28c3faC3e33556a3bC15C5c25B5976ab0C26E33",
        SimpleStorage.output.abi,
        signer
      );
      setContract(bnbStaker);
      // let usdcBalance = await bnbStaker.developerWallet;
      // console.log(usdcBalance);
      // check();
    } else {
      notification.open({
        message: "Please install metamask"
      });
    }
  };

  const login = async () => {
    connectToBlockchain();
  };

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
      if (accounts.length === 0) {
        setButtonTxt("Connect");
        setAccount(undefined);
        setNetworkId(undefined);
      } else {
        connectToBlockchain();
        setButtonTxt(accounts[0]);
      }
    });

    window.ethereum.on("networkChanged", function (networkId) {
      setNetworkId(networkId);
      if (networkId !== "97") {
        setAccount(undefined);
        setContract(undefined);
      } else {
        connectToBlockchain();
      }
    });
  }

  return (
    <>
      <Nav>
        <Logo>BNBBoost</Logo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Audit
          </NavLink>
          <NavLink to="/" activeStyle>
            Telegram
          </NavLink>
          <NavLink to="/" activeStyle>
            Documentation
          </NavLink>
          <NavLink to="/" activeStyle>
            Contract
          </NavLink>
          <NavLink to="/" activeStyle>
            Youtube Contest
          </NavLink>
          <NavLink to="/" activeStyle>
            NFT Airdrop
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Button1
            primary="true"
            dark="true"
            className
            onClick={async () => await login()}
          >
            {buttonTxt === "Connect"
              ? "Connect"
              : buttonTxt?.substring(0, 5) + "..."}
          </Button1>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
