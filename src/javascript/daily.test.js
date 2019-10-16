import functions from './daily'

// // test('Check the sizes', () => {
// //     expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
// //     expect(functions.size(0)).toBe("small");
// //     expect(functions.size(10)).toBe("medium");
// //     expect(functions.size(15)).toBe("medium");
// //     expect(functions.size(20)).toBe("large");
// //     expect(functions.size(2000000)).toBe("large");
// // });

// test('Does that add function work?', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// });

// test('Is it all good?', () => {
//     expect(functions.assertEquals(2)).toBe("2 is all good");
//     expect(functions.assertEquals(101)).toBe("101 is all good");
// });



/*
    Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    console.log(functions);
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});


