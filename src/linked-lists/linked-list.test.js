import LinkedList from './linked-list';

test('returns true', () => {
  const list = new LinkedList();
  list.addFirst(1);
  expect(list.getHead()).toBe(1);
});
