import { of, from, fromEvent, interval, Observable, Subscription } from 'rxjs';
import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('templateRefVariable',{ static: true }) validate !: ElementRef ;

  constructor(private elm: ElementRef) {
  }
  ngOnInit(): void {

    //this.fromOperator();
    //this.ofOperator();
    //this.intervalMethod();
    this.fromEventOperator();
  }
  title = 'rxjs-handson';


  public fromOperator(): void {

    const nums$ = from([12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Creation Of Observable using From Method
    const observer = {
      next: (nums: any) => console.log("Next item is", nums),
      error: (err: any) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished')
    };
    const subscription = nums$.subscribe(observer); //NOT RECOMMENDED PRACTICE I.E CREATE OBSERVER AND PASS LIKE THIS

    subscription.unsubscribe();


  }

  public ofOperator(): void {

    //  const nums$ = of([12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Creation Of Observable using of Method : It will emit single Object

     const nums$ = of(12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878); //Creation Of Observable using of Method : It will emit all number one by one


    //const nums$ = of(...[12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Creation Of Observable using of Method : same as from

    const subscription = nums$.subscribe(
      {
        next: (nums) => console.log("Next item is", nums),
        error: err => console.error('An error occurred :', err),
        complete: () => console.log('Numbers Finished')
      }
    )

    subscription.unsubscribe();


  }


  public intervalMethod(): void {
    const nums$ = interval(1000); //Creation Of Observable using interval Method : Emits number continuously after 1 sec

    const subscription = nums$.subscribe(
      {
        next: (nums) => console.log("Next item is", nums),
        error: err => console.error('An error occurred :', err),
        complete: () => console.log('Numbers Finished')
      }
    )

    setTimeout(() => {
      subscription.unsubscribe();

    }, 5000)

  }


  public fromEventOperator(): void {  //Creation Of Observable using fromEvent Method : Emits number continuously after 1 sec

    const event$ = fromEvent(this.validate?.nativeElement, 'click');
    const subscription = event$.subscribe(
      {
        next: (e) => console.log("Next item is", e),
        error: err => console.error('An error occurred :', err),
        complete: () => console.log('Numbers Finished')
      }
    )

    setTimeout(() => {
      subscription.unsubscribe();

    }, 5000)
  }

  
}
