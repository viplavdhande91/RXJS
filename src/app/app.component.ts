import { of, from, fromEvent, interval, Subscription } from 'rxjs';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  subFrom !: Subscription;
  subOf !: Subscription;
  subInterval !: Subscription;
  subFromEvent !: Subscription;

  @ViewChild('templateRefVariable', { static: true }) validate!: ElementRef;

  constructor() {}
  ngOnInit(): void {
    //this.fromOperator();
    //this.ofOperator();
    //this.intervalMethod();
    //this.fromEventOperator();
  }

  public fromOperator(): void {
    const nums$ = from([12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Observable Creation Function : From()

    const observer = {
      next: (nums: any) => console.log('Next item is', nums), 
      error: (err: any) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    };

    this.subFrom = nums$.subscribe(observer); //NOT RECOMMENDED PRACTICE FOR GETTING EMITTED DATA BY OBSERVABLE i.e CREATE OBSERVER AND PASS LIKE THIS

    this.subFrom.unsubscribe();
  }

  public ofOperator(): void {
    // const nums$ = of([12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Observable Creation Function : of() : It will emit single Object
    const nums$ = of(12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878); //Observable Creation Function : of() : It will emit all number one by one
    //const nums$ = of(...[12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Observable Creation Function : of()  : same as From()

    this.subOf = nums$.subscribe({
      next: (nums) => console.log('Next item is', nums),
      error: (err) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    });

    this.subOf.unsubscribe();
  }

  public intervalMethod(): void {
    const nums$ = interval(1000); //Creation Of Observable using interval Method : Emits number continuously after 1 sec

    this.subInterval = nums$.subscribe({
      next: (nums) => console.log('Next item is', nums),
      error: (err) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    });

    setTimeout(() => {
      this.subInterval.unsubscribe();
    }, 5000);
  }

  public fromEventOperator(): void {
    //Observable Creation Function : fromEvent() : Emits number continuously after 1 sec
    const event$ = fromEvent(this.validate?.nativeElement, 'click');
    this.subFromEvent = event$.subscribe({
      next: (e) => console.log('Next item is', e),
      error: (err) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    });

    setTimeout(() => {
      this.subFromEvent.unsubscribe();
    }, 5000);
  }
}
