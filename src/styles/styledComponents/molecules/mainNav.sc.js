import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import {
  mixinAnimLeftToRight,
  mixinAnimRightToLeft,
} from "../atoms/Animations.sc";

const HomeNavContainerMixin = css`
  display: flex;
  height: ${({ viewSize, titleHeight }) =>
    `calc(${viewSize.height}px - ${titleHeight}px - 40px - 102px)`};
  width: auto;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.fontDimmed};
  border-bottom: none;
  border-radius: 10px 10px 0 0;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${({ viewSize, titleHeight }) =>
      `calc(${viewSize.height - 70}px - ${titleHeight}px)`};
    overflow: hidden;
    border-radius: 0;
    border: none;
    min-width: 300px;
    margin-bottom: 10px;
  }
`;

const GalerieNavMixin = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  border-bottom: solid 1px ${({ theme }) => theme.colors.accent};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    min-width: 300px;
    border-radius: 0;
  }
`;

const FixedNavMixin = css`
  position: fixed;
  top: 48px;
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: 1500px;
  justify-content: space-between;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  border-bottom: solid 1px ${({ theme }) => theme.colors.accent};
  border-radius: 0;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 95vw;
    min-width: 300px;
  }
`;

export const NavContainer = styled.div`
  min-width: 800px;
  ${({ stylevariant }) => stylevariant === "home" && HomeNavContainerMixin};
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavMixin};
  ${({ fixedVersion }) => fixedVersion && FixedNavMixin};
`;

const GalerieNavTextMixin = css`
  z-index: 5;
  font: ${({ theme }) => theme.fonts.titleMedium};
  color: ${({ theme }) => theme.colors.font};
  text-align: start;
  align-self: center;
  margin-right: 12px;
  text-transform: capitalize;
  font-size: clamp(1.5rem, 2.5vw, 32px);

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    font-size: 3.5vw;
    margin: auto;
  }
`;

export const SpanNav = styled.span`
  display: inline;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    text-align: center;
    line-height: 2px;
  }
`;

const HomeNavTextMixin = css`
  z-index: 5;
  text-transform: capitalize;
  display: inline-block;
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.titleMedium};
  color: ${({ theme }) => theme.colors.font};
  padding: 50% 0;
`;

export const NavSeparator = styled.div`
  width: 4px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.fontDimmed};
  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    visibility: ${({ stylevariant }) => stylevariant === "home" && "hidden"};
    width: ${({ stylevariant }) => stylevariant === "home" && "100%"};
    height: ${({ stylevariant }) => stylevariant === "home" && "4px"};
  }
`;

export const NavText = styled.div`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavTextMixin};
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavTextMixin};
`;

const HomeNavButtonMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 48%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.fontDimmed};
  }
`;

const GalerieNavButtonMixin = css`
  height: 74px;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 50%;
  text-decoration: none;
  border: none;
  padding-left: 16px;

  opacity: ${({ location, galerieName }) =>
    location === galerieName ? "1" : "0.6"};
  cursor: pointer;
  transition: opacity 400ms ease;

  &:hover {
    opacity: 1;
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    padding-left: 0%;
    height: 40px;
  }
`;

export const NavButton = styled.div`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavButtonMixin};
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavButtonMixin};
`;

const NavButtonBgMixin = css`
  // ANIM
  ${({ location, galerieName, $firstload }) => {
    if (
      location === galerieName &&
      galerieName === "paintings" &&
      !$firstload
    ) {
      return mixinAnimLeftToRight;
    }
    if (
      location === galerieName &&
      galerieName === "illustrations" &&
      !$firstload
    ) {
      return mixinAnimRightToLeft;
    }
  }};

  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ location, galerieName, theme }) =>
    location === galerieName
      ? theme.colors.accent
      : theme.colors.backgroundDimmed};
`;

const paintingsButtonBackgroundMixin = css`
  background-attachment: fixed;
  background-position: -200px;
  background-repeat: no-repeat;
  background-size: ${({ navigationSize }) =>
    `calc(${navigationSize.width}px * 1.5)`};
  min-height: ${({ navigationSize }) => `${navigationSize.height}px`};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    background-position: 30% 80%;
    background-size: ${({ viewSize }) => `calc(${viewSize.height}px + 20%)`};
  }
`;

const illustrationsButtonBackgroundMixin = css`
  background-attachment: fixed;
  background-position: ${({ navigationSize }) =>
    `calc(${navigationSize.width}px / 2) 100%`};
  background-repeat: no-repeat;
  background-size: ${({ navigationSize }) =>
    `calc(${navigationSize.width}px - 20%)`};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    background-position: bottom;
    background-size: ${({ viewSize }) => `auto calc(${viewSize.height}px)`};
  }
`;

const HomeNavButtonBgMixin = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: ${({ image }) => `url(${image})`};
  background-color: ${({ theme }) => theme.colors.backgroundDimmed};
  min-width: 500px;
  min-height: auto;
  opacity: 0.4;

  ${({ galerieName }) =>
    galerieName === "paintings"
      ? paintingsButtonBackgroundMixin
      : illustrationsButtonBackgroundMixin};
`;

export const NavButtonBackground = styled.div`
  ${({ stylevariant }) => stylevariant === "galerie" && NavButtonBgMixin};
  ${({ stylevariant }) => stylevariant === "home" && HomeNavButtonBgMixin};
`;

export const CrossIcon = styled(SVG)`
  z-index: 5;
  position: absolute;
  right: 5%;
  transform: translate(0, -50%);
  top: 50%;
  display: ${({ stylevariant }) => stylevariant === "home" && "none"};
  & path {
    fill: ${({ theme, mail }) => (mail ? "none" : theme.colors.font)};
    stroke: ${({ theme, mail }) => (mail ? theme.colors.font : "none")};
  }
  &:hover {
    cursor: pointer;
    & path {
      fill: ${({ theme, mail }) => (mail ? "none" : theme.colors.accent)};
      stroke: ${({ theme, mail }) => (mail ? theme.colors.accent : "none")};
    }
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: none;
  }
`;
