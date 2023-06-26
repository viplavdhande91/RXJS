## Understanding rxjs BehaviorSubject, ReplaySubject and AsyncSubject

### Definition: 
- **What is a Subject?** An RxJS Subject is a **special type of Observable** that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

### 1. The BehaviorSubject

- One of the variants of the Subject is the BehaviorSubject. The BehaviorSubject has the characteristic that it stores the “current” value. This means that **you can always directly get the last emitted value from the BehaviorSubject.**

There are two ways to get this last emited value. 
 - You can either get the value by accessing the **.value** property on the BehaviorSubject 
  - or you can subscribe to it. If you subscribe to it, the BehaviorSubject will directly emit the current value to the subscriber. Even if the subscriber subscribes much later than the value was stored. See the example below:


  ```javascript
        import * as Rx from "rxjs";

        const subject = new Rx.BehaviorSubject();

        // subscriber 1
        subject.subscribe((data) => {
            console.log('Subscriber A:', data);
        });

        subject.next(Math.random());
        subject.next(Math.random());

        // subscriber 2
        subject.subscribe((data) => {
            console.log('Subscriber B:', data);
        });

        subject.next(Math.random());

        console.log(subject.value)

        // output
        // Subscriber A: 0.24957144215097515
        // Subscriber A: 0.8751123892486292
        // Subscriber B: 0.8751123892486292
        // Subscriber A: 0.1901322109907977
        // Subscriber B: 0.1901322109907977
        // 0.1901322109907977
  ```


### 2.The ReplaySubject
The ReplaySubject is comparable to the BehaviorSubject in the way that it **can send “old” values to new subscribers.** It however has the extra characteristic that it can record a part of the observable execution and therefore **store multiple old values** and “replay” them to new subscribers.

#### Notes: 

- When creating the ReplaySubject you can specify how much values you want to store and for how long you want to store them. In other words you can specify: **“I want to store the last 5 values, that have been executed in the last second prior to a new subscription”**. See example code below:

```javascript
        import * as Rx from "rxjs";

        const subject = new Rx.ReplaySubject(2);

        // subscriber 1
        subject.subscribe((data) => {
            console.log('Subscriber A:', data);
        });

        subject.next(Math.random())
        subject.next(Math.random())
        subject.next(Math.random())

        // subscriber 2
        subject.subscribe((data) => {
            console.log('Subscriber B:', data);
        });

        subject.next(Math.random());
        //Output
        // Subscriber A: 0.3541746356538569
        // Subscriber A: 0.12137498878080955
        // Subscriber A: 0.531935186034298
        // Subscriber B: 0.12137498878080955
        // Subscriber B: 0.531935186034298
        // Subscriber A: 0.6664809293975393
        // Subscriber B: 0.6664809293975393


```

#### 3. The AsyncSubject
While the BehaviorSubject and ReplaySubject both store values, the AsyncSubject works a bit different. The AsyncSubject is aSubject variant where **only the last value** of the Observable execution is sent to its subscribers, and **only when the execution completes.** See the example code below:


```javascript
import * as Rx from "rxjs";

const subject = new Rx.AsyncSubject();

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next(Math.random())
subject.next(Math.random())
subject.next(Math.random())

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next(Math.random());
subject.complete();

// Subscriber A: 0.4447275989704571
// Subscriber B: 0.4447275989704571


```



## 🔗 Reference Links 
[Medium Article](https://luukgruijs.medium.com/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0)

