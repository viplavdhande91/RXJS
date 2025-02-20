## RXJS Operators ?

### 1.  pipe()
 - Used to apply operations sequentially using the other operators
 - When we **subscribe to Observable** it automatically subscribes to the first input observable in the chain and returns Observable. It further propogates through chain.

![pipe](https://github.com/viplavdhande91/RXJS/blob/rxjs-operators/rxjsoperators.png?raw=true)


### 2. map()
- map is a transformational operator
  - subscribes to its input Observable
  - Create Output Observable
- When each item is emitted
  - Item is transformed as specified by a Provided Function
  - Transformed item is emitted to Output Observable

  ```javascript
    of(10, 20, 30, 40).pipe(

      map(item => item * 2),

    ).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log('complete'),
    });
  ```

### 3. tap()
 - tap emits item without affecting it. It emits value as it is.

 ```javascript
    tap(item => console.log(item))
 ```

 - for each item emitted in ,the same item is emitted out.

 - User for 
    - **Debugging**

   - tap is utility operator which subscribes to input observable and creates an Output Observable

   - Performs a  side effect as provided by Provider Function. 

 ### 4. Take()
 - emits a specific number of items

 ```javascript
    take(2)
 ```

 - Automatically callbacks complete() after emittting 2 items

 - Used for
    - Taking specifed number of items
    - Limiting unlimited Observables

![take2](https://github.com/viplavdhande91/RXJS/blob/main/take%202.png?raw=true)
