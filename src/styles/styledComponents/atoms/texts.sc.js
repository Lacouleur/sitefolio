import styled from "styled-components";

export const ColoredLetter = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.titleBig};
  margin: 16px 0;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    /*    font-size: 16vw; */
    font-size: clamp(20px, 16vw, 100px);
    margin: 0;
  }

  // MOBILE
  @media (max-height: 500px) {
    /*    font-size: 16vw; */
    font-size: clamp(20px, 13vw, 40px);
    margin: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: block;
  }
`;

export const SubTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.labelSmall};
  margin-top: 35px;
  margin-left: 16px;

  // MOBILE
  @media (max-width: 800px) {
    margin: 0;
    font-size: 5vw;
  }

  // MOBILE
  @media (max-height: 500px) {
    /*    font-size: 16vw; */
    font-size: clamp(10px, 5vw, 20px);
    margin: 0;
  }
`;

export const TextBody = styled.p`
  font: ${({ theme }) => theme.fonts.bodyMedium};
`;

export const TextBlock = styled.div`
  width: 48%;
  max-width: 400px;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CtaLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.labelLink};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
