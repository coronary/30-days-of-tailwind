import {videos} from './yt-data.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    videos,
    seen: false
  }
})