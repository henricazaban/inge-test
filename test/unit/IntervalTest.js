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

describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            i : new Interval(15, 25),
            r : new Interval(10,25)
        },
        {
            i : new Interval(8, 12),
            r : new Interval(8,20)
        },
        {
            i : new Interval(8, 30),
            r : new Interval(8, 30)
        },
        {
            i : new Interval(12, 16),
            r : new Interval(10, 20)
        }
    ].forEach(function (interval) {
        it("interval union " + testedInterval.toString() + " and " + interval.i.toString() + " : " + interval.r.toString(), function () {
            var result = testedInterval.union(interval.i).toString();
            expect(result).toEqual(interval.r.toString());
        });
    });

    [
        new Interval(2, 8),
        new Interval(22, 32)

    ].forEach(function (interval) {
        it("interval union Infaisable"),function(){
            var f = function(){
                testedInterval.union(interval)
            }
            expect(f).toThrow("Infaisable");
        }

    });
});

describe("Interval - intersection", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            i : new Interval(15, 25),
            r : new Interval(15,20)
        },
        {
            i : new Interval(8, 12),
            r : new Interval(10,12)
        },
        {
            i : new Interval(8, 30),
            r : new Interval(10, 20)
        },
        {
            i : new Interval(12, 16),
            r : new Interval(12, 16)
        }
    ].forEach(function (interval) {
        it("interval intersection " + testedInterval.toString() + " and " + interval.i.toString() + " : " + interval.r.toString() , function () {
            var result = testedInterval.intersection(interval.i).toString();
            expect(result).toEqual(interval.r.toString());
        });
    });

    [
        {
            i : new Interval(2, 8),
            r : null
        },
        {
            i : new Interval(22, 32),
            r : null
        }

    ].forEach(function (interval) {
        it("interval intersection " + testedInterval.toString() + " and " + interval.i.toString() + " : " + interval.r, function () {
            var result = testedInterval.intersection(interval.i);
            expect(result).toEqual(interval.r);
        });
    });
});


describe("Interval - exclusion", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            i : new Interval(15, 25),
            r : new Array(new Interval(10,15),new Interval(20,25))
        },
        {
            i : new Interval(8, 12),
            r : new Array(new Interval(8,10),new Interval(12,20))
        },
        {
            i : new Interval(8, 30),
            r : new Array(new Interval(8,10),new Interval(20,30))
        },
        {
            i : new Interval(12, 16),
            r : new Array(new Interval(10,12),new Interval(16,20))
        },
        {
            i : new Interval(25, 40),
            r : new Array(new Interval(10,20),new Interval(25,40))
        }
    ].forEach(function (interval) {
        it("interval exclusion " + testedInterval.toString() + " and " + interval.i.toString() + " : " + interval.r.toString() , function () {
            var result = testedInterval.exclusion(interval.i).toString();
            var eq = interval.r[0].toString() + "," + interval.r[1].toString();
            expect(result).toEqual(eq);
        });
    });
});
