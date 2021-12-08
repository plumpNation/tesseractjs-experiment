import { createWorker } from 'tesseract.js';

const worker = createWorker({
  logger: m => console.log(m)
});

const imageUrl = './receipt.jpg';

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(imageUrl);
  console.log(text);
  await worker.terminate();
})();