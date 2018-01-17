describe("Factoriel", function() {
  var i = [
	  {
	  	n:0,
	  	r:1
	  },
	  {
	  	n:1,
	  	r:1
	  },
	  {
	  	n:2,
	  	r:2
	  },
	  {
	  	n:3,
	  	r:6
	  },
	  {
	  	n:4,
	  	r:24
	  },
	  {
	  	n:5,
	  	r:120
	  }
  ];
  i.forEach(function(j){
  	it("retourne " + j.r + " pour n=" +j.n, function() {
    	var result = Util.factorial(j.n);
    	expect(result).toEqual(j.r);
  	})	
  })

  it("Doit être supérieur à 0"),function(){
  	var f = function(){
  		Util.factorial(-1);
  	}
  	expect(f).toThrow("Factorielle inférieure à 0");
  }

  it("Doit être inférieur à 100"),function(){
  	var f = function(){
  		Util.factorial(101);
  	}
  	expect(f).toThrow("Factorielle supérieure à 100");
  }
  
});



describe("Arrangement", function() {
  var i = [
	  {
	  	n:0,
	  	r:0,
	  	res:1
	  },
	  {
	  	n:3,
	  	r:2,
	  	res:6
	  },
	  {
	  	n:1,
	  	r:0,
	  	res:1
	  },
	  {
	  	n:2,
	  	r:2,
	  	res:2
	  },
	  {
	  	n:10, 
	  	r:8, 
	  	res: 1814400
	  }
  ];
  i.forEach(function(j){
  	it("Pour n=" + j.n + " et r=" + j.r +" alors res=" + j.res, function() {
    	var result = Util.arrangement(j.n,j.r);
    	expect(result).toEqual(j.res);
  	})	
  })

  it("N plus petit que R"),function(){
  	var f = function(){
  		Util.arrangement(8,10);
  	}
  	expect(f).toThrow("N plus petit que R");
  }

});


 // Formule: Util.combination(n, r) = n! / (n - r)!r!
describe("Combination", function() {
  var i = [
	  {
	  	n:0,
	  	r:0,
	  	res:1
	  },
	  {
	  	n:3,
	  	r:2,
	  	res:3
	  },
	  {
	  	n:1,
	  	r:0,
	  	res:1
	  },
	  {
	  	n:2,
	  	r:2,
	  	res:1
	  },
	  {
	  	n:10, 
	  	r:8, 
	  	res:45
	  }
  ];
  i.forEach(function(j){
  	it("Pour n=" + j.n + " et r=" + j.r +" alors res=" + j.res, function() {
    	var result = Util.combination(j.n,j.r);
    	expect(result).toEqual(j.res);
  	})	
  })

   it("N plus petit que R"),function(){
  	var f = function(){
  		Util.combination(8,10);
  	}
  	expect(f).toThrow("N plus petit que R");
  }

});


describe("isPrime", function() {
  var i = [
	  {
	  	n:1,
	  	r:true
	  },
	  {
	  	n:-4,
	  	r:false
	  },
	  {
	  	n:-5,
	  	r:true
	  },
	  {
	  	n:15,
	  	r:false
	  },
	  {
	  	n:17, 
	  	r:true
	  },
	  {
	  	n:39,
	  	r:false
	  }
  ];
  i.forEach(function(j){
  	it("n=" + j.n + " alors isPrime=" + j.r , function() {
    	var result = Util.isPrime(j.n);
    	expect(result).toEqual(j.r);
  	})	
  })
});

describe("sumPrime", function() {
  var i = [
	  {
	  	n:6,
	  	r:10
	  },
	  {
	  	n:8,
	  	r:17
	  },
	  {
	  	n:11,
	  	r:28
	  },
	  {
	  	n:23,
	  	r:100
	  },
	  {
	  	n:3, 
	  	r:5
	  },
	  {
	  	n:4,
	  	r:5
	  }
  ];
  i.forEach(function(j){
  	it("n=" + j.n + " alors sumPrime=" + j.r , function() {
    	var result = Util.sumPrime(j.n);
    	expect(result).toEqual(j.r);
  	})	
  })
});