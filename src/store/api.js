
import Vue from 'vue'
import VueResource from 'vue-resource'
var querystring = require('querystring');

Vue.use(VueResource)

//Vue.http.options.emulateJSON = true;
var qqAPI={
  
  hot_list: {
    url: 'http://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?',
    params: () => {
      return {
        'disstid':801491460,
        'utf8':1,
        'type':1,
      }
    }
    
  },
  top_list: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
    params: () => {
      return {
        format: 'jsonp',
        g_tk: 5381,
        uin: 0,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        jsonp: 'jsonpCallback',
        _: new Date().getTime()
      }
    }
    
  },
  album: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg',
    params: (id) => {
      return {
        albummid: id,
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
  singer_info: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
    params: (id) => {
      return {
        order: 'listen',
        begin: 0,
        num: 8,
        singermid: id,
        g_tk: 5381,
        uin: 0,
        format: 'jsonp',
        jsonp: 'jsonpCallback',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5page',
        needNewCode: 1,
        from: 'h5',
        _: new Date().getTime()
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
  home_info: {
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    params: () => {
      return {
        g_tk: 5381,
        uin: 0,
        format: 'jsonp',
        jsonp: 'jsonpCallback',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: new Date().getTime()
      }
    },
    
  },
  lyric: {
    url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
    params: (id) => {
      return {
        nobase64:1,
        musicid:id,
        songtype:0,
        jsonp:'callback'
      }
    },
    
  },
  cd_info:{
    url:'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    params:(id)=>{
      return {
        g_tk:5381,
        uin:0,
        format:'jsonp',
        jsonp: 'jsonpCallback',
        inCharset:'utf-8',
        outCharset:'utf-8',
        notice:0,
        platform:'h5',
        needNewCode:1,
        new_format:1,
        pic:500,
        disstid:127812,
        type:1,
        json:1,
        utf8:1,
        onlysong:0,
        nosign:1,
        _:new Date().getTime()
      }
    },
    
  }
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
export function fetchHomeInfo () {
    var p=Vue.http.jsonp(qqAPI.home_info.url,qqAPI.home_info.params());
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
	return p;
}
export function fetchTopSong () {
    var p=Vue.http.jsonp(qqAPI.top_song.url,qqAPI.top_song.params());
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}
export function fetchTopList () {
    // var p=Vue.http.jsonp(qqAPI.top_list.url,{params:qqAPI.top_list.params(),jsonp: 'jsonpCallback'});
    var p=Vue.http.jsonp("http://music.qq.com/musicbox/shop/v3/data/random/1/random1.js?p=12",{jsonp: "callback",jsonpCallback: "JsonCallback"});
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}
export function fetchHotList () {
    var p=Vue.http.jsonp(qqAPI.hot_list.url,{params:qqAPI.hot_list.params(),jsonp: "callback",jsonpCallback: "jsonCallback",scriptCharset:'GBK'});
   
    // console.log(qqAPI.hot_list.url+querystring.stringify(qqAPI.hot_list.params()))
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
export function fetchAlbum () {
    var p=Vue.http.jsonp(qqAPI.album.url,qqAPI.album.params());
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
        console.log("request error");
    });
    return p;
}

export function fetchLyric (music_id) {
    var p=Vue.http.jsonp(qqAPI.lyric.url,qqAPI.lyric.params());
    p.then(resp => {
        console.log(resp.data);
    }, resp => {
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