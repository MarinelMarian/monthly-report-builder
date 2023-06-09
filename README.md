# Genezio - Ultimate Developer Challenge!

[![deployed with: genezio](https://img.shields.io/badge/deployed_with-genezio-6742c1.svg?labelColor=62C353&style=flat)](https://github.com/genez-io/genezio)

Use this template for the genezio challenge at Techsylvania 2023.

# Monthly report builder


## Previous Workflow

Working with the team on a research project, we must fill in a monthly report that needs to contain a summary of relevant activities done each day (commits, PRs, communications, meetings, decisions, etc.).
This is a very tedious job and it usually takes around 6 hours to complete. 

## Solution Description
By using the data gathered from the:
+ monthly calendar (meetings) from Outlook
+ the history of all chat conversations (and calls) from Microsoft Teams 
+ the commits and PRs from AzureDevops 
+ artifacts in Jira and Confluence 

the raw data can be given to GPT to compile a monthly report of summarized activities broken down by days.


## Deployment
Since the time was not sufficient to write all the data connectors (to Microsoft Graph API, AzureDevops API, Jira and Confluence API), I've created a JSON with manually added entries to have a functional POC.
I've built this on top of the chatGPT rephrasing example, and if you give a valid JSON input such as this:
```json
{"conversations":[{"id":1,"name":"Daily","messages":[{"id":1,"text":"Hey guys, are your ready for our daily standup?","timestamp":"2023-05-01T10:29:29Z","user":{"id":1,"name":"Marinel"}},{"id":2,"text":"Sure, let's do it!","timestamp":"2023-05-01T10:30:30Z","user":{"id":2,"name":"Ana"}},{"id":3,"text":"Great meeting guys! As mentioned in the meeting, I will be on vacation next week.","timestamp":"2023-05-01T10:58:58Z","user":{"id":3,"name":"Alex"}},{"id":4,"text":"With Alex on vacation I need somebody to take over his tasks. Any volunteers?","timestamp":"2023-05-09T13:29:29Z","user":{"id":1,"name":"Marinel"}},{"id":5,"text":"Count me in! I will take over Alex's tasks and prepare the demo for them.","timestamp":"2023-05-09T13:45:45Z","user":{"id":4,"name":"Dani"}},{"id":6,"text":"I just finished the prep for the demo. Marinel, I will send you the link to the demo in a few minutes.","timestamp":"2023-05-12T09:05:00Z","user":{"id":4,"name":"Dani"}},{"id":7,"text":"Great! I'm looking forward to it.","timestamp":"2023-05-12T09:15:00Z","user":{"id":1,"name":"Marinel"}},{"id":8,"text":"Guys, the demo went great! We got the green light to implement the additional features we've discussed in advance.","timestamp":"2023-05-13T10:30:00Z","user":{"id":1,"name":"Marinel"}},{"id":9,"text":"Hmm, I'm not sure we'll have enough time for all of them, but for the top 5 we should be ok.","timestamp":"2023-05-12T09:15:00Z","user":{"id":2,"name":"Ana"}}]},{"id":2,"name":"Alex","messages":[{"id":1,"text":"Hey Alex, make sure you fill in your timesheet for this week before you go on vacation.","timestamp":"2023-05-01T00:12:00Z","user":{"id":1,"name":"Marinel"}},{"id":3,"text":"Sure thing!","timestamp":"2023-05-01T00:12:05Z","user":{"id":3,"name":"Alex"}}]}],"meetings":[{"id":1,"name":"Daily","timestamp":"2023-05-01T10:30:30Z","duration":30,"recurrence":"daily","participants":[{"id":1,"name":"Marinel"},{"id":2,"name":"Ana"},{"id":3,"name":"Alex"},{"id":4,"name":"Dani"}]},{"id":2,"name":"Demo","timestamp":"2023-05-12T15:00:00Z","duration":90,"recurrence":"every other week","participants":[{"id":1,"name":"Marinel"},{"id":2,"name":"Ana"},{"id":3,"name":"Alex"},{"id":4,"name":"Dani"}]},{"id":3,"name":"Retro","timestamp":"2023-05-13T15:00:00Z","duration":60,"recurrence":"every other week","participants":[{"id":1,"name":"Marinel"},{"id":2,"name":"Ana"},{"id":3,"name":"Alex"},{"id":4,"name":"Dani"}]}],"commits":[{"id":"c441029cf673f84c8b7db52d0a5944ee5c52ff89","distinct":true,"message":"updated readme","timestamp":"2023-05-04T12:18:30Z"},{"id":"36c5f2243ed24de58284a96f2a643bed8c028658","distinct":true,"message":"added authentication and authorization","timestamp":"2023-05-09T16:18:30Z"},{"id":"1481a2de7b2a7d02428ad93446ab166be7793fbb","distinct":true,"message":"added unit and integration tests","timestamp":"2023-05-11T117:50:30Z"},{"id":"a6976cfa2d5bdea555893fd2f9c5b8e761fa4989","distinct":true,"message":"Merge pull request #1 from repo/branch","timestamp":"2023-05-14T11:19:30Z"}],"pull_requests":[{"number":1,"title":"added authentication and authorization","timestamp":"2023-05-13T117:50:30Z","head":{"sha":"a6976cfa2d5bdea555893fd2f9c5b8e761fa4989","ref":"branch","repo":{"name":"repo","url":""}}}]}
```

You should be able to get back an activity report like this:
```json
[{
    "date": "2023-05-01",
    "summary": "Daily standup conversation held, Alex was reminded to fill in his timesheet before vacation."
  }, {
    "date": "2023-05-09",
    "summary": "Marinel asked for volunteers to fill in Alex's tasks while on vacation, and Dani volunteered."
  }, {
    "date": "2023-05-12",
    "summary": "Demo meeting was held, Dani finished preparing the demo, and sent the link to Marinel."
  }, {
    "date": "2023-05-13",
    "summary": "Retro meeting was held, Demo went great and the team got the green light to implement additional features, Alex drew attention to the time constraints of achieving all of them."
  }, {
    "date": "2023-05-14",
    "summary": "A commit was made that merged a pull request #1 from repo/branch."
  }
]
```

The link to the live app so you can test it out:
[coral-creative-llama.app.genez.io](https://coral-creative-llama.app.genez.io/)
