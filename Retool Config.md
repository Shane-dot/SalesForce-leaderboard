1. Create a SalesForce resource in Retool -> https://retool.com/integrations/salesforce

2. Create a Slack Resource in Retool -> https://retool.com/integrations/slack 

3. Create a Retool workflow -> https://retool.com/products/workflows

4. Retool workflow flow:
  1. Create trigger (daily, weekly etc)
  2. Run SalesForce query -> SalesForce query.txt
  3. Run JavaScript to process the data and create the slack message -> proces_SalesForce_to_Slack Message.js
  4. Send Slack Message, config to the channel to send to: 

<img width="406" alt="Screenshot1" src="https://github.com/Shane-dot/SalesForce-leaderboard/assets/54682778/f65d87a0-5b3c-41d0-97ed-d6064f748b3d">

Overall workflow:
<img width="1211" alt="Screenshot2" src="https://github.com/Shane-dot/SalesForce-leaderboard/assets/54682778/5d708ec2-bfc3-4b89-9437-ae1cd1584c9b">
