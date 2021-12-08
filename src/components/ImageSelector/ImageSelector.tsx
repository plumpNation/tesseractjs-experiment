import { VFC } from 'react';

import type { ImageItem } from '../../types';

export interface ImageSelectorProps {
  onSelect?: (value: ImageItem) => void;
  images?: ImageItem[];
}

export const ImageSelector: VFC <ImageSelectorProps> = ({ onSelect, images = [] }) => (
  <>
    <p>Select an image</p>
    <ul>
      {images.map(({ name, url }) => (
        <li key={url}>
          <button value={url} onClick={() => onSelect?.({ name, url })}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  </>
);