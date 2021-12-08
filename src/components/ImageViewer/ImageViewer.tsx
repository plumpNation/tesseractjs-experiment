import { VFC } from 'react';
import styled from '@emotion/styled';

import type { ImageItem } from '../../types';

export interface ImageViewerProps {
  image: ImageItem;
  onClickOCR?: (imageURL: string) => void;
}

const StyledImage = styled('img')({
  maxWidth: '500px',
  maxHeight: '500px',
});

export const ImageViewer: VFC<ImageViewerProps> = ({ image, onClickOCR }) => (
  <section aria-label="image viewer">
    <StyledImage src={image.url} />
    <button onClick={() => onClickOCR?.(image.url)}>Run OCR</button>
  </section>
);