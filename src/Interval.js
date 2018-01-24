Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.end > interval.end && this.start < interval.start;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	if(this.overlaps(interval))
		return new Interval(Math.min(this.start,interval.start),Math.max(this.end,interval.end));
	else
		throw "Infaisable";
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if(this.overlaps(interval))
		return new Interval(Math.max(this.start,interval.start),Math.min(this.end,interval.end));
	else
		return null;
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
	var tab = new Array(2);
	if (this.overlaps(interval)) 
		{
			tab[0]=new Interval(Math.min(this.start,interval.start),Math.max(this.start,interval.start));
			tab[1]=new Interval(Math.min(this.end,interval.end),Math.max(this.end,interval.end));
			return tab;
		}
	else
		{
			tab[0]=this;
			tab[1]=interval;
			return tab;
		}
};



