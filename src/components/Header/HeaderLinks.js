/*eslint-disable*/
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ContactMailIcon from '@material-ui/icons/ContactMail';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, People, LiveHelp, InvertColors } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons} /> HOME
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Pools"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={InvertColors}
          dropdownList={[
            <a href="/pool?id=CPU" className={classes.dropdownLink}>CPU Pool [CPU]</a>,
            <a href="/pool?id=ERA"  className={classes.dropdownLink}>Nova Era Pool [ERA]</a>,
            <a href="/pool?id=VENUS"  className={classes.dropdownLink}>Fresco Pool [VENUS]</a>,
            <a href="/pool?id=PROTO" className={classes.dropdownLink}>Proto Pool [PROTO]</a>,
            <a href="/pool?id=MINES"  className={classes.dropdownLink}>ADAstra Mines [MINES]</a>,
            <a href="/pool?id=CURIE"  className={classes.dropdownLink}>Marie Curie Pool [CURIE]</a>,

            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/faq"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <LiveHelp className={classes.icons} /> FAQ
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/news"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <AnnouncementIcon className={classes.icons} /> News
        </Button>
        <Button
          href="/contact-us"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <ContactMailIcon className={classes.icons} /> CONTACT
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="twitter-tooltip"
          title="Follow us"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/C_PoolsUnited"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook-tooltip"
          title="Need help? Send us a message"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://t.me/cpoolsunited"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-telegram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Check out our YouTube channel"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UCPJ4UFyhEpqxYgcAWkplchw"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="medium-tooltip"
          title="Flip through our articles"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://cpoolsunited.medium.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-medium"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
