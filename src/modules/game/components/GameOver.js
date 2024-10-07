import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // useNavigate instead of withRouter
import PropTypes from "prop-types";
import css from "../css/gameover.module.scss";

const GameOver = ({ resetGame }) => {
  const navigate = useNavigate(); // useNavigate replaces history
  const bgImage = process.env.PUBLIC_URL + "/images/mac-and-cheese.jpg";

  const handleReturnClick = () => {
    navigate("/"); // navigate to the home page
    resetGame();
  };

  return (
    <Dialog
      open
      className={css.gameOver}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <DialogTitle className={css.title}>YOU DID IT!</DialogTitle>
      <DialogContent className={css.content}>
        You found all the noodles. Now it&apos;s time to sit down and have
        lunch! You live to adventure another day!
      </DialogContent>
      <DialogActions className={css.actions}>
        <Button
          onClick={handleReturnClick}
          variant="outlined"
          className={css.btn}
        >
          RETURN
        </Button>
      </DialogActions>
    </Dialog>
  );
};

GameOver.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default GameOver;
