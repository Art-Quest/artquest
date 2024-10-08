import React from "react";
import PropTypes from "prop-types";
import css from "../css/hud.module.scss";
import toast from "react-hot-toast";
import { AppContext } from "../../../Context";

const ScoreDisp = ({ score }) => {
  const { getSmartContract, setScore } = React.useContext(AppContext);
  const [load, setLoad] = React.useState(false);

  const handleClaim = async () => {
    try {
      setLoad(true);
      const contract = await getSmartContract();
      const claim = await contract
        .addXp(window.tronWeb.defaultAddress.base58, BigInt(score))
        .send({
          from: window.tronWeb.defaultAddress.base58,
          shouldPollResponse: false,
        });

      if (claim) {
        toast.success("XP Claimed Successfully");
        setScore(0);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  };
  return (
    <div className={css.scoreDisp}>
      <button
        onClick={handleClaim}
        className="px-3 py-3 bg-gray-600 mr-3 rounded-lg"
      >
        {load ? "claiming..." : "Claim XP"}
      </button>
      XP: {score}
    </div>
  );
};

ScoreDisp.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreDisp;
