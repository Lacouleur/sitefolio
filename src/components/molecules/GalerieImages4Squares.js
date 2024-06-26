import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  ArtworkExhib,
  ArtworkExhibB,
  ArtworkExhibSpan,
  ArtworkTitleBox,
  ArtworkTitleSize,
  ArtworkTitleText,
  Descriptionbox,
  GalerieImages4SquaresContainer,
  ImgBox,
  SquareImg,
} from "../../styles/styledComponents/molecules/GalerieImages4Squares.sc";

import { dynamicUrls } from "../../utils/helpers/GalerieImageListHelpers";
import { toggleFullView, addItemToImagesList } from "../../store/redux";

function GalerieImages4Squares({
  galerieName,
  artWorkCategory,
  customOrder,
  isExhibed,
}) {
  const [imgHovered, setImgHovered] = useState(undefined);
  const [lastImgHovered, setLastImgHovered] = useState(undefined);
  const [imgsInfos, setimgsInfos] = useState([]);
  const dispatch = useDispatch();
  const { device } = useSelector((state) => state.main);

  const askedSize = {
    side: "w",
    size: 500,
  };

  const { paintingsImagesList } = useSelector((state) => state.main);

  useEffect(() => {
    if (paintingsImagesList) {
      imgsInfos.map((newItem) => {
        if (paintingsImagesList.indexOf(newItem.url) === -1) {
          dispatch(addItemToImagesList({ galerieName, newItem }));
        }
      });
    }
  }, [imgsInfos]);

  useEffect(() => {
    setimgsInfos(
      dynamicUrls({
        askedSize,
        nbOfImgs: 4,
        galerieName,
        artWorkCategory,
        customOrder,
      }),
    );
  }, []);

  return (
    <GalerieImages4SquaresContainer
      onClick={(e) => {
        dispatch(
          toggleFullView({
            toogle: true,
            imgInfos: imgsInfos[imgHovered - 1 || 0],
            galerieName,
          }),
        );
      }}
    >
      <Descriptionbox>
        <ArtworkTitleBox>
          <ArtworkTitleText>
            {artWorkCategory.replace(/_/g, " ")} maze
          </ArtworkTitleText>
          <ArtworkTitleSize>100x100 - 2020</ArtworkTitleSize>
        </ArtworkTitleBox>
        {isExhibed && (
          <ArtworkExhib>
            <ArtworkExhibSpan>Expo/Exhibition :</ArtworkExhibSpan>{" "}
            <ArtworkExhibB>Honfleur - Art Range Galerie</ArtworkExhibB>
          </ArtworkExhib>
        )}

        {/*       <ArtworkAboutBox>
          <ArtworkAboutText>
            FR - Châssis ébéniste en bois plein français, toiles de lin épaisse
            d’artisanat Italien, peintures haut de gamme Hollandaises, vernis UV
          </ArtworkAboutText>
          <ArtworkAboutText>
            EN - Cabinetmaker frame in French solid wood, thick linen canvas of
            Italian craftsmanship, high-end Dutch paints, UV varnish
          </ArtworkAboutText>
        </ArtworkAboutBox> */}
      </Descriptionbox>
      <ImgBox
        onMouseLeave={() => {
          setLastImgHovered(imgHovered);
          setImgHovered(undefined);
        }}
      >
        {imgsInfos && imgsInfos.length > 3 && (
          <>
            <SquareImg
              onMouseEnter={() => device !== "mobile" && setImgHovered(1)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={1}
              src={imgsInfos[0].url}
            />
            <SquareImg
              onMouseEnter={() => device !== "mobile" && setImgHovered(2)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={2}
              src={imgsInfos[1].url}
            />
            <SquareImg
              onMouseEnter={() => device !== "mobile" && setImgHovered(3)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={3}
              src={imgsInfos[2].url}
            />
            <SquareImg
              onMouseEnter={() => device !== "mobile" && setImgHovered(4)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={4}
              src={imgsInfos[3].url}
            />
          </>
        )}
      </ImgBox>
    </GalerieImages4SquaresContainer>
  );
}

GalerieImages4Squares.defaultProps = {
  customOrder: undefined,
  isExhibed: false,
};

GalerieImages4Squares.propTypes = {
  galerieName: PropTypes.string.isRequired,
  artWorkCategory: PropTypes.string.isRequired,
  customOrder: PropTypes.arrayOf(PropTypes.number),
  isExhibed: PropTypes.bool,
};

export default GalerieImages4Squares;

/* {device !== "mobile" && (
  <>
    <SquareImg
      onMouseEnter={() => setImgHovered(2)}
      imgHovered={imgHovered}
      lastImgHovered={lastImgHovered}
      id={2}
      src={imgsInfos[1].url}
    />
    <SquareImg
      onMouseEnter={() => setImgHovered(3)}
      imgHovered={imgHovered}
      lastImgHovered={lastImgHovered}
      id={3}
      src={imgsInfos[2].url}
    />
    <SquareImg
      onMouseEnter={() => setImgHovered(4)}
      imgHovered={imgHovered}
      lastImgHovered={lastImgHovered}
      id={4}
      src={imgsInfos[3].url}
    />
  </>
)} */
