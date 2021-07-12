function sendUpdates() {
  var url = DISCORD_WEBHOOK;
  

  var oldVideoName = SpreadsheetApp.getActive().getSheetByName('oldData').getSheetValues(1, 1, 1, 1)[0][0];

  var videos = YouTube.PlaylistItems.list('snippet', {
        playlistId: PLAYLIST_ID,
        maxResults: 5
      });

  var videoTitle = videos.items[0].snippet.title
  var videoId = videos.items[0].snippet.resourceId.videoId;
  var videoURL = `https://www.youtube.com/watch?v=${videoId}` 


  var new_data = new Array(2);

  new_data[0] = videoTitle;
  new_data[1] = videoURL

  console.log(oldVideoName);
  console.log(videoTitle);


  if(oldVideoName !== videoTitle){
  SpreadsheetApp.getActive().getSheetByName('oldData').clear();
  SpreadsheetApp.getActive().getSheetByName('oldData').appendRow(new_data);

  var message = "@everyone there's a new video. Make sure that you drop a LIKE and a COMMENT." + "\n"
                 + videoTitle + "\n" + videoURL;
  

  var discord = {
    "content" : message,
  };

  var options = {
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify(discord)
    };
    
    var response = UrlFetchApp.fetch(url, options);
    Logger.log(response);
  }
}