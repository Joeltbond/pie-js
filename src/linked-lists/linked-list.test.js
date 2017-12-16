import LinkedList from './linked-list';

describe.skip('LinkedList', () => {
  test('head is properly updated when pushing', () => {
    const list = new LinkedList();
    list.push('a');
    list.push('b');

    expect(list.getHead()).toBe('b');
  });

  test('head is properly updated when pushing', () => {
    const list = new LinkedList();
    list.push('a');
    list.push('b');

    expect(list.getTail()).toBe('a');
  });
});
