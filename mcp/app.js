import express from 'express';
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";

const app = express();
const PORT = process.env.PORT;

function formatComments(data) {
    if (!data?.length) {
        return null;
    }

    // Avoid problems with famous profiles which has a lot of comments due to LLM Models limit
    const comments = (data.length > 10) ? data.slice(0, 10) : data;
    const formattedComments = [];

    comments.forEach(comment => {
        formattedComments.push({
            "comment": comment.comments,
            "user_commenting": comment.user_commenting,
            "likes": comment.likes
        })
    });

    return formattedComments;
}

app.use(express.json());

// Rota para pegar dados do Instagram
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

        const { profile } = req.query;

        const result = await client.callTool({
            name: 'web_data_instagram_profiles',
            arguments: {
                url: profile
            }
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para pegar dados do post
app.post('/posts-analyze', async (req, res) => {
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

        const { posts } = req.body;
        const result = []

        for (const post of posts) {
            let response = null;
            let data = null;
            let formatedData = null;
            let { url } = post;

            response = await client.callTool({
                name: 'web_data_instagram_posts',
                arguments: { url }
            })

            data = JSON.parse(response.content[0].text)[0];

            formatedData = {
                "description": data.description,
                "num_comments": data.num_comments,
                "date_posted": data.date_posted,
                "location": data.location,
                "likes": data.likes,
                "alt_text": data.alt_text,
                "comments": formatComments(data?.latest_comments),
            }

            result.push(formatedData)
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});