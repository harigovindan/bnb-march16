import React, { useState, useEffect } from "react";
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
  ServicesWrapper,
} from "./InvestmentsElements";
import { Button } from "../ButtonElement";
import { Row, Col } from "antd";

const Investments = ({
  account,
  contract,
  networkId,
  buttonTxt,
  setButtonTxt,
  setAccount,
  setContract,
  setNetworkId,
}) => {
  const [plans, setPlans] = useState([
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
    },
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
    },
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
    },
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
    },
  ]);

  const [planValues, setPlanValues] = useState({});

  const planData = [
    {
      days: "14",
      dailyProfit: "8",
      totalProfit: "112",
      withdrawlTime: "Any Time",
    },
    {
      days: "21",
      dailyProfit: "9",
      totalProfit: "189",
      withdrawlTime: "Any Time",
    },
    {
      days: "28",
      dailyProfit: "10",
      totalProfit: "280",
      withdrawlTime: "Any Time",
    },
    {
      days: "14",
      dailyProfit: "8",
      totalProfit: "293",
      withdrawlTime: "At the end",
    },
    {
      days: "21",
      dailyProfit: "8",
      totalProfit: "503",
      withdrawlTime: "At the end",
    },
    {
      days: "28",
      dailyProfit: "8",
      totalProfit: "862",
      withdrawlTime: "At the end",
    },
  ];

  const getDate = (dt) => dt.toLocaleDateString("pt-PT");

  const handleFetchDeposits = async () => {
    if (networkId === "97") {
      let count = await contract.getUserAmountOfDeposits(account); //get total array
      count = parseInt(count._hex, 16);
      let planValues = { ...planValues };
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          const depositInfo = await contract.getUserDepositInfo(account, i); //loop to get indidivual info
          const values = {
            planNumber: depositInfo.plan,
            period: planData[depositInfo.plan].days,
            dailyProfit: parseInt(depositInfo.percent._hex, 16) / 10,
            totalProfit: planData[depositInfo.plan].totalProfit,
            start: getDate(new Date(parseFloat(depositInfo.start) * 1000)),
            end: getDate(new Date(parseFloat(depositInfo.finish) * 1000)),
          };
          planValues = {
            ...planValues,
            [`plan${i}`]: values,
          };
        }
        setPlanValues({
          ...planValues,
        });
      } else {
        setPlanValues({});
      }
    } else {
      alert("Please connect to BSC Mainnet");
    }
  };

  useEffect(() => {
    if (contract && account && networkId) {
      handleFetchDeposits();
    }
  }, [contract, account, networkId]);

  return (
    <ServicesContainer id="services">
      <ServicesH1>
        <u>Your Stakes</u>
      </ServicesH1>
      <Row gutter={[40, 40]}>
        {planValues &&
          Object.keys(planValues).length &&
          [...Array(Object.keys(planValues).length)].map((_, i) => (
            <Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}>
              <ServicesCard>
                <ServicesP>
                  Plan {planValues[`plan${i}`].planNumber + 1}
                </ServicesP>
                <ServicesData>
                  <ServicesH2>Plan </ServicesH2>
                  <ServicesH21>
                    {planValues[`plan${i}`].period} Days
                  </ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Daily Profit </ServicesH2>
                  <ServicesH21>
                    {planValues[`plan${i}`].dailyProfit}%
                  </ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total Profit </ServicesH2>
                  <ServicesH21>
                    {planValues[`plan${i}`].totalProfit}%
                  </ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Start Date & Time </ServicesH2>
                  <ServicesH21>{planValues[`plan${i}`].start}</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>End Date & Time </ServicesH2>
                  <ServicesH21>{planValues[`plan${i}`].end}</ServicesH21>
                </ServicesData>
              </ServicesCard>
            </Col>
          ))}
      </Row>
    </ServicesContainer>
  );
};

export default Investments;
