# Youtube Video Notifier in Discord

This will notify everyone in discord if a video is uploaded in a given youtube channel

## Steps to Be Followed:
* Create a empty Google Spreadsheet and rename the `sheet1` as `oldData`
* Go to Tools &#8594; Script Editor 
* copy the code from `sendUpdates.gs` and paste it in `code.gs`
* [Create a webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) in discord and paste it in place of url
* [Add](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services) `YouTube Data API` service to your App Script
* Click `Run` for testing 
* If there are no errors then [Add a Trigger](https://developers.google.com/apps-script/guides/triggers/installable#managing_triggers_manually) for running the script automatically

#### Now you will get notified in discord if a video is uploaded in a given YouTube Channel :)
