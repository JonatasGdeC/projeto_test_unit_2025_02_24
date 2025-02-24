const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
});

test('soma 10 - 5 igual a 5', () => { 
    expect(math.subtract(10, 5)).toBe(5); 
}); 

test('soma 10 * 5 igual a 50', () => { 
    expect(math.multiply(10, 5)).toBe(50); 
}); 

test('soma 10 / 5 igual a 2', () => { 
    expect(math.divide(10, 5)).toBe(2); 
}); 