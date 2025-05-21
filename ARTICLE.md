*This is a submission for the [Bright Data AI Web Access Hackathon](https://dev.to/challenges/brightdata-2025-05-07)*

---

# First Words

First of all, I’d like to say thanks for reading my article. I really want to win this hackathon! I’m currently open to work and have put a lot of effort into developing this project to show companies my skills. I’d be very thankful if you could react to my article and share it! :)

---

## What I Built

> Scrape. Analyze. Optimize. Let AI decode Instagram profiles for you.

Everyone wants to know info about Instagram profiles whether it’s about yourself or someone else. This AI tool helps you understand profiles of people you’re curious about, even if you’re not on their friends list. It brings you insights in an easy and friendly way!  

To make this happen, I used some cool technologies, which I’ll explain in this article. Most of the tools are free, and Bright Data even gives **free credits** to every user to test their product. That means you can try the code below on your own machine after signing up with Bright Data!

---

## Demo (MCP Server)

I’ve shared a GitHub demo repo so you can clone and try the project yourself. Just a heads up you’ll need API keys from the platforms I mention to see it working.

[Repository with the PHP API plus Bright Data MCP Server please leave a star if you like it!](https://github.com/RazielRodrigues/ai-brightdata-challenge-api)

![MCP Server Demo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zofg2ymm0cocht1fd4oe.png)

---

## Demo (REST API)

You can test this project live! Just type an Instagram username, and you’ll get all the info formatted in a nice front-end. Plus, you can share it on your own Instagram like the Spotify Wrapper feature! This would help me grow the project and get more eyes on this article. I’d be super thankful!

### [Live Demo](http://insta-analyzer.razielrodrigues.dev/)

![REST API Demo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/plhs40djc5xrye20g3xy.png)

---

## How I Used Bright Data's Infrastructure

### First Project (MCP Server)

For this project, I connected straight to Bright Data’s MCP server and used their Scraper API. It gave me access to these awesome tools:

- `web_data_instagram_profiles` (Quickly read structured Instagram profile data)
- `web_data_instagram_posts` (Quickly read structured Instagram post data)
- `web_data_instagram_reels` (Quickly read structured Instagram reels data)
- `web_data_instagram_comments` (Quickly read structured Instagram comments data)

These worked great and gave my LLM model from Mistral the right data to analyze. I also used the Web Unlocker API to solve captchas and get proxies super helpful to avoid Instagram blocks, especially with private profiles!

![Bright Data MCP Integration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pfpmpf2tixd8ctivw504.png)

### Second Project (REST API)

For this one, I used Bright Data’s REST Scraper API to grab Instagram profile data. Here’s an example request:

```bash
curl -H "Authorization: Bearer API_TOKEN" -H "Content-Type: application/json" -d '[{"url":"https://www.instagram.com/catsofinstagram}]' "https://api.brightdata.com/datasets/v3/trigger?dataset_id=xxxxxxxxx"
```

I also used their snapshot endpoint to get data which the scraping was already done. It was so easy to set up, and then I just showed the data in my front-end app for the user.

### [Live Demo](http://insta-analyzer.razielrodrigues.dev/)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u3t10uzxmul2vxxx5j49.png)

---

## Performance Improvements

Here’s what I’d like to do next:

- Publish the MCP Server
- Build a custom scraper with Bright Data for specific Instagram data
- Add RAG search using Bright Data’s Instagram dataset
- Use all available Instagram REST endpoints to make the REST API even better
- nowadays the AI response is in an average of 30s ~ 45s for not cached responses and 15s ~ 25s for cached responses, this is one of the most critical points I am thinking to improve, maybe I will add in the future stream support or other approaches like showing data in parts or other kind of caching approach

---

## Conclusion

Bright Data is an amazing platform! It lets you use your AI skills to create real-life projects that solve business problems. Their tech infrastructure is awesome, and everything just works. I loved working with their tools and can’t wait to keep using them. Their interface and setup are so easy and straightforward it’ll definitely take your project to the next level!

![Bright Data Conclusion](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9bkzxc7llkah6v7k1o8d.png)

---

## References

- [Bright Data MCP GitHub](https://github.com/luminati-io/brightdata-mcp)
- [Bright Data Documentation](https://docs.brightdata.com)