import { serve } from "https://deno.land/std/http/server.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args, exit } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.log("port is not number");
  exit(1);
}

const body = new TextEncoder().encode("Hello World\n");
const s = serve({ port });
console.log(`http://localhost:${port}`);

for await (const req of s) {
  req.respond({ body });
}
