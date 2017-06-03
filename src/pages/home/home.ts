import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExtratoPage } from '../extrato/extrato';
import { MetaDetalhePage } from '../meta-detalhe/meta-detalhe';
import { MetaCadastroPage } from '../meta-cadastro/meta-cadastro';

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

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onAddClick($event) {
    this.navCtrl.push(MetaCadastroPage, {
      //NavParams
    });
  }

  onExtratoClick($event) {
    this.navCtrl.push(ExtratoPage, {
      //NavParams
    });
  }

  onItemClick($event) {
    this.navCtrl.push(MetaDetalhePage, {
      //NavParams
    });
  }
}
