
# Understanding RxJS BehaviorSubject, ReplaySubject, and AsyncSubject  

## 📌 What is a Subject?  
An RxJS **Subject** is a special type of **Observable** that allows values to be **multicasted** to multiple Observers. Unlike plain Observables (which are unicast), Subjects share their execution among all subscribers.  

---

## 1️⃣ BehaviorSubject  
A **BehaviorSubject**:  
✔️ Stores the **current value** and emits it immediately to new subscribers.  
✔️ Allows accessing the last emitted value using `.value`.  

### Example:  
```javascript
import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject(0); // Initial value

subject.subscribe((data) => console.log("Subscriber A:", data));

subject.next(10);
subject.next(20);

subject.subscribe((data) => console.log("Subscriber B:", data));

subject.next(30);
console.log(subject.value);

// Output:
// Subscriber A: 0
// Subscriber A: 10
// Subscriber A: 20
// Subscriber B: 20
// Subscriber A: 30
// Subscriber B: 30
// 30
```

---

## 2️⃣ ReplaySubject  
A **ReplaySubject**:  
✔️ Stores multiple past values and replays them to new subscribers.  
✔️ Can be configured to store a specific number of values.  

### Example:  
```javascript
import { ReplaySubject } from "rxjs";

const subject = new ReplaySubject(2); // Stores last 2 values

subject.subscribe((data) => console.log("Subscriber A:", data));

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe((data) => console.log("Subscriber B:", data));

subject.next(4);

// Output:
// Subscriber A: 1
// Subscriber A: 2
// Subscriber A: 3
// Subscriber B: 2
// Subscriber B: 3
// Subscriber A: 4
// Subscriber B: 4
```

---

## 3️⃣ AsyncSubject  
An **AsyncSubject**:  
✔️ Only emits **the last value** but **only after completion**.  
✔️ Subscribers won’t receive any value until `.complete()` is called.  

### Example:  
```javascript
import { AsyncSubject } from "rxjs";

const subject = new AsyncSubject();

subject.subscribe((data) => console.log("Subscriber A:", data));

subject.next(100);
subject.next(200);
subject.next(300);

subject.subscribe((data) => console.log("Subscriber B:", data));

subject.next(400);
subject.complete();

// Output:
// Subscriber A: 400
// Subscriber B: 400
```

---

## 🔍 Differences at a Glance  

| Feature           | BehaviorSubject  | ReplaySubject  | AsyncSubject |
|------------------|----------------|----------------|--------------|
| Stores Last Value? | ✅ Yes | ✅ Yes (Multiple) | ✅ Yes (Only Last) |
| Emits on Subscribe? | ✅ Immediately | ✅ Immediately (All Stored) | ❌ Only on Complete |
| Stores History? | ✅ One Value | ✅ Multiple Values | ❌ No |
| Requires Completion? | ❌ No | ❌ No | ✅ Yes |

---

## 🔗 Reference Links  
[Medium Article](https://luukgruijs.medium.com/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0)  

### ✅ Improvements:  
- **Simplified explanations** for easy understanding.  
- **Compact code examples** with real-world relevance.  
- **Comparison table** for quick reference.  

