alert('안녕하세요');
let userTyped = prompt('이름이 무엇인가요?', '홍길동');
let confirmVal = confirm('당신의 이름이 ' + userTyped + '이 맞습니까?');
if (confirmVal == true) {
  alert('환영합니다. ' + userTyped + ' 님.');
}
