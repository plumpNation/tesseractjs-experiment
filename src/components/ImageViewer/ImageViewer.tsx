import { VFC } from 'react';
import styled from '@emotion/styled';

import { Button } from '../Button';
import { BBox } from "./BBox";

import type { BoundingBox, ImageItem } from '../../types';

export interface ImageViewerProps {
  image?: ImageItem;
  bboxes?: BoundingBox[];
  onClickOCR?: (imageURL: string) => void;
}

const Image = styled('img')({
  maxWidth: '500px',
  maxHeight: '500px',
});

const ImageViewerSection = styled('section')({
  // position: 'relative',
});

export const ImageViewer: VFC<ImageViewerProps> = ({ image, bboxes, onClickOCR }) => (
  <ImageViewerSection aria-label="image viewer">
    {image?.url && (
      <>
        <Image src={image.url} />
        <Button onClick={() => onClickOCR?.(image.url)}>Run OCR</Button>
      </>
    )}

    {bboxes?.map((coords) => <BBox coords={coords} key={coords.toString()} />)}
  </ImageViewerSection>
);
