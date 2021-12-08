import { parseImage } from './OCR';

const imageUrl = './receipt.jpg';

(async () => {
  const result = await parseImage(imageUrl);
})();