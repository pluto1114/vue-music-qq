import Vue from 'vue'
import Vuex from 'vuex'
import {fetchSongInfo,fetchAlbum,fetchLyric} from '../store/api'
import _ from 'lodash'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        showWelcome: true,
        searchWordArr: localStorage.searchWords ? JSON.parse(localStorage.searchWords) : [],
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
        FETCH_SONG_LIST(context, options) {
            let p = fetchSongList(options);
            return p;
        },
        FETCH_SONG_INFO(context, song_mid) {
            let p = fetchSongInfo(song_mid);
            return p;
        },
        FETCH_LYRIC(context, music_id) {
            let p = fetchLyric(music_id);
            return p;
        },
        
    },
    mutations: {
        hideWelcome(state) {
            state.showWelcome = false;
        },
        addSearchWord(state, payload) {
            if (state.searchWordArr.indexOf(payload.value) < 0) {
                state.searchWordArr.unshift(payload.value);
            }
            if (state.searchWordArr.length > 5) {
                state.searchWordArr = state.searchWordArr.slice(0, 5);
            }

            localStorage.searchWords = JSON.stringify(state.searchWordArr);
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
