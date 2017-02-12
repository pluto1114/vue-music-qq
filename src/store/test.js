import Vue from 'vue'
import VueResource from 'vue-resource'
var querystring = require('querystring');
Vue.use(VueResource)
import api from './qq-api'
export function gethotkey () {
	var x={
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      };
	var param=querystring.stringify(api.hotkey.params())
	console.log(api.hotkey.params())
    var p=Vue.http.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',{params:api.hotkey.params(),jsonp:'jsonpCallback'});
    //console.log('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',api.hotkey.params()+param)
    p.then(resp=>{
      console.log(resp.data);
    },resp=>{
      console.log("request error");
    });
    return p;
}