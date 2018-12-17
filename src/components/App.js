import React from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import PredictVideos from './PredictVideos';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null , predictedVideos: [], filtered: '', toggler: true};
    this.apiResponse = (term) => youtube.get('/search', {params: {q: term}});
  }
                    
  onTermSubmit = async term => {
    const response = await this.apiResponse(term)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideosPredict = async term =>{
    const response = await this.apiResponse(term)
      this.setState({
        predictedVideos: response.data.items,
        filtered: term
      });
    
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  renderPredictVideos(){
    if(this.state.filtered === '' || this.state.toggler === false){
     return ;
    } else {
      return <PredictVideos predicts={this.state.predictedVideos} filtered={this.state.filtered} onToggler={this.renderToggler} onSelect={this.onVideoSelect} /> 
    }
  }

  renderToggler = (bool) => {
    this.setState({ toggler: bool})
  }

  

  render() {
    const renderToggler = _.debounce((bool) => { this.renderToggler(bool) } , 200)
    const {  selectedVideo, videos } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} predict={this.onVideosPredict} onToggler={renderToggler} />
         {this.renderPredictVideos()}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
