*This is a submission for the [Bright Data AI Web Access Hackathon](https://dev.to/challenges/brightdata-2025-05-07)*

> Scrape. Analyze. Optimize. Let AI decode Instagram profiles for you.

# What I Built

Everyone wants to know some information about instagram profiles about yourself or about other person, this AI will help you understand the profile of people which you want to know more, even if you are not in the person friends list our AI will bring you as much as it can for you in a easy and friendly way, so you will have insigths about the profile you decided to analyse.

In order to do that I have used some technologies which I will cover along the article. All the used tools are mainly free and Bright Data offers for every user some **free credits** to test their product so in this case you are able to test the code below in your own machine after making the account with Bright Data!

## Demo (MCP Server)

I am providing for you a github demo repo project which you can clone and try out the project by yourself, pay attention that in order to see it working you need to have the API keys from the mentioned platforms.

*[Repository with the PHP API plus Bright Data MCP Server please leave a star if you liked :)](https://github.com/RazielRodrigues/ai-brightdata-challenge-api)*

POSTMAN IMAGE

JSON RESPONSE

SYSTEM DESIGN OF MCP SERVER

## Demo (Webhooks)

In this project you are able to test it in Live, here you just put the instagram username and you will get all the information formated in a nice front end and if you want you can also share this information in your own instagram! Like the feature from spotify

LINK TO THE LIVE MODE

IMAGE RESPONSE

SYSTEM DESIGN OF WEBHOOK SERVER

## How I Used Bright Data's Infrastructure

##### First Project (MCP Server)

To work with this first project I have connected directly to the MCP server of Bright Data calling their SCRAPER API using the tools they provide such:

- web_data_instagram_profiles (Quickly read structured Instagram profile data)
- web_data_instagram_posts (Quickly read structured Instagram post data)
- web_data_instagram_reels (Quickly read structured Instagram reels data)
- web_data_instagram_comments (Quickly read structured Instagram comments data)

Which worked great and provided the right data to the LLM I am working, because after getting all the information from the profile in a good way we can proccess and work with it using some LLM this provides for us good scrapped data, I also have used the web unlocker API which is able even to solve captcha in web pages providing for me proxies which is also good to avoid the blocks from instagram, specially when dealing with private profiles.

##### Second Project (Webhooks)

To work with this second project I have used the SCRAPER API from Bright Data calling the same services from the MCP but using the REST api

example request

curl -H "Authorization: Bearer API_TOKEN" -H "Content-Type: application/json" -d '[{"url":"https://www.instagram.com/cats_of_instagram/reel/C4GLo_eLO2e/"},{"url":"https://www.instagram.com/catsofinstagram/p/CesFC7JLyFl/?img_index=1"},{"url":"https://www.instagram.com/cats_of_instagram/reel/C2TmNOVMSbG/"}]' "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_ltppn085pokosxh13&include_errors=true"

In this case I have used the webhooks provided by Bright Data to send a notification to my server when they finished to scrap the data, very easy to implement and after getting this data from the server I just used it in my frontend app and showed to the client

## Performance Improvements

- Publish the MCP API
- Create a custom scrapper using Birght data to scrap more instagram data
- Implement RAG search with the instagram dataset provided by Bright Data

## Conclusion

Bright data is an amazing platform where you can leverage your AI skills and build real life projects to solve business problems, their technical infrastructure is great and everything works. I have enjoyed a lot working with every tool they have and I am looking forward to stay using in the future.

RONALDINHO PLAYER IMAGE

## References

- https://github.com/luminati-io/brightdata-mcp
- https://docs.brightdata.com