# Going Reactive
Going reactive means programming with a focus on async data streams. Deborah says this improves performance, handles state, reacts to user actions, and simplifies our code!


##  Working with the async pipe
![async pipe 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/gr1.png?raw=true)

![async pipe 2](https://github.com/viplavdhande91/RXJS/blob/going-reactive/gr2.png?raw=true)


![async pipe 3](https://github.com/viplavdhande91/RXJS/blob/going-reactive/gr3.png?raw=true)

```
<div *ngIf="products">

```
We change this to
```
<div *ngIf="products$ | async as products">

```


- Deborah demonstrates how much code we can remove using this technique: we don’t need an ngOnDestroy method or to implement OnDestroy at all anymore in the product list component.

## Handling Errors
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he1.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he2.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he3.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he4.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he5.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he6.png?raw=true)

- The two basic strategies for error handling with observables:

   - Catch and Replace
   - Catch and Rethrow
    - Deborah introduces the catchError operator. This is an error handling operator.The  catch and replace strategy effectively replaces the observable data with other defined data when there is an error.

        - The catch and rethrow gives us a chance to log the error, or do some other processing with it, and then rethrows it with the throwError operator.

        - If this bubbles all the way up, the user gets notified that there was an error.The throwError operator is a creation function.

- Deborah also introduces **EMPTY**. This is a constant representing an empty observable. This is followed by a demonstration of these error handling strategies.
![error handline strategies1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/ehs1.png?raw=true)
![error handline strategies2](https://github.com/viplavdhande91/RXJS/blob/going-reactive/ehs2.png?raw=true)

![error handline strategies3](https://github.com/viplavdhande91/RXJS/blob/going-reactive/ehs3.png?raw=true)
![error handline strategies4](https://github.com/viplavdhande91/RXJS/blob/going-reactive/ehs4.png?raw=true)


#### Benefits of an async pipe
- No need to subscribe
- No need to unsubscribe
- Option to improve performance by modifying the change detection
- 
## Improve Change Detection Strategies
![change detection](https://github.com/viplavdhande91/RXJS/blob/going-reactive/cd1.png?raw=true)



We can set the change detection strategy in the component decorator like this:
```
changeDetection: ChangeDetectionStrategy.OnPush

```
The performance impact only becomes noticeable if we are working on a screen with a lot of different UI elements.

When in the OnPush change detection strategy, we need to tell Angular when to do change detection.

## Declarative Pattern for Data Retrieval
Benefits of a Declarative Approach
![Procedural Approach ](https://github.com/viplavdhande91/RXJS/blob/going-reactive/dp1.png?raw=true)

![Declarative Approach](https://github.com/viplavdhande91/RXJS/blob/going-reactive/dp2.png?raw=true)

- Leverages the power of RxJS operators
- Can effectively combine Observable streams
- Easily share Observables
- Readily react to user actions
