import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
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
  ServicesWrapper
} from "./HeaderElements";

import { Button } from "../ButtonElement";
import axios from "axios";
const HeaderSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Row gutter={[40, 20]} align="middle">
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <HeroP>
              The BNBBoost smart-contract provides the opportunity to invest any
              amount of BNB (from 0.1 BNB) in the contract.
            </HeroP>
            <HeroP>
              Get 112% to 862% return on investment in 14 to 28 days (from 8% to
              10% daily).
            </HeroP>
            <HeroP>
              <b>
                <u>Minimum deposit:</u>
              </b>{" "}
              0.1 BNB and no maximal limit.
            </HeroP>
            <HeroP>
              <b>
                <u>Important notes:</u>
              </b>{" "}
            </HeroP>
            <HeroP>1. Daily returns are compounded for locked-in plans.</HeroP>
            <HeroP>
              2. If users don't make a withdrawal everyday, will get extra bonus
              - hold bonus. Hold-bonus increases 0.1% per day, Max is 1.5% (only
              for unlocked plan).
            </HeroP>
            <HeroP>
              3. Users can share referral links to earn bonus (at least 1
              deposit to active the link). Referral bonuses will be
              automatically sent to the wallet.
            </HeroP>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics>
              <ServicesCard>
                <ServicesP>BNBBoost Data</ServicesP>
                <ServicesData>
                  <ServicesH2>Total Staked </ServicesH2>
                  <ServicesH21>4459751.828</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total Users</ServicesH2>
                  <ServicesH21>1000</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Ref Rewards</ServicesH2>
                  <ServicesH21>435490.049</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Contract Balance</ServicesH2>
                  <ServicesH21>435490 BNB</ServicesH21>
                </ServicesData>
              </ServicesCard>
            </HeroStatistics>
          </Col>
        </Row>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeaderSection;

// getContractInfo:
// curl -X 'POST' \
//   'https://deep-index.moralis.io/api/v2/0xe28c3faC3e33556a3bC15C5c25B5976ab0C26E33/function?chain=bsc%20testnet&function_name=getContractInfo' \
//   -H 'accept: application/json' \
//   -H 'X-API-Key: 1W7yw0Y4MzO9vP4YulgrzWQghmd841N3Eej44g2mmPNg67CctOHtvq3JgwWtwwuy' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "abi": [{
// 				"constant": true,
// 				"inputs": [],
// 				"name": "getContractInfo",
// 				"outputs": [
// 					{
// 						"name": "",
// 						"type": "uint256"
// 					},
// 					{
// 						"name": "",
// 						"type": "uint256"
// 					},
// 					{
// 						"name": "",
// 						"type": "uint256"
// 					}
// 				],
// 				"payable": false,
// 				"stateMutability": "view",
// 				"type": "function"
// 			}],
//   "params": {}
// }'

// getContractBalance:
// curl -X 'POST' \
//   'https://deep-index.moralis.io/api/v2/0xe28c3faC3e33556a3bC15C5c25B5976ab0C26E33/function?chain=bsc%20testnet&function_name=getContractBalance' \
//   -H 'accept: application/json' \
//   -H 'X-API-Key: 1W7yw0Y4MzO9vP4YulgrzWQghmd841N3Eej44g2mmPNg67CctOHtvq3JgwWtwwuy' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "abi": [{
// 				"constant": true,
// 				"inputs": [],
// 				"name": "getContractBalance",
// 				"outputs": [
// 					{
// 						"name": "",
// 						"type": "uint256"
// 					}
// 				],
// 				"payable": false,
// 				"stateMutability": "view",
// 				"type": "function"
// 			}],
//   "params": {}
// }'
