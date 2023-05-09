# red_deno

red deno permissions that you should not use

## Demonstrations

Each one of these permissions is a potential escalation vector. Demonstrations
try to get the most out of the system. This is not a list of "things you can do
with Deno". This is a list of "things you can do with Deno if you have the right
permissions".

Demonstrations that compromize confidentiality will leak `/etc/passwd` (or
equivalent) to the network.

While those that compromize integrity will write a file to the local filesystem
@ `flag.txt` with the contents of `Demonstration of [permission]`.

This will try to rate bad permissions on the CVSS scoring sheet.

## Base Permissions

> **Note**: Availability doesn't matter in the face of compromized third party
> code or self-ran code. This only focuses on confidentiality and integrity.

| Permission       | Description                       | CVSS                                            |
| ---------------- | --------------------------------- | ----------------------------------------------- |
| `--allow-all`    | All permissions.                  | [`10.0`](./demonstration/base/all.ts)           |
| `--allow-run`    | Running subprocesses.             | [`10.0`](./demonstration/base/run.ts)           |
| `--allow-ffi`    | Dynamic linking.                  | `10.0`                                          |
| `--allow-env`    | Read/write env access             | (unknown)                                       |
| `--allow-hrtime` | High resolution time measurement. | Fingerprinting                                  |
| `--allow-net`    | Network access.                   | Fingerprinting, Exfiltration                    |
| `--allow-read`   | Read access.                      | Collection                                      |
| `--allow-write`  | Write access.                     | Exfiltration                                    |
