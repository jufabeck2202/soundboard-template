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
        banner: '',
        interstitial: 'ca-app-pub-jjj/kkk'
      };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
      this.admobId = {
        banner: '',
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
          isTesting:false
        });
      }
    });
  }

  showInterstitial() {
    this.platform.ready().then(() => {
      if(AdMob) {
        AdMob.prepareInterstitial({
          adId: this.admobId.interstitial,
          autoShow: false,
          isTesting:false
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


