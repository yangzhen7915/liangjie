/*
* @Author: klxin
* @Date:   2016-12-21 16:48:22
* @Last Modified by:   klxin
* @Last Modified time: 2018-06-29 19:26:02
*/

'use strict';
window.onload  = function(){
  function getfont (){
    var screen = null;
    if(typeof screen != 'number'){
        if(document.compatMode == 'CSS1Compat'){
            screen = document.documentElement.clientWidth;
        }else{
            screen = document.body.clientWidth;
        }
    }
    console.log(screen);
    if (screen <=320) {
        document.documentElement.style.fontSize = 20+'px';
        document.body.style.fontSize =20+'px';
    }else if(screen >=750){
        document.documentElement.style.fontSize = 40+'px';
        document.body.style.fontSize =40+'px';
    }else{
        document.documentElement.style.fontSize = 0.05333333333333334*screen+'px';
        document.body.style.fontSize = 0.05333333333333334*screen+'px';
    }
        
  };
  getfont();
  window.onresize = function(){
    getfont();
  }
}