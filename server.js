const http = require('http');
const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/") {
        res.end(JSON.stringify({
            message: "Hello World! My backend is running!"
        }));
    } else if (req.method === "GET" && req.url === "/api/hello") {
        res.end(JSON.stringify({
            message: "Hello from my Node.js API!"
        }));
    } else if (req.method === "GET" && req.url === "/api/users") {
        const users = [
            { id: 1, name: "Karen" },
            { id: 2, name: "Marcus" },
            { id: 3, name: "Dyami" }
        ];

        res.end(JSON.stringify(users));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});