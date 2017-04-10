import { Component } from '@angular/core';

import { NavController,Platform } from 'ionic-angular';
declare let AdMob: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private admobId: any;

  constructor(public navCtrl: NavController,private platform: Platform) {
    this.platform = platform;
    //checks what platform it is runnion on
    if(/(android)/i.test(navigator.userAgent)) {
      this.admobId = {
        banner: 'ca-app-pub-xxx/yyy',
        interstitial: 'ca-app-pub-jjj/kkk'
      };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
      this.admobId = {
        banner: 'ca-app-pub-ddd/sss',
        interstitial: 'ca-app-pub-ppp/zzz'
      };
    }
    this.createBanner();
    this.showBanner("bottom");
    this.showInterstitial()

  }
  createBanner() {
    this.platform.ready().then(() => {
      if(AdMob) {
        AdMob.createBanner({
          adId: this.admobId.banner,
          autoShow: true,
          isTesting:true
        });
      }
    });
  }

  showInterstitial() {
    this.platform.ready().then(() => {
      if(AdMob) {
        AdMob.prepareInterstitial({
          adId: this.admobId.interstitial,
          autoShow: true,
          isTesting:true
        });
      }
    });
  }

  showBanner(position) {
    this.platform.ready().then(() => {
      if(AdMob) {
        let positionMap = {
          "bottom": AdMob.AD_POSITION.BOTTOM_CENTER,
          "top": AdMob.AD_POSITION.TOP_CENTER
        };
        AdMob.showBanner(positionMap[position.toLowerCase()]);
      }
    });
  }

  hideBanner(position) {
    this.platform.ready().then(() => {
      if(AdMob) {
        AdMob.hideBanner();
      }
    });
  }
  items = [
    {"name":"two be continued","file":"assets/2to-be-continued.mp3"},
    {"name":"dio WRYYY","file":"assets/dio-wryyy.mp3"},
    {"name":"goodbye jojo","file":"assets/goodbye-jojo.mp3"},
    {"name":"run","file":"assets/joestar-run.mp3"},
    {"name":"Joooo Joooo","file":"assets/jojo.mp3"},
    {"name":"OH NO","file":"assets/joseph-joestar-_oh-no_.mp3"},
    {"name":"NICE","file":"assets/joseph-joestar-nice.mp3"},
    {"name":"KONO DIO DA","file":"assets/kono-dio-da99.mp3"},
    {"name":"JOJO INTRO","file":"assets/new-jjbatas-pb-intro.mp3"},
    {"name":"OH SHIT","file":"assets/OH SHIT.mp3"},
    {"name":"rero rero rero","file":"assets/rero-rero-rero.mp3"},
    {"name":"SON OF A BITCH","file":"assets/SON OF A BITCH.mp3"},
    {"name":"who the hell do you think i am","file":"assets/who-the-hell-do-you-think-i-am-.mp3"},



  ];
  media: any = null;

  itemSelected(item){
    console.log(item);
    if(this.media) {
      this.media.pause();
    }
    this.media = new Audio(item.file);
    this.media.load();
    this.media.play();

  }

 }


