const passwd = Deno.readTextFileSync("/etc/passwd");
await fetch("http://localhost:8000/", {
  method: "POST",
  body: passwd,
});
