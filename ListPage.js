import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import {
  DesktopMac,
  LaptopMac,
  PhoneAndroid,
  PhoneIphone,
  CloudDownload,
  Save as SaveIcon,
} from "@material-ui/icons";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(deviceName, description) {
  return { deviceName, description };
}

const rows = [
  createData("Laptop 1", "Test 1222423442342"),
  createData("Mobile 1", "Test 55656565"),
  createData("iPhone 1", "Test 957545"),
  createData("Android 1", "Test 8888888"),
  createData("Desktop 1", "Test 1111111111")
];

const useStyles = (theme => ({
  root: {},
  formControl: {
    width: "100%"
  },
  clearPadding: {
    paddingLeft: 0,
    paddingRight: 0
  },
  filterHeader: {
    ...this.clearPadding,
    textAlign: "center"
  },
  deviceName: {
    paddingLeft: 10,
    paddingRight: 0,
    whiteSpace: 'nowrap',
  },
  deviceIcon: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));
class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipaddress: "",
      hostname: "",
      qidcve: "",
      dropdown: ""
    };
  }
  handleChange = (event, value) => {
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  getDeviceIcon = deviceName => {
    if (deviceName.indexOf("Desktop ") > -1) {
      return <DesktopMac />;
    } else if (deviceName.indexOf("Laptop ") > -1) {
      return <LaptopMac />;
    } else if (deviceName.indexOf("Android ") > -1 || deviceName.indexOf("Mobile ") > -1) {
      return <PhoneAndroid />;
    } else if (deviceName.indexOf("iPhone ") > -1) {
      return <PhoneIphone />;
    }
  };
  render() {
    const { classes } = this.props;
    const state = this.state;
    return (
      <div className={classes.root}>
        <Container fixed maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={3} style={{ height: "100vh" }}>
              <form className={classes.root} noValidate>
                <ListItem divider className={classes.filterHeader}>
                  <ListItemText primary="General" />
                </ListItem>
                <Divider />
                <List component="div" aria-label="mailbox folders">
                  <ListItem divider className={classes.clearPadding}>
                    <TextField
                      name="ipaddress"
                      label="IP Address"
                      variant="outlined"
                      color="secondary"
                      value={state.ipaddress}
                      onChange={this.handleChange}
                    />
                  </ListItem>
                  <ListItem divider className={classes.clearPadding}>
                    <TextField
                      name="hostname"
                      label="Host Name"
                      variant="outlined"
                      value={state.hostname}
                      onChange={this.handleChange}
                      color="secondary"
                    />
                  </ListItem>
                  <ListItem divider className={classes.clearPadding}>
                    <TextField
                      name="qidcve"
                      label="QID / CVE"
                      variant="outlined"
                      value={state.qidcve}
                      color="secondary"
                      onChange={this.handleChange}
                    />
                  </ListItem>
                  <ListItem divider className={classes.clearPadding}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        name="dropdown"
                        value={10}
                        color="secondary"
                        value={state.dropdown}
                        onChange={this.handleChange}
                        label="dropdown"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </ListItem>
                </List>
                <ListItem divider className={classes.filterHeader}>
                  <ListItemText primary="Software" />
                </ListItem>
                <ListItem divider className={classes.filterHeader}>
                  <ListItemText primary="Hardware" />
                </ListItem>
              </form>
            </Grid>
            <Grid item xs={9} style={{ height: "100vh" }}>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" />
                      <TableCell align="right" />
                      <TableCell align="right" />
                      <TableCell align="center" className={classes.deviceName}>
                        <SaveIcon /> <CloudDownload />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell align="left" className={classes.deviceName}>{row.deviceName}</TableCell>
                        <TableCell align="center" className={classes.deviceIcon}>
                          {this.getDeviceIcon(row.deviceName)}
                        </TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right" />
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(ListPage);
