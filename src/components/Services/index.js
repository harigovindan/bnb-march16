import React, { useState } from "react";
import Icon1 from "../../images/1.svg";
import Icon2 from "../../images/2.svg";
import Icon3 from "../../images/3.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesH21,
  ServicesIcon,
  ServicesData,
  ServicesP,
  Input,
  ServicesWrapper
} from "./ServicesElements";
import { Button } from "../ButtonElement";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { ethers, Contract, notification } from "ethers";

const Services = ({
  account,
  contract,
  networkId,
  buttonTxt,
  setButtonTxt,
  setAccount,
  setContract,
  setNetworkId
}) => {
  const developerWalletAddress = "0x764E3ba8f29E228b8C24C2D12A255765D7680E7a";
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const ref = searchParams.get("ref");

  const [stakedAmounts, setStakedAmounts] = useState({
    plan0: 0,
    plan1: 0,
    plan2: 0,
    plan3: 0,
    plan4: 0,
    plan5: 0
  });

  const handleStake = async (value, planNumber) => {
    const searchParams = new URLSearchParams(history.location.search);
    const ref = searchParams.get("ref");
    if (contract && account) {
      const options = { value: ethers.utils.parseEther(value.toString()) };
      const reciept = await contract.invest(
        // !!ref ? developerWalletAddress : ref,
        "0x820756c16b9117F17bB2eE190A165abD773B2545",
        planNumber,
        options
      );
      // notification["success"]({
      //   message:
      //     "Your investment is placed. Please refresh once transaction completes."
      // });
    } else {
      console.log("connect to any web3 wallet");
    }
  };

  const plans = [
    {
      days: "14",
      dailyProfit: "8",
      totalProfit: "112",
      withdrawlTime: "Any Time"
    },
    {
      days: "21",
      dailyProfit: "9",
      totalProfit: "189",
      withdrawlTime: "Any Time"
    },
    {
      days: "28",
      dailyProfit: "10",
      totalProfit: "280",
      withdrawlTime: "Any Time"
    },
    {
      days: "14",
      dailyProfit: "8",
      totalProfit: "293",
      withdrawlTime: "At the end"
    },
    {
      days: "21",
      dailyProfit: "8",
      totalProfit: "503",
      withdrawlTime: "At the end"
    },
    {
      days: "28",
      dailyProfit: "8",
      totalProfit: "862",
      withdrawlTime: "At the end"
    }
  ];

  return (
    <ServicesContainer id="services">
      <ServicesH1>
        <u>Our Plans</u>
      </ServicesH1>
      <ServicesWrapper>
        <Row gutter={[40, 40]}>
          {plans?.map((plan, i) => (
            <Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}>
              <ServicesCard>
                <ServicesP>
                  <b>Plan {i + 1}</b>
                </ServicesP>
                <ServicesData>
                  <ServicesH2>Plan </ServicesH2>
                  <ServicesH21>{plan?.days} Days</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Daily Profit </ServicesH2>
                  <ServicesH21>{plan?.dailyProfit}%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total Profit </ServicesH2>
                  <ServicesH21>{plan?.totalProfit}%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Withdrawal </ServicesH2>
                  <ServicesH21>{plan?.withdrawlTime}</ServicesH21>
                </ServicesData>
                <Input
                  type="number"
                  placeholder="Enter Qty"
                  min="0.1"
                  onChange={(e) => {
                    const { value } = e.target;
                    setStakedAmounts({
                      ...stakedAmounts,
                      [`plan${i}`]: value
                    });
                  }}
                />
                <div></div>
                <Button
                  to="signup"
                  // primary="true"
                  // dark="true"
                  // disabled={
                  //   !stakedAmounts[`plan${i}`] ||
                  //   stakedAmounts[`plan${i}`] < 0.1
                  // }
                  onClick={() => handleStake(stakedAmounts[`plan${i}`], i)}
                >
                  Stake
                </Button>
              </ServicesCard>
            </Col>
          ))}
        </Row>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
