/*eslint-disable*/
import React, {useState, useEffect} from "react";
import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import FavoriteIcon from '@material-ui/icons/Favorite';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, People, LiveHelp, InvertColors } from "@material-ui/icons";
import styled from "styled-components";


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import Newsletter from "views/Newsletter/Newsletter"

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const RouterButtonStyled = styled(Link)`

`




export default function HeaderLinks(props) {
  const classes = useStyles();
  const [show, setShow] = useState(true)

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShow(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <RouterButtonStyled
          to="/"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons} /> HOME
        </RouterButtonStyled>
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
        <RouterButtonStyled
          to="/faq"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <LiveHelp className={classes.icons} /> FAQ
        </RouterButtonStyled>
        <RouterButtonStyled
          to="/news"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <AnnouncementIcon className={classes.icons} /> News
        </RouterButtonStyled>
        <RouterButtonStyled
          to="/contact-us"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <ContactMailIcon className={classes.icons} /> CONTACT
        </RouterButtonStyled>
        <RouterButtonStyled
          to="/cpu-token"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <DonutSmallIcon className={classes.icons} /> CPU TOKEN
        </RouterButtonStyled>
        <RouterButtonStyled
          to="/cpu-donations"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <FavoriteIcon className={classes.icons} /> CPU DONATIONS
        </RouterButtonStyled>
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
          id="newsletter"
          title="Subscribe to our Newsletter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            onClick={() => setShow(!show)}
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " far fa-newspaper"} />
          </Button>
        </Tooltip>
        <Newsletter onClose={() => setShow(false)} show={show} />
      </ListItem>

      {/* <ListItem className={classes.listItem}>
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
      </ListItem> */}
    </List>
  );
}
