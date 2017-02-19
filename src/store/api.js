
import Vue from 'vue'
import VueResource from 'vue-resource'
var querystring = require('querystring');

Vue.use(VueResource)

//Vue.http.options.emulateJSON = true;
var qqAPI={
  
 
  album: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg',
    params: (id) => {
      return {
        albummid: id,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    },
    
  },
  song_info: {
    url: '/qq-m-api/v8/fcg-bin/fcg_play_single_song.fcg',
    params: (mid) => {
      return {
        'songmid':mid,
        'format':'json',
      }
    },
    
  },
  search: {
    url: 'http://c.y.qq.com/soso/fcgi-bin/search_cp?',
    params: (key) => {
      return {
        'p':1,
        'n':15,
        'w':key,
        'aggr':1,
        'lossless':1,
        'cr':1,        
      }
    }
    
  },
  hotkey: {
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
    params: () => {
      return {
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        jsonp: 'jsonpCallback',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    },
    
  },
  
  lyric: {
    url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
    params: (id) => {
      return {
        nobase64:1,
        musicid:id,
        songtype:0
      }
    },
    
  },
  
    

}

export function search (word) {
    var p=Vue.http.jsonp(qqAPI.search.url,{params:qqAPI.search.params(word),jsonp: 'jsonpCallback'});
    console.log(qqAPI.search.url+querystring.stringify(qqAPI.search.params(word)))
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}

export function fetchSongInfo (song_mid) {
    var p=Vue.http.get(qqAPI.song_info.url,{params:qqAPI.song_info.params(song_mid)});
    //var p=Vue.http.get("/qq-m-api/v8/fcg-bin/fcg_play_single_song.fcg?songmid=001Ud2bQ0u61uC&format=json");
    console.log(qqAPI.song_info.url+'?'+querystring.stringify(qqAPI.song_info.params(song_mid)))
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}

export function fetchHotkey () {
	var p=Vue.http.jsonp(qqAPI.hotkey.url,qqAPI.hotkey.params());
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}
export function fetchAlbum (albummid) {
    var p=Vue.http.jsonp(qqAPI.album.url,{params:qqAPI.album.params(albummid),jsonp: 'jsonpCallback',});
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}

export function fetchLyric (songid) {
    var p=Vue.http.jsonp('https://api.darlin.me/music/lyric/'+songid+'/',{params:qqAPI.lyric.params(songid),jsonp:'callback'});
    p.then(resp => {
        console.log(resp);
    }, resp => {
        console.log(resp);
        console.log("request error");
    });
    return p;
}
export function fetchHitAll () {
	var p=Vue.http.jsonp(baseListUrl+'/musicbox/shop/v3/data/hit/hit_all.js');
    p.then(resp=>{
      console.log(resp.data);
    },resp=>{
      console.log("request error");
    });
    return p;
}

export function fetchHitNewSong () {
    var p=Vue.http.jsonp(baseListUrl+'/musicbox/shop/v3/data/hit/hit_newsong.js');
    p.then(resp=>{
      console.log(resp.data);
    },resp=>{
      console.log("request error");
    });
    return p;
}