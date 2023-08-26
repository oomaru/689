import { AfterContentChecked, AfterContentInit, Component, OnInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {


  travels = [
    {destination: 'Giappone', duration: '15 giorni', price: '5000 €', description: 'Vieni a scoprire le meraviglie del Sol Levante'}
  ]

  image = ''
  image1 = 'https://media.nomadicmatt.com/2023/japanfirsttime1.jpeg'
  image2 = 'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg'
  

  constructor() {
  console.log("constructor");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    let counter = 0
    setInterval(() => {
      if(counter%2 == 0){
        this.image = this.image1
      } else {
        this.image = this.image2
      }
      counter++
    }, 1000)
    
  }
}
