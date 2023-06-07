## Going Reactive
Going reactive means programming with a focus on async data streams. Deborah says this improves performance, handles state, reacts to user actions, and simplifies our code!


###  Working with the async pipe
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

#### Benefits of an async pipe
- No need to subscribe
- No need to unsubscribe
- Option to improve performance by modifying the change detection
### Handling Errors
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he1.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he2.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he3.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he4.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he5.png?raw=true)
![handling error 1](https://github.com/viplavdhande91/RXJS/blob/going-reactive/he6.png?raw=true)


### Improve Change Detection Strategies
- Default — every component is checked when any change is detected

- OnPush — improves performance by minimizing change detection cycles

We can set the change detection strategy in the component decorator like this:
```
changeDetection: ChangeDetectionStrategy.OnPush

```
The performance impact only becomes noticeable if we are working on a screen with a lot of different UI elements.

When in the OnPush change detection strategy, we need to tell Angular when to do change detection.

### Declarative Pattern for Data Retrieval
Benefits of a Declarative Approach

- Leverages the power of RxJS operators
- Can effectively combine Observable streams
- Easily share Observables
- Readily react to user actions
