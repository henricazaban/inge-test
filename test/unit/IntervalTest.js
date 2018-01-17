describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - include", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(17, 19),
        new Interval(13, 17),
        new Interval(11, 16)

    ].forEach(function (interval) {
        it("interval inclu " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 15),
        new Interval(21, 22),
        new Interval(15, 30)

    ].forEach(function (interval) {
        it("interval non inclu " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});
