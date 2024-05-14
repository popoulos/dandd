import OpenAI from "openai";
import { useEffect, useRef, useState } from "react";

function useResponse(openai, prompt) {
  const [response, setResponse] = useState<string | null>(null);
  useEffect(() => {
    // if (!prompt) {
    //   return;
    // }
    const fetchResponse = async () => {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });
      setResponse(completion);
      console.log("completion", completion);
    };
    fetchResponse();
  }, [prompt]);
  return response;
}

export function Story({ setup, userPrompt }) {
  const openai = new OpenAI({
    apiKey: setup.apiKey,
    dangerouslyAllowBrowser: true,
  });
  const isInit = useRef<boolean>(false);
  const response = useResponse(openai, userPrompt);

  return <div> blablabla</div>;
}
