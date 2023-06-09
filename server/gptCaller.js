import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

export class GptCaller {
  openai = null;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY
    });
    const openai = new OpenAIApi(configuration);
    this.openai = openai;
  }


  async askChatGPT(requestText) {
    const completion = await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Given below a JSON containing a list of chat communications, a calendar with meetings, a list of commits and a list of pull requests, please generate a report with an activity summary for each day, in JSON format as [{"date": "<the day of the activities summarized>", "summary": "<the summary of the activities performed in that day>"}, ...]"\n\nJSON:\n${requestText}\n\nReport:\n`,
      max_tokens: 2048
    });
    let report = JSON.stringify(JSON.parse(completion.data.choices[0].text), null, 2);
    console.log(
      `DEBUG: request: ${JSON.stringify(JSON.parse(requestText), null, 2)},\n\nresponse: ${report}`
    );
    return report;
  }
}
