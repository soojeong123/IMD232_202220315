console.log('안녕하세요');
console.log(4);
console.log(true);

const two = 2;
console.log(two);

const four = 4;
console.log(four);

let undefinedVal;
console.log(undefinedVal);

const additionConst = two + four;
console.log(additionConst);

let addition = two + four;
console.log(addition);

let subtraction = two - four;
console.log(subtraction);

let multiplication = two * four;
console.log(multiplication);

let division = two / four;
console.log(division);

// additionConst = additionConst + two;
// console.log(additionConst);
//작동안함, const는 한번 값을 입력하면 재입력을 하지 못한다! 상수값

addition = addition + two;
console.log('더하기', addition);
//작동함, 변수이기 때문에!! 앞에 글은 제목?

addition += two;
console.log('더하기', addition);
//위와 같은 뜻

subtraction = subtraction - two;
console.log('빼기', subtraction);

subtraction -= two;
console.log('빼기', subtraction);
subtraction += -two;
console.log('빼기', subtraction);
subtraction += -1 * two;
console.log('빼기', subtraction);
//다 같은 내용, 가독성때문에 바꿔적는다 ~

multiplication = multiplication * two;
console.log('곱하기', multiplication);
multiplication *= two;
console.log('곱하기', multiplication);

console.log('square', '제곱', 8 ** 2);
console.log('세제곱', 8 ** 3);
console.log('root square', '제곱근', 4 ** (1 / 2));
//괄호 해줘야 함!!

division = division / two;
console.log('나누기', division);
division /= two;
console.log('나누기', division);
division *= 1 / two;
console.log('나누기', division);

let counter = 0;
counter += 1;
console.log('counter', counter);
counter += 1;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter--;
console.log('counter', counter);
//+1, -1은 각각 ++, --로 사용 가능하다

let remainder = counter % 8;
//나머지
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
//어떤 숫자를 8로 나누면, 그 나머지가 0~7로 나오게 됨 -> 이걸 응용해 다른 곳에 사용 가능

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
boolean = !boolean;
console.log(boolean);
boolean = !boolean;
console.log(boolean);
//! = not의 의미

const textTwo = '2';
console.log('num + tex', two + textTwo);
console.log('num + num', two + two);
console.log('tex + tex', textTwo + two);
//'' 안에는 문자
console.log('solution', two + Number(textTwo));
//Number -> 텍스트가 숫자일 경우 숫자로 바꿔줌
