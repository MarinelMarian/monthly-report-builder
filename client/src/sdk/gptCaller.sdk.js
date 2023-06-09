/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class GptCaller {
  static remote = new Remote("https://cfew6t44pe3tyu6zukk7hijuqe0ghpul.lambda-url.us-east-1.on.aws/GptCaller")

  static async askChatGPT(requestText) {
    return GptCaller.remote.call("GptCaller.askChatGPT", requestText)
  }

}
