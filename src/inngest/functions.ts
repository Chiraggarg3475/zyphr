import {Sandbox} from "@e2b/code-interpreter";
import { getSandbox } from "./utils";
import {  gemini , createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vibe2-nextjs-test8");
      return sandbox.sandboxId;
    });  
    
    const codeagent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer.  You write readable, maintainable code. You write simple Next.js & React.js snippets.",
      model: gemini ({ model: "gemini-2.0-flash", apiKey:process.env.GEMINI_API_KEY}),
    });

    const { output } = await codeagent.run
    (
        `Write the following snippet: ${event.data.value}`,
    );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      
      return `http://${host}`;
    });

    // console.log(output);

    return { output,sandboxUrl};
  },
);
