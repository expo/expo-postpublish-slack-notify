# expo-postpublish-slack-notify

Post a notification on Slack whenever your project is published.
Presumably you already know this is happening so it's probably more
non-you people, such as your team or your grandparents.

## Installation

1. [Create an incoming webhook](https://api.slack.com/incoming-webhooks) and keep the window open with the URL.
2. `yarn add expo-postpublish-slack-notify` in your project.
3. Add the following to your `exp.json`

```javascript
  "hooks": {
    "postPublish": [
      {
        "file": "expo-postpublish-slack-notify",
        "config": {
          "webhookUrl": "your webhook url here",
          "username": "thisIsOptionalAndIsAValidSlackUsername"
        }
      }
    ]
  }
```
