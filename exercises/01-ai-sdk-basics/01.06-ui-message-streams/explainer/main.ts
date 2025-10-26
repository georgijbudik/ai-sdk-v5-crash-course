import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const model = google('gemini-2.0-flash');

const stream = streamText({
  model,
  prompt: 'Give me a sonnet about a cat called Steven on the roof with many friends.',
});

for await (const chunk of stream.toUIMessageStream()) {
  console.log(chunk);
}
