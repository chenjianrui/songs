import { combineReducers } from 'redux'

const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:22'},
    { title: 'Macarena', duration: '3:22'},
    { title: 'All Star', duration: '3:21'},
    { title : 'I Want It That Way', duration: '4:00'}
  ]
}

const SelectedSongReducer = (selectedSong = null, action) => {
  switch(action.type){
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong
  }
}

export default combineReducers({
  songs: songReducer,
  selectedSong: SelectedSongReducer
})