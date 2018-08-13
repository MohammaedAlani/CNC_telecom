import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  videourl:string;
  videooption :VideoOptions;
  constructor(private videoPlayer : VideoPlayer, public navCtrl: NavController) {

  }
 
  vid1(){
    try{   
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch1/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }

  vid2(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch2/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid3(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch3/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid4(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch4/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid5(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch5/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid6(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch6/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid7(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch7/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid8(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch8/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid9(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch9/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid10(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch10/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid11(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch13/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid12(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch11/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid13(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch12/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid14(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch14/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid15(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch15/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid16(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch109/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid17(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch110/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid18(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch111/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid19(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch112/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid20(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch23/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid21(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch113/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid22(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch116/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid23(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch117/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid24(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch25/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid25(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch26/chunklist_w1109012834.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid26(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch28/chunklist_w1600611076.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid27(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch40/chunklist_w492760074.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid28(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch41/chunklist_w944139899.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid29(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch48/chunklist_w1383964159.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid30(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch44/chunklist_w1851276084.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid31(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch45/chunklist_w198936380.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid32(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch73/chunklist_w1141322017.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid33(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch74/chunklist_w2004862975.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid34(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch75/chunklist_w2091594574.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid35(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch76/chunklist_w1629083328.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid36(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch77/chunklist_w497965640.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid37(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch45/chunklist_w198936380.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid38(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch78/chunklist_w2095894769.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid39(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch79/chunklist_w198781629.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid40(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch80/chunklist_w401259062.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid41(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch81/chunklist_w511538535.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid42(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch83/chunklist_w168337043.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid43(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch82/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid44(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch84/chunklist_w1307299485.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid45(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch50/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }

  vid46(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch104/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid47(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch105/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid48(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch51/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid49(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch52/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid50(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch54/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid51(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch56/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid52(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch58/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid53(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch57/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid54(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch85/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid55(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch59/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid56(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch87/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid57(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch88/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid58(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch90/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid59(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch91/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid60(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch92/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid61(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch93/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }

  vid62(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch94/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  } vid63(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch95/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid64(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch96/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid65(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch97/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid66(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch98/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid67(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch99/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid68(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch100/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid69(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch101/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid70(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch102/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid80(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch103/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid71(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch106/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid72(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch107/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid73(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch126/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid74(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch127/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid75(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch128/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid76(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch129/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid77(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch130/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid78(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://192.168.252.2:1935/live/Ch118/playlist.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
  vid79(){
    try{
      this.videooption={
        volume : 0.7
      }
      this.videourl = "http://172.21.0.2:1935/bein1/1.m3u8"
      this.videoPlayer.play(this.videourl,this.videooption)
}
    catch{
      alert("check your internet connaction")
    }
  }
 
}
