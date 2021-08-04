import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Overview from "../Overview/Overview";
import DataTable from "../DataTable/DataTable";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../../redux/slices/globalSlice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& > header": {
      // backgroundColor: "none",
      boxShadow: "none",
    },
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-end",
      // color: "#0093D5",
    },
    "& button": {
      outline: "none",
    },
  },
}));
function TabContent(themeMode) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalActions.loadingPage(true));
    setTimeout(() => {
      dispatch(GlobalActions.loadingPage(false));
    }, 2000);
  }, []);

  const handleChange = (event, newValue) => {
    dispatch(GlobalActions.loadingPage(true));
    setTimeout(() => {
      dispatch(GlobalActions.loadingPage(false));
    }, 2000);
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Data Table" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataTable />
      </TabPanel>
    </div>
  );
}

export default TabContent;
