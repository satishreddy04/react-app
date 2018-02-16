import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
const API_KEY= 'AIzaSyA-dRMhREAg-LwhwBh5yt7t2s987szpiLI';


class youtubeApp extends Component {
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        
        };
 

        this.videoSearch('React Js')
      

    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(data) =>{
            this.setState({
                videos:data,
                selectedVideo:data[0]
            
            });
            console.log(data);
          })

    }
  render() {

    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);


    return (
        <div>
         <SearchBar onSearchTermChange={videoSearch} />
         <VideoDetail  video={this.state.selectedVideo}/>
         <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
        </div>
    );
  }
}

export default youtubeApp;