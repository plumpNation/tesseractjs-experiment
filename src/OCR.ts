import { createWorker, RecognizeResult } from 'tesseract.js';

const worker = createWorker({
  logger: m => console.log(m)
});

type Language = 'eng';

export const parseImage = async (imageUrl: string, language: Language = 'eng'): Promise<RecognizeResult> => {
  await worker.load();
  await worker.loadLanguage(language);
  await worker.initialize(language);

  const result = await worker.recognize(imageUrl);

  await worker.terminate();

  return result;
};