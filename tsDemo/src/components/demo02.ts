interface Person {
  name: string,
  age: number
}

const demo1: number[] = [1, 2, 3];
const demo2: string[] = ['a', 'b', 'c'];
const demo3: Person[] = [{ name: 'alex', age: 20 }, { name: 'john', age: 10 }, { name: 'hx', age: 21 }];

demo1.map((item) => item);
demo2.map((item) => item);
demo3.map((item) => item);

interface Result<T> {
  success: true,
  code: number,
  descript: string,
  result: T
}

interface Person {
  name: string,
  age: number
}

interface Page<T> {
  current: number,
  pageSize: number,
  total: number,
  data: T[]
}

function fetchData(): Promise<Result<Page<Person>>> {
  return http.get('/api/demo/page/person');
}

enum p {
  UP, DOWN, LEFT, RIGHT
}

console.log(p.UP);
console.log(p[0]);