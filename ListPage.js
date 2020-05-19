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

const useStyles = makeStyles(theme => ({
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
  }
}));

function ListPage() {
  const classes = useStyles();
  const [state, setState] = useState({
    ipaddress: "",
    hostname: "",
    qidcve: "",
    dropdown: ""
  });
  const handleChange = (event, value) => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  return (
    <div className={classes.root}>
      <Container fixed maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={6} style={{ height: "100vh" }}>
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
                    onChange={handleChange}
                  />
                </ListItem>
                <ListItem divider className={classes.clearPadding}>
                  <TextField
                    name="hostname"
                    label="Host Name"
                    variant="outlined"
                    value={state.hostname}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                      onChange={handleChange}
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
            </form>
          </Grid>
          <Grid item xs={6} style={{ height: "100vh" }}>
            sdsdsd
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ListPage;
