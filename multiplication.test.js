const multiplication = require('./multiplication');

describe('multiplication', ()=>{
    test('it multiplies correctly', () =>{
        expect(multiplication(5,3)).toBe(15)
        expect(multiplication(1,0)).toBe(0)
    })
    test('it will return NaN if input does not contain two numbers', () => {
        expect(multiplication(1)).toEqual(NaN)
        expect(multiplication(1, 'a')).toEqual(NaN)
    })

})