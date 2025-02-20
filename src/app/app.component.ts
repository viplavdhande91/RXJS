import { of, from, fromEvent, interval } from 'rxjs';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
      next: (nums: any) => console.log('Next item is', nums), //ONE OF THE RECOMMENDED PRACTICE FOR GETTING EMITTED DATA BY OBSERVABLE
      error: (err: any) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    };

    const subscription = nums$.subscribe(observer); //NOT RECOMMENDED PRACTICE FOR GETTING EMITTED DATA BY OBSERVABLE i.e CREATE OBSERVER AND PASS LIKE THIS

    subscription.unsubscribe();
  }

  public ofOperator(): void {
    // const nums$ = of([12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Observable Creation Function : of() : It will emit single Object
    const nums$ = of(12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878); //Observable Creation Function : of() : It will emit all number one by one
    //const nums$ = of(...[12, 34, 45, 32, 12, 33, 56, 788, 9975, 44, 7878]); //Observable Creation Function : of()  : same as From()

    const subscription = nums$.subscribe({
      next: (nums) => console.log('Next item is', nums),
      error: (err) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    });

    subscription.unsubscribe();
  }

  public intervalMethod(): void {
    const nums$ = interval(1000); //Creation Of Observable using interval Method : Emits number continuously after 1 sec

    const subscription = nums$.subscribe({
      next: (nums) => console.log('Next item is', nums),
      error: (err) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

  public fromEventOperator(): void {
    //Observable Creation Function : fromEvent() : Emits number continuously after 1 sec

    const event$ = fromEvent(this.validate?.nativeElement, 'click');
    const subscription = event$.subscribe({
      next: (e) => console.log('Next item is', e),
      error: (err) => console.error('An error occurred :', err),
      complete: () => console.log('Numbers Finished'),
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
