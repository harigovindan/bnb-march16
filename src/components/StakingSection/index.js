import React, { useState, useEffect } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  Input,
  HeroStatistics,
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesH21,
  ServicesIcon,
  ServicesData,
  ServicesP,
  ServicesWrapper,
  ServicesRef,
} from "./StakingElements";
import { Row, Col, notification } from "antd";
import { Button } from "../ButtonElement";

const StakingSection = ({
  account,
  contract,
  networkId,
  buttonTxt,
  setButtonTxt,
  setAccount,
  setContract,
  setNetworkId,
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [walletAddress, setWalletAddress] = useState(
    "0x141A8975EB3553749500891Eb4f7cd685EA2fE59"
  );

  const [values, setValues] = useState({
    deposits: "****",
    dividends: "****",
    withdrawn: "****",
    holdBonus: "****",
    referralAmount: "****",
    referralCount: "****",
  });

  const handleWithdraw = async () => {
    if (contract) {
      await contract.withdraw().then((transaction) => {
        console.log(transaction);
        setTimeout(() => {
          handleFetchValues();
        }, 10000);

        // alert("Send finished!");
      });
    }
  };

  const round = (number) => {
    return !Number(number)
      ? number
      : number
      ? Math.round(Number(number) * 10000) / 10000
      : 0;
  };

  const handleFetchValues = async () => {
    //Your total deposits
    const deposits = await contract.getUserTotalDeposits(account);
    //available for withdrawal
    const dividends = await contract.getUserDividends(account);

    //withdrawn
    const withdrawn = await contract.getUserWithdrawn(account);

    //Hold bonus
    const holdBonus = await contract.getUserPercentRate(account);
    // if (holdBonus == parseInt(holdBonus))
    //total referral earned
    const referralAmount = await contract.getUserReferralTotalBonus(account);

    //total referral count
    const referralCount = await contract.getUserDownlineCount(account);

    setValues({
      deposits: parseInt(deposits._hex, 16) / Math.pow(10, 18),
      dividends: parseInt(dividends._hex, 16) / Math.pow(10, 18),
      withdrawn: parseInt(withdrawn._hex, 16) / Math.pow(10, 18),
      holdBonus: parseFloat(holdBonus._hex, 16),
      referralAmount: parseInt(referralAmount._hex, 16) / Math.pow(10, 18),
      referralCount: parseInt(referralCount._hex, 16),
    });
  };

  useEffect(() => {
    if (account && contract && networkId) {
      handleFetchValues();
    } else {
      setValues({
        deposits: "****",
        dividends: "****",
        withdrawn: "****",
        holdBonus: "****",
        referralAmount: "****",
        referralCount: "****",
      });
    }
  }, [account, contract, networkId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (account && contract && networkId) {
        handleFetchValues();
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <ServicesH1>
          <u>Your Investments</u>
        </ServicesH1>
        <Row gutter={[40, 20]} type="flex">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics style={{ height: "100%" }}>
              <ServicesCard style={{ height: "100%" }}>
                <ServicesData>
                  <ServicesH2>Your total deposits</ServicesH2>
                  <ServicesH21>{values?.deposits ?? 0} BNB</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Available for withdrawal</ServicesH2>
                  <ServicesH21>{round(values?.dividends)} BNB</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Withdrawn</ServicesH2>
                  <ServicesH21>{round(values?.withdrawn)} BNB</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Hold Bonus</ServicesH2>
                  <ServicesH21>{values?.holdBonus ?? 0}%</ServicesH21>
                </ServicesData>
                <Button
                  to="signup"
                  // primary="true"
                  // dark="true"
                  onClick={handleWithdraw}
                  disabled={!values?.dividends}
                >
                  Withdraw
                </Button>
              </ServicesCard>
            </HeroStatistics>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics style={{ height: "100%" }}>
              <ServicesCard style={{ height: "100%" }}>
                <ServicesData>
                  <div style={{ display: "block", textAlign: "center" }}>
                    Your referral link is
                  </div>
                  <Input
                    id="Search"
                    type="search"
                    placeholder="Your referral link"
                    value={
                      "https://bscstaker.io?ref=" + (account ?? walletAddress)
                    }
                  />

                  <Button
                    style={{
                      display: "inline-block",
                      width: "calc(30% - 5px)",
                      padding: "5px",
                      marginLeft: "5px",
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "https://bscstaker.io?ref=" + (account ?? walletAddress)
                      );
                      notification["success"]({
                        message: "Referral link copied to clipboard!",
                      });
                    }}
                  >
                    Copy
                  </Button>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total referral earned</ServicesH2>
                  <ServicesH21>{values?.referralAmount ?? 0} BNB</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total referral count</ServicesH2>
                  <ServicesH21>{values?.referralCount}</ServicesH21>
                </ServicesData>
                <ServicesData
                  style={{ fontWeight: "bold", fontSize: "1.15rem" }}
                >
                  <div>Deposit Atleast Once To Activate Referral Rewards</div>
                </ServicesData>
              </ServicesCard>
            </HeroStatistics>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics style={{ height: "100%" }}>
              <ServicesCard style={{ height: "100%" }}>
                <ServicesP>Earn BNB By Inviting People To BNBBoost</ServicesP>
                <ServicesData>
                  <ServicesH2>Level 1</ServicesH2>
                  <ServicesH21>5%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Level 2</ServicesH2>
                  <ServicesH21>4%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Level 3</ServicesH2>
                  <ServicesH21>3%</ServicesH21>
                </ServicesData>
              </ServicesCard>
            </HeroStatistics>
          </Col>
        </Row>
      </HeroContent>
    </HeroContainer>
  );
};

export default StakingSection;
