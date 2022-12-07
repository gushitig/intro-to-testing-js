// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string "Hello, World!" when true is input', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when false is input', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with an empty string', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should never return 'null' when called", function() {
        expect(sayHello()).not.toBe(null);
    });
    it('should return the string "Hello, World!" when a number is input', function() {
        expect(sayHello(2.3)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when a number inside a string is input', function() {
        expect(sayHello("5")).toBe("Hello, World!")
    });

});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true when 5 is entered', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when string 5 is entered', function() {
        expect(isFive("5")).toBe(true);
    });

});


describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when 2 is entered', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when 14 is entered', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is entered', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when banana is entered', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when string 8 is entered', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is entered', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a the boolean true is entered', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when the boolean false is entered', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed', function() {
        expect(isEven()).toBe(false);
    });

});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when "a" is entered', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is entered', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" is entered', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when "4" is entered', function() {
        expect(isVowel("4")).toBe(false);
    });
    it('should return false when true is entered', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when false is entered', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when "banana" is entered', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when "" is entered', function() {
        expect(isVowel("")).toBe(false);
    });
});


describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });

    it('should return 5 when add(2, 3)', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when add(-3, -9)', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when add("5", 6)', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when add("-4", "10")', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when add("banana", "split")', function() {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('should return NaN when add(2, "apples")', function() {
        expect(add(2, "apples")).toBe(NaN);
    });
    it('should return NaN when add()', function() {
        expect(add()).toBe(NaN);
    });
});