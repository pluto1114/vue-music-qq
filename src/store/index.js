import Vue from 'vue'
import Vuex from 'vuex'
import {fetchSongInfo,fetchAlbum,fetchLyric,search} from '../store/api'
import _ from 'lodash'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        hisSongArr: localStorage.hisSongArr ? JSON.parse(localStorage.hisSongArr) : [],
        lyricArr: [],
        lrcTimeArr: [],
        playing:false,
        audio:new Audio(),
        currentTime:0,
        lrcCurIndex:0
    },
    getters: {
        
    },
    actions: {
        FETCH_SONG_LIST(context, word) {
            let p = search(word);
            return p;
        },
        FETCH_SONG_INFO(context, song_mid) {
            let p = fetchSongInfo(song_mid);
            console.log("p",p)
            return p;
        },
        FETCH_LYRIC(context, music_id) {
            let p = fetchLyric(music_id);
            return p;
        },
        
    },
    mutations: {
        
        addHisSong(state, payload) {
          
            state.hisSongArr.unshift(payload.song);
         
            if (state.hisSongArr.length > 10) {
                state.hisSongArr = state.hisSongArr.slice(0, 10);
            }

            localStorage.hisSongArr = JSON.stringify(state.hisSongArr);
        },
       
        loadLyric(state, payload) {
            state.lyricArr = payload.lyricArr;
            state.lrcTimeArr=_.map(state.lyricArr,'time');
        },
        play(state){
            state.playing=true;
            state.audio.play();
        },
        pause(state){
            state.playing=false;
            state.audio.pause();
        },
        changePlayPos(state,time){
            state.audio.currentTime=time;
        },
        changeCurrentTime(state,currentTime){
            state.currentTime=currentTime;
            state.lrcCurIndex=_.sortedIndex(state.lrcTimeArr, currentTime);
            for (var i = 0; i < state.lyricArr.length; i++) {
                state.lyricArr[i].selected = false;
            }
            if (state.lrcCurIndex > 0) {
                state.lyricArr[state.lrcCurIndex - 1].selected = true;
            }

        },
    }

});


export default store
