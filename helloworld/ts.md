# TypeScript 특징
- 컴파일 언어, 정적 타입 언어
- 자바스크립트 슈퍼셋
- 객체 지향 프로그래밍 지원

# 설치
    npm install -g typescript

# 기본 타입
```typeScript
// 불리언
let isDoone: boolean = false;

// 숫자
let decimal: number = 6; // 10진수
let hex: number = 0x001; // 16진수
let binary: number = 01011; // 2진수
let octal: number = 0o744 // 8진수

// 문자열
let name1: string = "홍길동";
let name2: string = '홍길동';

// 배열
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 튜플(요소의 갯수와 타입이 고정됨)
let tuple1: [string, number];

// 열거(0부터 시작)
enum color {Red, Green, Blue}
let colorNumber = color.Red // 값: 0
let colorName: string = color[1]; // 값: Red

// Any 알지 못하는 타입, 동적인 컨텐츠가 올 때 사용
let anyVal: any = 4;

// Void 어떤 타입도 존재할 수 없음
function myFun(): void {
    console.log('Hello Void');
}

// 객체(Object), 원시 타입이 아닌 객체, Naver 등등
```

# 함수 타입 설정
```typescript
function add(a: number, b:number): number {
    return a+b;
}
```

# 인터페이스
- 타입을 정의한 규칙을 의미

```typescript
interface Usr {
    age: number;
    name: string;
}

// 변수와 함수에 인터페이스 적용
var person: Usr = {
    age: 30,
    name: 'Sun'
}

function getUsr(usr: Usr) {
    console.log(usr);
}

// 확장
interface newUsr extends Usr {
    lang: string;
}
```
## 참고 자료
[삼성 인사이트](https://www.samsungsds.com/kr/insights/typescript.html)
