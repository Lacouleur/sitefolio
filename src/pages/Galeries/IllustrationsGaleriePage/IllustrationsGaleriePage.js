import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImagesList from "../../../components/molecules/GalerieImagesList";
import { useScrollPosition } from "../../../utils/customHooks/useScrollPosition";
import { setLocation } from "../../../store/redux";

function IllustrationsGaleriePage() {
  const dispatch = useDispatch();
  const galerieName = "illustrations";
  const [isIllustrations, setIsIllustration] = useState(false);

  const illustrationsGalerieRef = useRef(null);

  useEffect(() => {
    if (isIllustrations) {
      dispatch(setLocation("illustrations"));
    } else {
      dispatch(setLocation("paintings"));
    }
  }, [isIllustrations]);

  useScrollPosition(
    illustrationsGalerieRef,
    undefined,
    setIsIllustration,
    -160,
  );

  return (
    <GaleriePageContainer id={galerieName} ref={illustrationsGalerieRef}>
      <GaleriePresentationBlockText galerieName={galerieName} isDescription />

      <GaleriesContainer>
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="cards"
          customName="cartes / cards concept"
          nbPerRow={4}
          nbOfImgs={9}
          customOrder={[9]}
          noExpandLast
          roundedBorders
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="landscapes"
          customName="Paysages / Landscapes"
          nbOfImgs={7}
          customOrder={[3, 4, 6, 7, 1, 2, 5]}
          nbPerRow={2}
          roundedBorders
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="concepts"
          customName="Concepts"
          nbOfImgs={3}
          customOrder={[3]}
          roundedBorders
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="characters"
          subCollection={[{ subName: "fox", imagesNumber: 6, type: "png" }]}
          customName="Personnages concepts/ Characters concepts"
          nbPerRow={3}
          noExpandLast
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="characters"
          subCollection={[{ subName: "rpg", imagesNumber: 3, type: "jpg" }]}
          customName="Personnages & objets / Characters & props"
          nbPerRow={2}
          noHeader
          roundedBorders
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="personal"
          customName="Personal work"
          nbOfImgs={6}
          nbPerRow={3}
          customOrder={[1, 5, 2, 3, 4, 7, 6]}
          roundedBorders
        />
      </GaleriesContainer>
    </GaleriePageContainer>
  );
}

/* IllustrationsGaleriePage.defaultProps = {
  position: undefined,
};

IllustrationsGaleriePage.propTypes = {
  position: PropTypes.string,
};
 */

export default IllustrationsGaleriePage;
