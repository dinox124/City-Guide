import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the BusmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busmore',
  templateUrl: 'busmore.html',
})
export class BusmorePage {
  Busid = this.navParams.get('id');
  Wayinfo = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, ) {

    this.http.get(`https://listsearch.herokuapp.com/getway/${this.navParams.get('id')}`).toPromise().then((info) => {
      console.log(info.json());
      this.Wayinfo = info.json();
      //console.log(this.Wayinfo);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusmorePage');
  }

}
