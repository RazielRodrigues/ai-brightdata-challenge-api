import express from 'express';
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Rota simples para pegar dados do Instagram
app.get('/', async (req, res) => {
    try {

        // MCP Config
        const profileId = process.env.SMITHERY_PROFILE;
        const apiKey = process.env.BRIGHT_API_TOKEN;
        const serverName = "@luminati-io/brightdata-mcp";

        const transport = new StreamableHTTPClientTransport(
            `https://server.smithery.ai/${serverName}/mcp?profile=${profileId}&api_key=${apiKey}`
        );

        const client = new Client({
            name: "Client",
            version: "1.0.0"
        });

        await client.connect(transport);

        const { profile, tool } = req.query;

        const result = await client.callTool({
            name: tool,
            arguments: {
                url: profile
            }
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});