import { VFC } from 'react';
import styled from "@emotion/styled";

import { Button } from '../Button';

import type { ImageItem } from '../../types';

export interface ImageSelectorProps {
  onSelect?: (value: ImageItem) => void;
  images?: ImageItem[];
}

const StyledLi = styled('li')({
  padding: '1rem',
});

export const ImageSelector: VFC <ImageSelectorProps> = ({ onSelect, images = [] }) => (
  <>
    <p>Select an image</p>
    <ul>
      {images.map(({ name, url }) => (
        <StyledLi key={url}>
          <Button onClick={() => onSelect?.({ name, url })}>
            {name}
          </Button>
        </StyledLi>
      ))}
    </ul>
  </>
);
