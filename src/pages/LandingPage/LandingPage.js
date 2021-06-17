import React, { useState } from "react";
import "./LandingPage.css";
import ScottyCameron from "../../assets/scotty.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LandingPage() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="landing-page">
      <div className="high-region">
        <img className="scotty" alt="" src={ScottyCameron}></img>
      </div>
      <div className="finish-section">
        <div className="finish-nav">
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
        </div>
      </div>
    </div>
  );
}
