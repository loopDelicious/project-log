import React, { Component } from 'react'
import Spinner from './spinner'
import Images from './images'
import Buttons from './buttons'
// import { API_URL } from './config'
import '../css/imageUploader.css'

const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:4000'

export default class App extends Component {
  
    state = {
      uploading: false,
      images: []
    }
  
    onChange = e => {
      const files = Array.from(e.target.files)
      this.setState({ uploading: true })
  
      const formData = new FormData()
  
      files.forEach((file, i) => {
        formData.append(i, file)
      })
  
      fetch(`${API_HOST}/image-upload`, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(images => {
        this.setState({ 
          uploading: false,
          images
        })
      })
    }
  
    removeImage = id => {
      this.setState({
        images: this.state.images.filter(image => image.public_id !== id)
      })
    }
    
    render() {
      const { uploading, images } = this.state
  
      const content = () => {
        switch(true) {
          case uploading:
            return <Spinner />
          case images.length > 0:
            return <Images images={images} removeImage={this.removeImage} />
          default:
            return <Buttons onChange={this.onChange} />
        }
      }
  
      return (
        <div>
          <div className='buttons'>
            {content()}
          </div>
        </div>
      )
    }
  }