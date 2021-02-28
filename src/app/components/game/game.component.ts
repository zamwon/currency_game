import {Component, OnInit} from '@angular/core';
import {CurrencyClient, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  rootObject: RootObject;
  messageForUser: string;
  result: string;
  counter = 0;

  constructor(private currencyClientService: CurrencyClient) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  // tslint:disable-next-line:typedef
  sayHello(value: string) {
    this.messageForUser = 'hello ' + value;
  }

  // tslint:disable-next-line:typedef
  check(value: number) {
    if (value > this.rootObject.rates.PLN) {
      this.counter++;
      this.result = 'Podałeś za dużą wartość';
    } else if (value < this.rootObject.rates.PLN) {
      this.counter++;
      this.result = ' Podałeś za małą wartość';
    } else {
      this.counter++;
      this.result = 'Udało się za ' + this.counter + ' razem! Gratulację!';
    }
  }
}
