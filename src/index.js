console.log("This file is running");

let defaultEnv = {
    PORT: 5050,
    DATABASE_URL: "asajsha",
    JWT_SECURITY_KEY: "asajsn",
    SECRET_KEY: "apple",
    SECURE_API_KEY: "ajshja"
};

let contentToWrite = "";

// What it should look like:
// PORT=5050
// DATABASE_URI="asajshd"
// JWT_SECURITY_KEY="asajsn"
// SECRET_KEY="apple"
// SECURE_API_KEY="ajshja"

Object.keys(defaultEnv).forEach(
    envKey => {
        // Add a line to the contentToWrite variable with the key name and value
        contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
    }
);

// Give us an idea of what gets stored in the file
console.log(contentToWrite);

// All the file handling operations will be handled by the fs module
const fs = require("node:fs");

// .env file is created where the node process is running
// Synchronous file write operation
fs.writeFileSync(".env", contentToWrite);

// Asynchronous file write operation
// fs.writeFile(filepath, fileContents, callback)
fs.writeFile(".env", contentToWrite, (err) => {
    if (err) {
        console.log("Error writing file: ", err);
    }
    else {
        console.log("File has been written");
    }
});


console.log("File written successfully");

