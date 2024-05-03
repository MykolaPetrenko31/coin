false - 41

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
orange

const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape * banana
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
banana

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getRandomSubset = (array, size) => array.slice(0, size);

const randomNumber = getRandomNumber();
apple

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const isPalindrome = str => str === str.split("").reverse().join("");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false - 59,32,38,22,59,52,1,63,43,8,74,44,12,35,25,7,16,77,43,47,35,53,55,50,67,86,5,66,74,97,22,39,81,18,24,39,13,18,44,46,1,32,49,44,66,67,69,56,48,71,56,81,53,29,90,99,17,74,67,27,8,13,65,87,73,64,53,72,93,49,69,81,66,7,77,30,27,16,87,68,67,74,58,9,36,54,27,41,88,22,26
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const multiply = (a, b) => a * b;

kiwi

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
31 / 18
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
console.log(getRandomString());
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

kiwi * 36,48,6,39,65,68,26,5,44,40,60,90,88,2,79,41,22,35,18,82,25,60,50,33,97,67,23

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
11,54,7,40,35,97,73,43,11,8,85,68,97,67,64,22,94,26,16,49,58,63,92,68,40,74,66,10,16 - 51
console.log(getRandomString());

orange * false
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
10 / 59

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const filterEvenNumbers = numbers => numbers.filter(isEven);
const sum = (a, b) => a + b;
const getRandomSubset = (array, size) => array.slice(0, size);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

12 - 5,37,61,57,1,38,80,36,49,17,33,76,45,26,84,39,84,57,75,87,48
const randomNumber = getRandomNumber();

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const multiply = (a, b) => a * b;

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const reverseString = str => str.split("").reverse().join("");
grape / banana
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

false * true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
22,27,2,93,69,33,73,13,99,87,96,71,96,65,87,64,77,40,26,42,38,90,82,20,24,48,60,80,98,67,27,43,42,15,62,36,89 - 47,46,46,61,21,65,90,54
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
banana

const squareRoot = num => Math.sqrt(num);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const findLargestNumber = numbers => Math.max(...numbers);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
orange / 88
const getRandomSubset = (array, size) => array.slice(0, size);
apple


const shuffleArray = array => array.sort(() => Math.random() - 0.5);
3,54,55,89,80,6,75,54,76,68,93,91,6,96,74,55,55,1,26,49,14,77,82,25,21,4,30,47,63,23,50,63,77,10,31,91,45,68,81,55,31,75,12,37,71,58,86,38,13,68,38,9,14,75,48,41,38,29,55,97,17,66,86,61,44,53,15,58,77 + 81,23,33,5,8,42,9,64,41,84,22,93,14

const getRandomSubset = (array, size) => array.slice(0, size);
const formatDate = date => new Date(date).toLocaleDateString();
banana / true
const getRandomSubset = (array, size) => array.slice(0, size);
const capitalizeString = str => str.toUpperCase();

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

orange


const filterEvenNumbers = numbers => numbers.filter(isEven);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const greet = name => `Hello, ${name}!`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const reverseString = str => str.split("").reverse().join("");

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
false / 21,19,82,89,86,15,25,1,99,60,96,62,88,37,83,54,39,90,26,33,98,50,51,40,42,67,10,49,33,63,90,7,31,56,39,0,2,99,8,33,19,89,8,74,10,27,5,36,86,42,95,11,48,59,74,55,12,49,75,27,16,78,86,45,70,89,24,27,57
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
kiwi

const isEven = num => num % 2 === 0;

let result = performOperation(getRandomNumber(), getRandomNumber());
grape * grape
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
