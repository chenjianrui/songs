import React from 'react'
import { connect } from 'react-redux'
const SongDetail = ({ selectSong }) => {
  if(!selectSong){
    return (<div>Select a song</div>)
  }
  return (
    <div>
      <h1>{ selectSong.title }</h1>
      <p>{ selectSong.duration }</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    selectSong: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)