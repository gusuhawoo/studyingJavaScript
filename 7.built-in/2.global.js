console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num =2; console.log(num)'); // string -> JS
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false
console.log(parseFloat('12.43')); // string -> number
console.log(parseInt('12.43')); // 12.43 -> 12

// URL (URI, Uniform Resource Identifier)
// Consists of ASCII characters only.
// special characters should be escaped.
const URL = 'https://한글&日本語.com';
const encoded = encodeURI(URL); //encode
console.log(encoded); // https://%ED%95%9C%EA%B8%80&%E6%97%A5%E6%9C%AC%E8%AA%9E.com

const decoded = decodeURI(encoded); //decode
console.log(decoded); // https://한글&日本語.com

//Not the entire URL, but the partial one is using component.
const part = '한글&日本語.com'; // part
console.log(encodeURIComponent(part)); // %ED%95%9C%EA%B8%80%26%E6%97%A5%E6%9C%AC%E8%AA%9E.com
