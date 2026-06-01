const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4; // 1

setTimeout(() => console.log("Timer 1 finsihed"), 0);
setImmediate(() => console.log("Immediate 1 finsihed"));

fs.readFile("test-file.txt", () => {
  console.log("I/0 finsihed");
  console.log("-------------");

  setTimeout(() => console.log("Timer 2 finsihed"), 0);
  setTimeout(() => console.log("Timer 3 finsihed"), 3000);
  setImmediate(() => console.log("Immediate 2 finsihed"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password Encryted");
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password Encryted");
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password Encryted");
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password Encryted");
  /*
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encryted");
  });
  
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encryted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encryted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encryted");
  });
  */
});

console.log("Hello from the top-level code");
