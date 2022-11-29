import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import './index.css'

/* const overlayStyle = {
  backgroundColor: 'white',
} */

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <Popup
      model
      trigger={
        <button type="button" className="thumbline-btn">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </button>
      }
      className="popup-content"
      position="center center"
    >
      {close => (
        <div className="popup-item">
          <button
            className="close-btn"
            type="button"
            onClick={() => close()}
            testid="closeButton"
          >
            <IoMdClose className="close-icon" />
          </button>
          <div className="popup-video">
            <ReactPlayer
              url={videoUrl}
              width="400px"
              height="300px"
              config={{
                youtube: {
                  playerVars: {showinfo: 1},
                },
              }}
            />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
