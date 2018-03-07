window["War"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/models/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/models/card.ts":
/*!****************************!*\
  !*** ./src/models/card.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Card = /** @class */ (function () {\n    function Card(suit, rank) {\n        this.suit = suit;\n        this.rank = rank;\n        this.revealed = false;\n    }\n    // override to use comparison operators\n    Card.prototype.valueOf = function () {\n        return this.rank;\n    };\n    Object.defineProperty(Card.prototype, \"isRevealed\", {\n        get: function () {\n            return this.revealed;\n        },\n        set: function (reveal) {\n            if (typeof reveal !== \"boolean\") {\n                throw new TypeError();\n            }\n            this.revealed = reveal;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Card;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n\n//# sourceURL=webpack://War/./src/models/card.ts?");

/***/ }),

/***/ "./src/models/deck.ts":
/*!****************************!*\
  !*** ./src/models/deck.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/models/card.ts\");\n/* harmony import */ var _hand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hand */ \"./src/models/hand.ts\");\n/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rank */ \"./src/models/rank.ts\");\n/* harmony import */ var _suit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suit */ \"./src/models/suit.ts\");\n\n\n\n\nvar Deck = /** @class */ (function () {\n    function Deck() {\n        var _this = this;\n        this.cards = [];\n        Object.keys(_rank__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).filter(function (key) { return isNaN(Number(key)); }).forEach(function (rank) {\n            Object.keys(_suit__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).filter(function (key) { return isNaN(Number(key)); }).forEach(function (suit) {\n                _this.cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_suit__WEBPACK_IMPORTED_MODULE_3__[\"default\"][suit], _rank__WEBPACK_IMPORTED_MODULE_2__[\"default\"][rank]));\n            });\n        });\n    }\n    Deck.prototype.deal = function () {\n        var _this = this;\n        var hands = (function () {\n            _this.shuffle();\n            return _this.cut();\n        })();\n        return [new _hand__WEBPACK_IMPORTED_MODULE_1__[\"default\"](hands[0]), new _hand__WEBPACK_IMPORTED_MODULE_1__[\"default\"](hands[1])];\n    };\n    Deck.prototype.shuffle = function () {\n        var cardsClone = this.cards.slice(0);\n        var copy = [];\n        var n = cardsClone.length;\n        var i;\n        while (n) {\n            i = Math.floor(Math.random() * cardsClone.length);\n            if (i in cardsClone) {\n                copy.push(cardsClone[i]);\n                delete cardsClone[i];\n                n--;\n            }\n        }\n        this.cards = copy;\n        return this.cards;\n    };\n    Deck.prototype.cut = function () {\n        return [this.cards.slice(0, 26), this.cards.slice(26)];\n    };\n    return Deck;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);\n\n\n//# sourceURL=webpack://War/./src/models/deck.ts?");

/***/ }),

