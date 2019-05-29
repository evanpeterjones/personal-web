function sum(one, two) {
    return one + two
}

test('add values', () => {
    expect(sum(4,4)).toBe(8);
});