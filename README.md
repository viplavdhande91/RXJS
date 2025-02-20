
## NOTES

1. Creation of Observables using **new** Keyword is **not recommended** Practice in Angular.

```bash
  
import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
```


2. An Observer is Consumer of Values who receives values emitted  by Observable .

3. In RXJS observer is also defined as an ***interface*** with **next**,**error** and **complete** callback methods.

4. Observer/Subscriber can Subscribes/Unsubscribes from an Observables and responds to it.



## Observables can emit?

1. Primitives: Number,string,dates

2. Events : e.g mouse events, keystroke events, Value Changes 

3. Objects : Customer,Products

4. Arrays 

5. Http Response


## Observables can be?

1. Synchronous if they emit **finite** emissions e.g [1,2,3]

2. Asynchronous if they emit **infinite** emissions e.g data from http request


## Observable stop emitting data?

1. Call **Complete()** has executed from subscriber (Does Cleanup Activities).

2. by using an operator that automatically completes. e.g **take**

3. Throw an **error** . On error it stops emitting values.

4. Call **unsubscribe()** on the subscription.