/***/ "./src/models/game.ts":
/*!****************************!*\
  !*** ./src/models/game.ts ***!
  \****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ \"./src/models/deck.ts\");\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        var hands = new _deck__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().deal();\n        this.handA = hands[0];\n        this.handB = hands[1];\n    }\n    Game.prototype.gameOver = function () {\n        var handALen = this.handA.cards.length;\n        var handBLen = this.handB.cards.length;\n        if (handALen > handBLen) {\n            this.winner = this.handA;\n        }\n        if (handALen < handBLen) {\n            this.winner = this.handB;\n        }\n        if (handALen === handBLen) {\n            this.winner = [this.handA, this.handB];\n        }\n    };\n    Game.prototype.play = function (handACard, handBCard) {\n        if (handACard === void 0) { handACard = this.handA.play(); }\n        if (handBCard === void 0) { handBCard = this.handB.play(); }\n        if (handACard === undefined || handBCard === undefined) {\n            this.gameOver();\n        }\n        (_a = this.bountyCards).push.apply(_a, [handACard, handBCard]);\n        if (handACard == handBCard) {\n            var handAWarCards = this.handA.thisIsWar();\n            var handBWarCards = this.handB.thisIsWar();\n            (_b = this.bountyCards).push.apply(_b, handAWarCards.concat(handBWarCards));\n            this.play(handAWarCards[1], handBWarCards[1]);\n        }\n        if (handACard > handBCard) {\n            (_c = this.handA.cards).push.apply(_c, this.getFaceDownBountyCards());\n        }\n        if (handACard < handBCard) {\n            (_d = this.handB.cards).push.apply(_d, this.getFaceDownBountyCards());\n        }\n        this.resetBountyCards();\n        this.isGameOver();\n        var _a, _b, _c, _d;\n    };\n    Game.prototype.getFaceDownBountyCards = function () {\n        this.bountyCards.forEach(function (card) {\n            card.isRevealed = false;\n        });\n        return this.bountyCards;\n    };\n    Game.prototype.resetBountyCards = function () {\n        this.bountyCards = [];\n    };\n    Game.prototype.isGameOver = function () {\n        if (this.handA.cards.length === 0 || this.handB.cards.length === 0) {\n            this.gameOver();\n        }\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://War/./src/models/game.ts?");

/***/ }),

/***/ "./src/models/hand.ts":
/*!****************************!*\
  !*** ./src/models/hand.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Hand = /** @class */ (function () {\n    function Hand(cards) {\n        this.cards = cards;\n    }\n    Hand.prototype.play = function () {\n        var nextCard = this.cards.shift();\n        if (nextCard !== undefined) {\n            nextCard.isRevealed = true;\n        }\n        return nextCard;\n    };\n    Hand.prototype.thisIsWar = function () {\n        var killCard = this.cards.shift();\n        var revealCard = this.cards.shift();\n        if (revealCard !== undefined) {\n            revealCard.isRevealed = true;\n        }\n        return [killCard, revealCard];\n    };\n    return Hand;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hand);\n\n\n//# sourceURL=webpack://War/./src/models/hand.ts?");

/***/ }),

/***/ "./src/models/rank.ts":
/*!****************************!*\
  !*** ./src/models/rank.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Rank;\n(function (Rank) {\n    Rank[Rank[\"two\"] = 2] = \"two\";\n    Rank[Rank[\"three\"] = 3] = \"three\";\n    Rank[Rank[\"four\"] = 4] = \"four\";\n    Rank[Rank[\"five\"] = 5] = \"five\";\n    Rank[Rank[\"six\"] = 6] = \"six\";\n    Rank[Rank[\"seven\"] = 7] = \"seven\";\n    Rank[Rank[\"eight\"] = 8] = \"eight\";\n    Rank[Rank[\"nine\"] = 9] = \"nine\";\n    Rank[Rank[\"ten\"] = 10] = \"ten\";\n    Rank[Rank[\"jack\"] = 11] = \"jack\";\n    Rank[Rank[\"queen\"] = 12] = \"queen\";\n    Rank[Rank[\"king\"] = 13] = \"king\";\n    Rank[Rank[\"ace\"] = 14] = \"ace\";\n})(Rank || (Rank = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rank);\n\n\n//# sourceURL=webpack://War/./src/models/rank.ts?");

/***/ }),

/***/ "./src/models/suit.ts":
/*!****************************!*\
  !*** ./src/models/suit.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Suit;\n(function (Suit) {\n    Suit[Suit[\"clubs\"] = 0] = \"clubs\";\n    Suit[Suit[\"diamonds\"] = 1] = \"diamonds\";\n    Suit[Suit[\"hearts\"] = 2] = \"hearts\";\n    Suit[Suit[\"spades\"] = 3] = \"spades\";\n})(Suit || (Suit = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Suit);\n\n\n//# sourceURL=webpack://War/./src/models/suit.ts?");

/***/ })

/******/ });