# Save `Youtube` video ids to `Watch Later` playlist

## Save `Watch later` playlist

#### Before starting, you should close browser
### Get cookies from Chrome browser
`yt-dlp --cookies-from-browser chrome --cookies chrome_cookies.txt`
#### You can skip `yt-dlp` error to provide at least one URL

### Save `Watch later` playlist to file
`yt-dlp --cookies chrome_cookies.txt --get-id --flat-playlist 'https://www.youtube.com/playlist?list=WL' > wl_ids.txt`


## Download video files from `Watch later` playlist

### Using url
`yt-dlp -o '%(video_autonumber)03d. %(upload_date)s - %(title)s [%(id)s].%(ext)s' -f b 'https://www.youtube.com/playlist?list=WL'`

### Using file
`yt-dlp -o '%(video_autonumber)03d. %(upload_date)s - %(title)s [%(id)s].%(ext)s' -f b -a wl_ids.txt`


## Save ids from file to `Watch later` playlist
- Open Chrome web browser
- Open Chrome Developer Tools
- Select `Network` tab
- Open `Youtube` web site
- `Save to Watch Later` random video
- Select `edit_playlist` request
- `Copy` -> `Copy as Node.js fetch`
- Put clipboard data into `saveWL.js` `addToPlaylist` function
- Modify `addedVideoId`:
```json
\"actions\":[{\"addedVideoId\":\"<video_id>\",\"action\":\"ACTION_ADD_VIDEO\"}]
```
->
```json
\"actions\":[{\"addedVideoId\":\"" + id + "\",\"action\":\"ACTION_ADD_VIDEO\"}]
```
- Run script using Node.js: `node saveWL.js`


License
-------

    Copyright 2023 Dmytro Volkovskyi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.