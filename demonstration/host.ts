// This module serves as a 3rd party host for the demonstration.
// Where data is "exfiltrated" to.

import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

async function handler(_req: Request): Response {
  console.log("Received request, payload:");
  console.log(await _req.text());

  return new Response("OK", {
    status: 200,
  });
}

serve(handler);
