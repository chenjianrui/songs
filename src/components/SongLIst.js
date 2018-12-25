import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
  render () {
    const { songs } = this.props
    const songList = songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
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
  console.log(state)
  return {
    songs: state.songs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectSong: (song) => dispatch(selectSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)