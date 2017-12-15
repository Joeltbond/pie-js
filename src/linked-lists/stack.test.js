import Stack from './stack';

describe('Stack', () => {
  test('push adds to the list', () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.getHead()).toBe(1);
  });

  test('push adds the the front of the list', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.getHead()).toBe(2);
  });

  test('pop returns the first item on the list', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
  });

  test('pop removes the returned item from the front of the list', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();

    expect(stack.getHead()).toBe(1);
  });

  test('popping an empty stack should return null', () => {
    const stack = new Stack();

    expect(stack.pop()).toBe(null);
  });

  test('toArray returns', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.toArray()).toEqual([1,2]);

  });
});
