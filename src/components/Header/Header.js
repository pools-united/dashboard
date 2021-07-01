import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components

import styled, { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";

import Stats from "components/Stats/Stats.js";

const useStyles = makeStyles(styles);


const HeaderStyle = createGlobalStyle`
.makeStyles-container-23, .makeStyles-container-10{
  max-width:1600px;
  width:80%;
 
  
}


`;

const ButtonLogoStyled = styled(Button)`
  /* filter: ${(props) => `hue-rotate(${props.rotateHue}deg)`}; */
`;

const StatsButtonWrapper = styled.div`
  margin: 2px 24px;
`;

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].style.background =
        changeColorOnScroll.color;
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute,
    // rotateHue,
  } = props;

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  const brandComponent = (
    <Link to="/">
      <ButtonLogoStyled
        // rotateHue={rotateHue}
        className={classes.logo}
      >
        {/* {brand} */}
      </ButtonLogoStyled>
    </Link>
  );
  return (
    <>
    <HeaderStyle/>
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden smDown implementation="css">
          <StatsButtonWrapper>
            <Stats />
          </StatsButtonWrapper>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
    </>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  rotateHue: PropTypes.any,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
