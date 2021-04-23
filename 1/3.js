function solution(num) {
  let anwser = '';

  for (let i = 0; i < num; i++) {
    anwser += i % 2 === 0 ? '수' : '박';
  }
  return anwser;
}

const anwser = solution(5);
console.log(anwser);