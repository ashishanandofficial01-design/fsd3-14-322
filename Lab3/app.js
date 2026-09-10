import http from "http";
import { getAllTeams, addTeam } from "./teams.js";
import { parse as parseUrl } from "url";

const PORT = 5000;

const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, {
        "Content-Type": "application/json",
    });

    res.end(data === undefined ? "" : JSON.stringify(data));
};

// Parse JSON request body
const parseJSONBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });

        req.on("error", (error) => {
            reject(error);
        });
    });
};

const server = http.createServer(async (req, res) => {
    const { pathname, query } = parseUrl(req.url, true);

    const method = req.method;

    console.log("Pathname:", pathname);
    console.log("Query:", query);
    console.log("Method:", method);

    // GET /api/v1/teams
    if (pathname === "/api/v1/teams" && method === "GET") {
        const teams = getAllTeams();

        return sendJson(res, 200, teams);
    }

    // POST /api/v1/teams
    else if (pathname === "/api/v1/teams" && method === "POST") {
        try {
            const newTeam = await parseJSONBody(req);

            console.log("New Team:", newTeam);

            addTeam(newTeam);

            return sendJson(res, 201, newTeam);
        } catch (error) {
            console.error(error);

            return sendJson(res, 400, {
                message: "Invalid JSON",
            });
        }
    }

    return sendJson(res, 404, {
        message: "Route not found",
    });
});

server.listen(PORT, () => {
    console.log(`SIH Server is running on http://localhost:${PORT}`);
});