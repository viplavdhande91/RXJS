## RXJS Operators ?

### 1.  pipe()
 - Used to apply methods sequentially using the other operators
 - When Pipeable Operators are called, they do not change the existing Observable instance. Instead, they return a new Observable, whose subscription logic is based on the first Observable.

![pipe](https://github.com/viplavdhande91/RXJS/blob/rxjs-operators/rxjsoperators.png?raw=true)


### 2. map()
- map is a transformational operators
  - subscribes to its input Observable
  - Create Output Observable
- When an item is emitted
  - Item is transformed as specified by a Provided Function
  - Transformed item is emitted to Output Observable

  ```bash

    of(10, 20, 30, 40).pipe(

      map(item => item * 2),

    ).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log('complete'),
    });
  ```

### 3. tap()
 - tap emits item without affecting it.It emits value as it is.

 ```
    tap(item => console.log(item))
 ```

 - for each item emitted in ,the same item is emitted out.

 - User for 
    - Debugging

 - tap is utility operator which subscribes to input observable and creates an Output Observable

 - Performs a  side effect as provided by Provider Function. 

 ### 4. Take()
 - emits a specific number of items

 ```
    take(2)
 ```

 - Automatically completes

 - Used for
    - Taking specifed number of items
    - Limiting unlimited Observables

    ![take1](https://github.com/viplavdhande91/RXJS/blob/main/take1.png?raw=true)


![take2](https://github.com/viplavdhande91/RXJS/blob/main/take%202.png?raw=true)
