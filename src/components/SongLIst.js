import React, { Component } from 'react'
import { connect } from 'react-redux'
class SongList extends Component {
  render () {
    console.log(this.props.selectedSong)
    const { songs } = this.props
    const songList = songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={this.props.selectedSong}>
              Selet
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
    return (
      <div className="ui divided list">{ songList }</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    selectedSong: (dispatch) => console.log(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)