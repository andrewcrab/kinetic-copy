/**
 * Created by Andrew on 14-8-15.
 */
describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});
describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });
});

describe("A spy, when configured with an alternate implementation", function() {
    var foo, bar, fetchedBar;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.callFake(function() {
            return 1001;
        });

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function() {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(1001);
    });
});