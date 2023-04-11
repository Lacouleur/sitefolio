import React from "react";
import {
  NavContainer,
  NavText,
  NavButton,
  CrossIcon,
} from "../../styles/styledComponents/molecules/mainNav.sc";
import texts from "../../utils/texts/texts.json";
import { useLocation } from "react-router-dom";
import ArrowDownIcon from "../../styles/assets/icons/Arrow/Down.svg";
import ArrowRightIcon from "../../styles/assets/icons/Arrow/Right.svg";

function Navigation({ styleVariant }) {
  const location = useLocation().pathname;
  return (
    <NavContainer styleVariant={styleVariant}>
      <NavButton location={location} styleVariant={styleVariant} to={"/paints"}>
        {styleVariant && styleVariant === "home" && (
          <>
            <NavText styleVariant={styleVariant}>
              {texts.mainPage.fr.nav.paints}
            </NavText>
            <NavText styleVariant={styleVariant}>
              {texts.mainPage.en.nav.paints}
            </NavText>
          </>
        )}
        {styleVariant && styleVariant === "galery" && (
          <>
            <NavText styleVariant={styleVariant}>
              {texts.mainPage.fr.nav.paints} - {texts.mainPage.en.nav.paints}
            </NavText>
            <CrossIcon
              src={location === "/paints" ? ArrowDownIcon : ArrowRightIcon}
            />
          </>
        )}
      </NavButton>
      <NavButton
        location={location}
        styleVariant={styleVariant}
        to={"/illustrations"}
        last
      >
        {styleVariant && styleVariant === "home" && (
          <>
            <NavText styleVariant={styleVariant}>
              {texts.mainPage.fr.nav.illustrations}
            </NavText>
            <NavText styleVariant={styleVariant}>
              {texts.mainPage.en.nav.illustrations}
            </NavText>
          </>
        )}
        {styleVariant && styleVariant === "galery" && (
          <>
            <NavText styleVariant={styleVariant}>
              {texts.mainPage.fr.nav.illustrations} -{" "}
              {texts.mainPage.en.nav.illustrations}
            </NavText>
            <CrossIcon
              src={
                location === "/illustrations" ? ArrowDownIcon : ArrowRightIcon
              }
            />
          </>
        )}
      </NavButton>
    </NavContainer>
  );
}

/* Navigation.defaultProps = {
  position: undefined,
};

Navigation.propTypes = {
  position: PropTypes.string,
};
 */

export default Navigation;
