# AI BRIGHT DATA CHALLENGE API

> Scrape. Analyze. Optimize. Let AI decode Instagram profiles for you powered by Bright Data

# Getting started
- Configure the .envs file
    - create your bright data free acount and get your api key: https://brightdata.com
    - create your mistral free acount and get your api key: https://mistral.ai
    - create your smithery free acount and get your profile: https://smithery.ai
- PHP API:
    - run composer install inside api folder
    - Start the PHP server inside the src dir with: php -S 127.0.0.1:8000 .\index.php
    - Make the request: curl.exe -X POST "http://127.0.0.1:8000/" -H "Content-Type: application/x-www-form-urlencoded" -d "profile=instagram.username"
    - Get the infomation of the profile destiled by the LLM
- MCP SERVER:
    - run npm install inside mcp folder
    - Start the Node JS server inside the mcp dir with: npm run start
    - Make the request: curl.exe --location --request GET 'http://localhost:3000?profile=raziel.rodrigues'
    - Make the request: curl.exe --location --request POST "http://localhost:3000/posts-analyze" --header "Content-Type: application/json" --data "{\"url\": \"https://example.com/my-post\"}"
    - Get the infomation of the profile directly from the MCP tool of Bright Data

# PHP API

<img src="api/example.png">

---

<img src="api/system.png">

# NODE JS MCP SERVER

<img src="mcp/example.png">

---

<img src="mcp/system.png">

---

# Full Article

Please react to my article and share it to help me win the hackaton. Thank you so much :)

- https://dev.to/razielrodrigues/instaanalyzer-an-ai-instagram-analyst-powered-by-php-neuron-ai-and-bright-data-1041
