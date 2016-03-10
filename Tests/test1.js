var TestCase = require('./tests').TestCase;
var proxy = require('proxy');

var proxyCreationTest = new TestCase(
		'Proxy Creation',
		function() {
			var obj = {'foo': 'bar'};
			var pr = proxy.ObjectProxy(obj, 'base');
			return proxy.storage.getTaintedNames();
		},
		["base"],
		proxy.storage.clearTaintedObjects.bind(proxy.storage)
);

var proxyPropagationTest = new TestCase(
		'Proxy Propagation',
		function () {
			var obj = {'foo': 'bar'};
			var pr = proxy.ObjectProxy(obj, 'base');
			var x = pr;
			return proxy.storage.isObjectTainted(x);
		},
		true,
		proxy.storage.clearTaintedObjects.bind(proxy.storage)
);


var tests = [proxyCreationTest, proxyPropagationTest];
exports.tests = tests;
exports.testSuite = 'Basic proxy creation and propagation';
