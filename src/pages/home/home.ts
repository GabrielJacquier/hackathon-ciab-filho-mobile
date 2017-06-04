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
        'data':'Hoje',
        'descricao':'Burger King',
        'categoria':'Alimentação',
        'valor':24.50
      },
      {
        'data':'Ontem',
        'descricao':'Apple Store',
        'categoria':'Games',
        'valor':3.70
      },
      {
        'data':'01/05/2017',
        'descricao':'Cantina do Pepe',
        'categoria':'Alimentação',
        'valor':13.22
      },
      {
        'data':'01/05/2017',
        'descricao':'Netflix',
        'categoria':'Entretenimento',
        'valor':16.90
      },
      {
        'data':'28/04/2017',
        'descricao':'Padaria Real',
        'categoria':'Varejo',
        'valor':4.70
      },
      {
        'data':'27/04/2017',
        'descricao':'Uber BR',
        'categoria':'Transporte',
        'valor':12.70
      },
      {
        'data':'01/05/2017',
        'descricao':'Cantina do Pepe',
        'categoria':'Alimentação',
        'valor':13.22
      },
      {
        'data':'01/05/2017',
        'descricao':'Papelaria Silvana',
        'categoria':'Varejo',
        'valor':9.22
      },
      {
        'data':'23/05/2017',
        'descricao':'Padaria Real',
        'categoria':'Varejo',
        'valor':4.70
      },
      {
        'data':'22/04/2017',
        'descricao':'SmartFit',
        'categoria':'Saúde',
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
