import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the BusdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busdetail',
  templateUrl: 'busdetail.html',
})
export class BusdetailPage {
  Nrc = this.navParams.get("nrcv");
  bus: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, ) {

    this.http.get(`https://listsearch.herokuapp.com/getstage/${this.navParams.get('nrcv')}`).toPromise().then((info) => {
      console.log(info.json());
      this.bus = info.json();
    });
  }

  ionViewDidLoad() {
    console.log(this.Nrc);
  }
  openWay(id) {
    console.log(id);
    this.navCtrl.push("BusmorePage", { id });
  }
}
