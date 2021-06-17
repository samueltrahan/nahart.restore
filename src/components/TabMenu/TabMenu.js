import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScottyCameronPutterFace from '../../assets/scotty-cameron-putterface.jpeg';
import TaylorMadePutterFace from '../../assets/taylormade-putterface.jpeg';
import PingPutterFace from '../../assets/ping-putterface.jpeg';

function TabMenu(props) {
    const { children, value, index, ...other } = props;


    return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabMenu.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1200,
    flexGrow: 1,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar className="tab-menu" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Scotty Cameron" {...a11yProps(0)} />
          <Tab label="TaylorMade" {...a11yProps(1)} />
          <Tab label="Ping" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabMenu value={value} index={0} dir={theme.direction}>
          <img className="scotty-cameron" src={ScottyCameronPutterFace} alt=""></img>
        </TabMenu>
        <TabMenu value={value} index={1} dir={theme.direction}>
          <img className="taylor-made" src={TaylorMadePutterFace} alt=""></img>
        </TabMenu>
        <TabMenu value={value} index={2} dir={theme.direction}>
          <img src={PingPutterFace} alt=""></img>
        </TabMenu>
      </SwipeableViews>
    </div>
  );
}
