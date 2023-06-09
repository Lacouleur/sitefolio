import styled, { css } from "styled-components";

const GaleriePageContainerIllustrationsMixin = css`
  border-top: 3px solid ${({ theme }) => theme.colors.accent};
  margin-top: 64px;
  min-width: 300px;
`;

export const GaleriePageContainer = styled.div`
  ${({ id }) =>
    id === "illustrations" && GaleriePageContainerIllustrationsMixin}
`;

export const GaleriesContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
  }
`;
