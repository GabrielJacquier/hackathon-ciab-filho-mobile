import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopupoverPage } from '../popupover/popupover';
import { UpgradePage } from '../upgrade/upgrade';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private item:any;
  private extratos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.item="extrato";
    this.extratos = [
      {
        'data':'Today',
        'descricao':'Burger King',
        'categoria':'Food',
        'valor':24.50
      },
      {
        'data':'Yestarday',
        'descricao':'Apple Store',
        'categoria':'Games',
        'valor':3.70
      },
      {
        'data':'05/01/2017',
        'descricao':'Burger King',
        'categoria':'Food',
        'valor':13.22
      },
      {
        'data':'05/01/2017',
        'descricao':'Netflix',
        'categoria':'Entertainment',
        'valor':16.90
      },
      {
        'data':'04/28/2017',
        'descricao':'CVS',
        'categoria':'Retail',
        'valor':4.70
      },
      {
        'data':'04/27/2017',
        'descricao':'Uber',
        'categoria':'Transport',
        'valor':12.70
      },
      {
        'data':'04/26/2017',
        'descricao':'Mc Donalds',
        'categoria':'Food',
        'valor':13.22
      },
      {
        'data':'04/25/2017',
        'descricao':'CVS',
        'categoria':'Retail',
        'valor':9.22
      },
      {
        'data':'04/23/2017',
        'descricao':'Gymboree',
        'categoria':'Retail',
        'valor':4.70
      },
      {
        'data':'04/22/2017',
        'descricao':'SmartFit',
        'categoria':'Health',
        'valor':59.90
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopupoverPage);
    popover.present(event);
  }

  onUpgradeClick(event) {
    let popover = this.popoverCtrl.create(UpgradePage);
    popover.present();
  }
}
