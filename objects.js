var playlist = {};


function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;

  return playlist;
}

function removeFromPlaylist(playist, artist){
  delete playlist.artist;
  return playlist;
}