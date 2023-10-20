saveWL()

async function saveWL() {
  const sleep = require('util').promisify(setTimeout)
  const file = await require('fs').readFileSync('wl_ids.txt','utf8')
  for (const line of file.split('\n')) {
    try {
      await sleep(500)
      var id = line.replace(/[^\w-]/gi, '')
      var response = await addToPlaylist(id)
      var json = await response.json()
      if (!response.ok || json.status != 'STATUS_SUCCEEDED') {
        console.error(json)
        console.error(id)
        console.error('\n')
      }
    } catch (error) {
      console.error('%s\n%s', id, error)
      throw error
    }
  }
}

async function addToPlaylist(id) {
  return await fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist")
}
