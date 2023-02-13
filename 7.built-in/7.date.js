// Coordinated Universal Time (UTC)
console.log(new Date());
console.log(new Date('May 7, 1993'));
console.log(new Date('1993-05-07T12:30:00'));

console.log(Date.now());
console.log(Date.parse('2023-02-13T19:37:00')); // 1676284620000

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0: 1
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1
console.log(now.getDay());
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
console.log(now.toLocaleString('ja-JP'));
