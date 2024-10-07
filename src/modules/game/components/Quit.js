import React from "react";
import { IconButton, Fab } from "@mui/material";
import { ExitToApp as IconQuit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "../css/hud.module.scss";

const Quit = ({ resetGame }) => (
  <div className={css.btnQuit}>
    <Fab>
      <IconButton component={Link} to="/" onClick={resetGame}>
        <IconQuit />
      </IconButton>
    </Fab>
  </div>
);
Quit.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default Quit;
