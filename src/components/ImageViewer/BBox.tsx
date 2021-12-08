import { VFC } from "react";
import styled from "@emotion/styled";

import type { BoundingBox } from "../../types";

export interface BBoxProps {
  coords: BoundingBox;
}

export const BBox: VFC<BBoxProps> = ({ coords: { x0, x1, y0, y1 } }) => {
  const StyledDiv = styled('div')({
    position: 'absolute',
    top: y0,
    left: x0,
    height: y1 - y0,
    width: x1 - x0,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  });

  return (
    <StyledDiv />
  );
}
