"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = exports.Style = function () {
	function Style(token, selector, body) {
		_classCallCheck(this, Style);

		this.token = token;
		this.selector = selector;
		this.body = body;
		this.parents = {};
		this.children = {};
	}

	_createClass(Style, [{
		key: "addChild",
		value: function addChild(signature) {
			this.children[signature] = true;
		}
	}, {
		key: "addParent",
		value: function addParent(selector) {
			this.parents[selector] = selector;
		}
	}, {
		key: "getChildren",
		value: function getChildren() {
			return this.children;
		}
	}, {
		key: "hasChild",
		value: function hasChild(signature) {
			return this.children[signature];
		}
	}]);

	return Style;
}();