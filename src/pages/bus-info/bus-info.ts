import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
/**
 * Generated class for the BusInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-bus-info',
  templateUrl: 'bus-info.html',
})
export class BusInfoPage {

  countries: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, public rest: RestApiProvider) { }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error => this.errorMessage = <any>error);
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  openReview(nrcv) {
    console.log(nrcv);
    this.navCtrl.push("BusdetailPage", {    nrcv    });
  }
}
