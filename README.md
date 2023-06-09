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
Since the time was not sufficient to write all the data connectors (to Microsoft Graph API, AzureDevops API, Jira amd Confluence API), I've created a JSON with manually added entries to have a functional POC.
I've built this on top of the chatGPT rephrasing example, and if you give a minified JSON input such as this:

You should be able to get back an activity report like this:

TODO - Deploy your full-stack solution using [genezio](https://genez.io/). You can use [these examples](https://github.com/Genez-io/genezio-examples) as a starting point.
TODO - Provide a link to your live app so we can test it out.
