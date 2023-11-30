> title: "every"
> description: "배열을 순회하며 콜백 함수의 결과가 모두 true라면 true를 반환하는 함수"
> date: "2023-11-27"
> prev: "null"
> next: "/blog/javascript/some"

---

> 배열을 순회하며 콜백 함수의 결과가 모두 true라면 true를 반환하는 함수

every는 콜백 함수를 인자로 받는다.
콜백 함수는 (현재 요소, 인덱스, 호출한 배열)를 인자로 받는다. [some](/blog/javascript/some)

```js
array.every((item, index, array) => {});
```

배열을 순회하며 콜백 함수를 실행하는데 모두 true를 반환해야 true를 반환하고 하나라도 false를 반환하면 false이다.

### 예시

every은 array의 요소를 하나씩 꺼내 콜백함수에 넣어 실행시킨다.
1, 2, 3, 4, 5 전부 실행해도 6보다 작으므로 모두 true이고 결국 최종 결과도 true이다.

```js
const array = [1, 2, 3, 4, 5];
const result = array.every((item) => item < 6); //true
```

## 출처(참고문헌)

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
