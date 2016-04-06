/** @module config **/


var parseArgs = require('minimist');

/**
 * Represents a configuration of the current launch.
 * @constructor
 * @property {string} url - The url of the page to be checked.
 * @property {bool} DEBUG - Flag showing if the debug mode is on.
 * @property {string} elementName - The name for clobbering.
*/
var Config = function() {
	this.args = parseArgs(require('system').args.slice(1));
	this.url = this.args.url;
	this.DEBUG = true;
	this.elementName = this.args.taint_name;
	this.testMode = this.args.test;
	this.xpath = '//form[2]';
};


var config = new Config();

/** The object holding current configuration.**/
exports.config = config;
module.exports = config;
	
