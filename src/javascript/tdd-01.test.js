
test('hello world console.log1', () => {
    console.log("Hello World 1");
});

test('hello world console.log2', () => {
    console.log("Hello World 2");
});

test('check a string to see if it is the same', () => {
    expect('abcd').toEqual('abcd');
});

// test('check an array see if it is the same', () => {
//     expect([1, 2, 4, 3]).toEqual([1, 2, 3, 4]);
// });

test('emailBuilder test', () => {
    expect(functions.emailBuilder('larry', 'shumlich')).toEqual('l.shumlich@evolveu.ca');
});

