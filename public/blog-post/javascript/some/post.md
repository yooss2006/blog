> title: "some"
> description: "배열을 순회하며 콜백 함수의 결과가 하나라도 true라면 true를 반환하는 함수"
> date: "2023-11-27"
> prev: "/blog/javascript/every"
> next: "null"

---

> 배열을 순회하며 콜백 함수의 결과가 하나라도 true라면 true를 반환하는 함수

some는 콜백 함수를 인자로 받는다.
콜백 함수는 (현재 요소, 인덱스, 호출한 배열)를 인자로 받는다.

```js
array.some((item, index, array) => {});
```

배열을 순회하며 콜백 함수를 실행하는데 하나라도 true를 반환하면 true이고 전부 다 false를 반환하면 false이다.

### 예시

some은 array의 요소를 하나씩 꺼내 콜백함수에 넣어 실행시킨다.
2가 들어간 시점에 `2 % 2 === 0`이 true가 되고 순회를 종료하며 result에 true를 반환한다.
**반환 값이 true인 시점에 순회를 종료한다.**

```js
const array = [1, 2, 3, 4, 5];
const result = array.some((item) => item % 2 === 0);
```

## 출처(참고문헌)

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
