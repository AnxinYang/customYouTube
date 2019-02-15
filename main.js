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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ccjs/cc.js":
/*!************************!*\
  !*** ./src/ccjs/cc.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(/*! ./dom/dom */ "./src/ccjs/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _storage = __webpack_require__(/*! ./storage/storage */ "./src/ccjs/storage/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _raf = __webpack_require__(/*! ./common/raf */ "./src/ccjs/common/raf.js");

var _raf2 = _interopRequireDefault(_raf);

var _common = __webpack_require__(/*! ./common/common */ "./src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

var _xhr = __webpack_require__(/*! ./xhr/xhr */ "./src/ccjs/xhr/xhr.js");

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;

var cc;
window.cc = cc = {
    tools: _common2.default,
    load: function load() {
        var addOns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    },
    select: function select(selector) {
        return _dom2.default.select(selector);
    },
    createElement: function createElement(tagName, id, options) {
        return _dom2.default.createElement(tagName, id, options);
    },
    createElementNS: function createElementNS(tagName, id) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.NS = true;
        return _dom2.default.createElement(tagName, id, options);
    },
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.reset = true;
        return _storage2.default.setValue(key, value, options);
    },
    saveArray: function saveArray(key) {
        var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var idkey = arguments[2];

        if (idkey !== undefined && idkey !== '' && key !== undefined) {
            arr.forEach(function (item) {
                cc.updateValue(item[idkey], item);
            });
        }
        return cc.setValue(key, arr);
    },
    updateValue: function updateValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return _storage2.default.setValue(key, value, options);
    },
    getValue: function getValue(key) {
        return _storage2.default.getValue(key);
    },
    setTimer: function setTimer(fn, delay) {
        return _raf2.default.requestTimeout(fn, delay);
    },
    cancelTimer: function cancelTimer(handle) {
        _raf2.default.clearRequestTimeout(handle);
    },
    request: function request() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return _xhr2.default.ajax(params);
    }

};

if (IS_WORKER) {
    delete cc.select;
    delete cc.createElement;
    delete cc.createElementNS;
} else {
    var last = 0;
    var frameTicker = function frameTicker(timestamp) {
        cc.setValue('frame', timestamp, { immediately: true });
        //console.log(timestamp - last);
        last = timestamp;
        _raf2.default.requestTimeout(frameTicker, 16);
    };
    frameTicker(0);
}

exports.default = cc;

/***/ }),

/***/ "./src/ccjs/common/common.js":
/*!***********************************!*\
  !*** ./src/ccjs/common/common.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var common = {};

common.objectforEach = function (obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            fn(obj[key], key, obj);
        }
    }
};

common.objectAssign = function (target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
};

common.createId = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

common.isObject = function (item) {
    return item !== undefined && item === Object(item) && !(item instanceof Array);
};

common.getBrowser = function () {
    var isIE = false;
    var isChrome = false;
    var isOpera = false;
    if (!!CONTEXT.opr && !!opr.addons || !!CONTEXT.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        isOpera = true;
        return 'opera';
    }
    if (typeof InstallTrigger !== 'undefined') {
        return 'firefox';
    }
    if (/constructor/i.test(CONTEXT.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    }(!CONTEXT['safari'] || safari.pushNotification)) {
        return 'safari';
    }
    if ( false || !!document.documentMode) {
        Object.assign = function () {
            var output = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                for (var key in arguments[i]) {
                    var obj = arguments[i];
                    if (obj.hasOwnProperty(key)) output[key] = obj[key];
                }
            }
            return output;
        };
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        isIE = true;
        return 'ie';
    }
    if (!isIE && !!CONTEXT.StyleMedia) {
        return 'edge';
    }
    if (!!CONTEXT.chrome && !!CONTEXT.chrome.webstore) {
        isChrome = true;
        return 'chrome';
    }
    if ((isChrome || isOpera) && !!CONTEXT.CSS) {
        return 'blink';
    }
};

common.readValue = function (value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof value === "function") {
        return value(options);
    } else {
        return value;
    }
};

exports.default = common;

/***/ }),

/***/ "./src/ccjs/common/raf.js":
/*!********************************!*\
  !*** ./src/ccjs/common/raf.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var raf = {
    requestTimeout: function requestTimeout(fn, delay) {
        if (!CONTEXT.requestAnimationFrame) return setTimeout(fn, delay);

        var start = Date.now(),
            handle = new Object();

        function loop(timestamp) {
            Date.now() - start >= delay ? fn(timestamp) : handle.value = CONTEXT.requestAnimationFrame(loop);
        };

        handle.value = CONTEXT.requestAnimationFrame(loop);
        return handle;
    },
    clearRequestTimeout: function clearRequestTimeout(handle) {
        CONTEXT.cancelAnimationFrame ? CONTEXT.cancelAnimationFrame(handle.value) : clearTimeout(handle);
    }
};

exports.default = raf;

/***/ }),

/***/ "./src/ccjs/dom/dom.js":
/*!*****************************!*\
  !*** ./src/ccjs/dom/dom.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _common = __webpack_require__(/*! ../common/common */ "./src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var dom = {
    select: function select(selector) {
        if (selector === undefined) {
            return;
        }

        var _selector = selector.charAt(0);
        var name = selector.substring(1);
        var doms = [];
        switch (_selector) {
            case '#':
                return document.getElementById(name);
            case '.':
                doms = document.getElementsByClassName(name) || [];
                break;
            default:
                doms = document.getElementsByTagName(selector) || [];
        }

        return doms;
    },
    createElement: function createElement(tag) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var element = document.createElement(tag);

        var elementId = id || tag + '_' + _common2.default.createId();
        element.setAttribute('id', elementId);

        setupElementMethods(element, options);

        return element;
    }
};

function setupElementMethods(element, options) {
    element._eventListeners = new Map();
    element._bound = new Map();

    element.add = function (tag, id, options) {
        var child = dom.createElement(tag, id, options);
        return this.addElement(child);
    };

    element.addElement = function (child) {
        this.appendChild(child);
        return child;
    };

    element.addClass = function (className) {
        this.classList.add(className);
        return this;
    };

    element.removeClass = function (className) {
        this.classList.remove(className);
        return this;
    };

    element.getAttr = function (key) {
        return element.getAttribute(key);
    };

    element.attr = function (key, value) {
        this._setElement('attr', key, value);
        return this;
    };

    element.getData = function () {
        return this._data;
    };

    element.data = function (any) {
        this._data = any;
        return this;
    };

    element.getProp = function (key) {
        return element[key];
    };

    element.prop = function (key, value) {
        this._setElement('prop', key, value);
        return this;
    };

    element.css = function (key, value) {
        this._setElement('css', key, value);
        return this;
    };

    element.bind = function (key, fn) {
        if (key) {
            var self = this;
            this._bound.set(key, fn);
            this.classList.add('storage_' + key);
        }
        return this;
    };
    element.unbind = function (key) {
        var self = this;
        this._bound.delete(key);
        this.classList.remove('storage_' + key);
        return this;
    };

    element._react = function (key, value) {
        var fn = this._bound.get(key);
        if (fn) {
            if (fn.call(this, value, this._data) === false) {
                this.unbind(key);
            }
        }
    };

    element.on = function (eventName, fn) {
        var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var self = this;
        var eventTag = eventName + tag;
        var eventHandler = element._eventListeners.get(eventTag);
        if (eventHandler) {
            this.removeEventListener(eventName, eventHandler);
            element._eventListeners.delete(eventTag);
        }
        if (fn) {
            eventHandler = function eventHandler(e) {
                fn.call(self, e, self._data);
            };
            element._eventListeners.set(eventTag, eventHandler);
            this.addEventListener(eventName, eventHandler, false);
        }
        return self;
    };

    element.content = function (str) {
        this.innerText = str;
        return this;
    };

    element.removeSelf = function () {
        this.removeAllChildren();
        if (this.remove) {
            this.remove();
        } else {
            this.parentNode.removeChild(this);
        }
    };

    element.removeAllChildren = function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    };

    element._setElement = function (type, key, value) {
        var self = this;
        if (key === undefined) {
            return this;
        }
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            _common2.default.objectforEach(key, function (item, key) {
                self[type](key, item);
            });
            return this;
        }

        var v = _common2.default.readValue(value);

        switch (type) {
            case 'prop':
                this[key] = value;
                break;
            case 'attr':
                if (value === false) {
                    this.removeAttribute(key);
                } else {
                    this.setAttribute(key, value);
                }
                break;
            case 'css':
                this.style[key] = value;
                break;
        }
        return this;
    };

    element.isInViewport = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var offsetX = options.offsetX || 0;
        var offsetY = options.offsetY || 0;

        var _getBoundingClientRec = this.getBoundingClientRect(),
            x = _getBoundingClientRec.x,
            y = _getBoundingClientRec.y,
            width = _getBoundingClientRec.width,
            height = _getBoundingClientRec.height; //IE not support bottom right


        var x2 = x + width;
        var y2 = y + height;
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        return !(x2 <= 0 + offsetX || x >= innerWidth - offsetX || y2 <= 0 + offsetY || y >= innerHeight - offsetY);
    };
}

exports.default = dom;

/***/ }),

/***/ "./src/ccjs/storage/storage.js":
/*!*************************************!*\
  !*** ./src/ccjs/storage/storage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(/*! ../common/common */ "./src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var storage = {
    dataMap: new Map(),
    timerMap: new Map(),
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var dataMap = this.dataMap;
        var reset = options.reset;

        var shouldReact = false;
        var oldValue = dataMap.get(key);
        if (_common2.default.isObject(value) && _common2.default.isObject(oldValue) && reset !== true) {
            _common2.default.objectforEach(value, function (item, key, obj) {
                if (item !== value) {
                    shouldReact = true;
                }
                obj[key] = value[key];
            });
        } else {
            shouldReact = true;
            dataMap.set(key, value);
        }

        var newValue = dataMap.get(key);

        if (shouldReact) {
            this.broadcast(key, newValue, options);
        }

        return newValue;
    },
    broadcast: function broadcast(key, newValue) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var timer = this.timerMap.get(key);

        if (timer) {
            cc.cancelTimer(timer);
        }

        timer = cc.setTimer(function () {
            var doms = document.getElementsByClassName('storage_' + key) || [];
            for (var i = 0; i < doms.length; i++) {
                var dom = doms[i];
                dom._react && dom._react(key, newValue);
            }
            self.timerMap.delete(key);
        }, options.immediately ? 0 : 10);

        this.timerMap.set(key, timer);
    },
    getValue: function getValue(key) {
        return this.dataMap.get(key);
    }
};

exports.default = storage;

/***/ }),

/***/ "./src/ccjs/xhr/xhr.js":
/*!*****************************!*\
  !*** ./src/ccjs/xhr/xhr.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var xhr = {
    ajax: function ajax() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var promise = new Promise(function (resolve, reject) {
            var _ref = params || {},
                url = _ref.url,
                method = _ref.method,
                data = _ref.data,
                async = _ref.async,
                xhr = _ref.xhr,
                contentType = _ref.contentType,
                dataType = _ref.dataType,
                done = _ref.done,
                fail = _ref.fail;

            var header = params.header,
                onProgress = params.onProgress,
                beforeSend = params.beforeSend;

            var request = new XMLHttpRequest();
            request.open(method || 'GET', url, async === undefined ? true : async);

            for (var key in header || {}) {
                if ((header || {}).hasOwnProperty(key)) {
                    request.setRequestHeader(key, header[key]);
                }
            }
            if (cc.getValue('Authorization')) {
                request.setRequestHeader('Authorization', cc.getValue('Authorization'));
            }
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    done && done(parseData(request.responseText), request);
                    resolve(parseData(request.responseText), request);
                } else {
                    fail && fail(parseData(request.responseText), request);
                    reject(parseData(request.responseText));
                }
            };

            request.onerror = function () {
                fail && fail(parseData(request.responseText), request);
                reject(parseData(request.responseText));
            };

            request.upload.onprogress = function (e) {
                var p = Math.floor(e.loaded / e.total * 100);
                onProgress && onProgress(p, e);
            };

            var _data = void 0;
            switch (dataType) {
                case 'file':
                    _data = data;
                    break;
                case 'json':
                default:
                    request.setRequestHeader('Content-Type', contentType === undefined ? "application/json; charset=utf-8" : contentType);
                    _data = JSON.stringify(data);
            }

            beforeSend && beforeSend(request);

            request.send(_data);
        });

        return promise;
    }
};

function parseData(data) {
    try {
        return JSON.parse(data || '');
    } catch (e) {
        return undefined;
    }
}

exports.default = xhr;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cc = __webpack_require__(/*! ./ccjs/cc */ "./src/ccjs/cc.js");

var _cc2 = _interopRequireDefault(_cc);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var WHITE = 'rgba(255,255,255, 0.7)';
var BLACK = 'rgba(0,0,0, 0.9)';
var BLACK_SOLID = 'rgb(25, 25, 25)';
var RED = '#d63031';
var CLIENT_ID = '845822050808-tjce2mn9ku0he2bql9vbn0567pbrbinu.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
_cc2.default.setValue('viewport', { width: window.innerWidth, height: window.innerHeight });
window.addEventListener('resize', function () {
    _cc2.default.updateValue('viewport', { width: window.innerWidth, height: window.innerHeight });
});

var player = undefined;
window.startApp = function () {
    gapi.load('auth2', function () {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        _cc2.default.setValue('auth2', gapi.auth2.init({
            client_id: CLIENT_ID,
            scope: SCOPES
        }));
        gapi.client.init({
            client_id: CLIENT_ID,
            scope: SCOPES
        });
        gapi.client.load('youtube', 'v3');
        attachSignin(document.getElementById('OAuthButton'));
    });
};

function attachSignin(element) {
    _cc2.default.getValue('auth2').attachClickHandler(element, {}, function (googleUser) {
        _cc2.default.setValue('user', googleUser);
    }, function (error) {
        alert(JSON.stringify(error, undefined, 2));
    });
}

function renderVideo(video) {
    var container = this.add('div').css({
        textAlign: 'center',
        padding: '8px',
        width: '320px',
        background: 'rgb(18,18,18)',
        cursor: 'pointer',
        margin: '8px',
        transition: '0.2s'
    }).on('mouseenter', function () {
        this.css({
            background: 'rgb(64,64,64)'
        });
    }).on('mouseleave', function () {
        this.css({
            background: 'rgb(18,18,18)'
        });
    }).on('click', function () {
        player = player && player.loadVideoById(video.id.videoId) || new YT.Player('player', {
            height: window.innerHeight - 51,
            width: '100%',
            videoId: video.id.videoId,
            events: {
                'onReady': function onReady(event) {
                    event.target.playVideo();
                },
                'onStateChange': function onStateChange(e) {}
            }
        });
        document.getElementById('playerContainer').scrollIntoView();
    });

    container.add('img').css({
        width: 'auto',
        height: '170px'
    }).attr({
        src: video.snippet.thumbnails.medium.url,
        align: "middle"
    });

    container.add('h4').content(video.snippet.title).css({
        color: 'white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    });
}

function index() {
    var root = _cc2.default.select('#body');
    var app = _cc2.default.createElement('div', 'app').css({
        width: '100vw',
        height: '100vh',
        background: 'rgb(18, 18, 18)',
        position: 'relative',
        overflow: 'auto'
    });
    root.appendChild(app);

    var loginButton = app.add('a', 'OAuthButton').content('Sign In').css({
        padding: '8px',
        position: 'absolute',
        color: 'darkred',
        top: 0,
        right: 0,
        cursor: 'pointer',
        transition: '0.2s'
    }).on('mouseenter', function () {
        this.css('color', 'red');
    }).on('mouseleave', function () {
        this.css('color', 'darkred');
    }).bind('user', function () {
        this.content('Sign out');
    });

    var searchBar = app.add('div').css({
        position: 'fixed',
        top: 'calc(50vh - 35px)',
        padding: '8px 0',
        width: '100vw',
        background: 'rgb(18, 18, 18)',
        textAlign: 'center',
        zIndex: 9
    }).bind('searchResult', function (d) {
        this.css({
            top: d.length > 0 ? '0' : 'calc(50vh - 35px)'
        });
    }).add('input').css({
        background: 'none',
        border: '1.5px solid rgb(64, 64, 64)',
        borderRadius: '4px',
        padding: '8px 8px',
        color: 'rgb(223, 223, 223)',
        width: '500px',
        transition: '0.2s'
    }).attr({
        placeholder: 'Search Video'
    }).on('keyup', function (e) {
        if (e.keyCode === 13) {
            var request = gapi.client.youtube.search.list({
                q: e.target.value,
                part: 'snippet',
                maxResults: 50
            });

            request.execute(function (response) {
                _cc2.default.setValue('searchResult', response.result.items);
            });
        }
    });
    app.add('div', 'playerContainer').css({
        paddingTop: '51px'
    }).add('div', 'player');
    app.add('div', 'landing').css({
        width: '100vw',
        padding: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }).bind('searchResult', function (d) {
        var self = this;
        self.removeAllChildren();
        (d || []).forEach(function (v) {
            renderVideo.call(self, v);
        });
    });

    app.add('div', 'watched').css({
        width: '100vw'
    });
}
index();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NjanMvY2MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NjanMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL3NyYy9jY2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NjanMvc3RvcmFnZS9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIklTX1dPUktFUiIsInNlbGYiLCJDT05URVhUIiwid2luZG93IiwiY2MiLCJ0b29scyIsImNvbW1vbiIsImxvYWQiLCJhZGRPbnMiLCJvcHRpb25zIiwic2VsZWN0IiwiZG9tIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInNldFZhbHVlIiwic3RvcmFnZSIsInNhdmVBcnJheSIsImFyciIsImlka2V5Iiwia2V5IiwiaXRlbSIsInVwZGF0ZVZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRUaW1lciIsInJhZiIsImNhbmNlbFRpbWVyIiwicmVxdWVzdCIsInBhcmFtcyIsInhociIsImxhc3QiLCJmcmFtZVRpY2tlciIsImltbWVkaWF0ZWx5Iiwib2JqIiwiZm4iLCJzb3VyY2UiLCJ0YXJnZXQiLCJNYXRoIiwiczQiLCJPYmplY3QiLCJpc0lFIiwiaXNDaHJvbWUiLCJpc09wZXJhIiwib3ByIiwibmF2aWdhdG9yIiwicCIsInNhZmFyaSIsImRvY3VtZW50Iiwib3V0cHV0IiwiYXJndW1lbnRzIiwiaSIsIkVsZW1lbnQiLCJ2YWx1ZSIsInJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsInN0YXJ0IiwiRGF0ZSIsImhhbmRsZSIsImNsZWFyUmVxdWVzdFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZWxlY3RvciIsIl9zZWxlY3RvciIsIm5hbWUiLCJkb21zIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudElkIiwidGFnIiwic2V0dXBFbGVtZW50TWV0aG9kcyIsImNoaWxkIiwiZXZlbnRUYWciLCJldmVudE5hbWUiLCJldmVudEhhbmRsZXIiLCJ2Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4MiIsIngiLCJ5MiIsInkiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkYXRhTWFwIiwidGltZXJNYXAiLCJzaG91bGRSZWFjdCIsIm9sZFZhbHVlIiwicmVzZXQiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiYWpheCIsInByb21pc2UiLCJtZXRob2QiLCJhc3luYyIsImhlYWRlciIsImRvbmUiLCJwYXJzZURhdGEiLCJyZXNvbHZlIiwiZmFpbCIsInJlamVjdCIsImUiLCJvblByb2dyZXNzIiwiX2RhdGEiLCJjb250ZW50VHlwZSIsIkpTT04iLCJiZWZvcmVTZW5kIiwiZGF0YSIsIldISVRFIiwiQkxBQ0siLCJCTEFDS19TT0xJRCIsIlJFRCIsIkNMSUVOVF9JRCIsIlNDT1BFUyIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyIiwiZ2FwaSIsImNsaWVudF9pZCIsInNjb3BlIiwiYXR0YWNoU2lnbmluIiwiYWxlcnQiLCJjb250YWluZXIiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImN1cnNvciIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJ2aWRlbyIsIllUIiwidmlkZW9JZCIsImV2ZW50cyIsImV2ZW50Iiwic3JjIiwiYWxpZ24iLCJjb2xvciIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsInJvb3QiLCJhcHAiLCJwb3NpdGlvbiIsImxvZ2luQnV0dG9uIiwidG9wIiwicmlnaHQiLCJzZWFyY2hCYXIiLCJ6SW5kZXgiLCJkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGxhY2Vob2xkZXIiLCJxIiwicGFydCIsIm1heFJlc3VsdHMiLCJyZXNwb25zZSIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsInJlbmRlclZpZGVvIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxnQkFBbEI7QUFDQSxJQUFNQyxVQUFVRixtQkFBaEI7O0FBRUE7QUFDQUcsWUFBWUMsS0FBSztBQUNiQyxXQUFPQyxTQURNO0FBRWJDLFVBQU0sZ0JBQW1DO0FBQUEsWUFBMUJDLFNBQTBCLG9FQUFqQixFQUFpQjtBQUFBLFlBQWJDLFVBQWEsb0VBQUgsRUFBRztBQUY1QjtBQUtiQyxZQUFRLDBCQUFrQjtBQUN0QixlQUFPQyxxQkFBUCxRQUFPQSxDQUFQO0FBTlM7QUFRYkMsbUJBQWUsNkNBQWdDO0FBQzNDLGVBQU9ELHlDQUFQLE9BQU9BLENBQVA7QUFUUztBQVdiRSxxQkFBaUIsc0NBQXFDO0FBQUEsWUFBZEosVUFBYyxvRUFBSixFQUFJOztBQUNsREE7QUFDQSxlQUFPRSx5Q0FBUCxPQUFPQSxDQUFQO0FBYlM7QUFlYkcsY0FBVSw4QkFBb0M7QUFBQSxZQUFkTCxVQUFjLG9FQUFKLEVBQUk7O0FBQzFDQTtBQUNBLGVBQU9NLHVDQUFQLE9BQU9BLENBQVA7QUFqQlM7QUFtQmJDLGVBQVcsd0JBQThCO0FBQUEsWUFBaEJDLE1BQWdCLG9FQUFWLEVBQVU7QUFBQSxZQUFOQyxRQUFNOztBQUNyQyxZQUFHQSx1QkFBdUJBLFVBQXZCQSxNQUF1Q0MsUUFBMUMsV0FBNEQ7QUFDeERGLHdCQUFZLGdCQUFnQjtBQUN4QmIsK0JBQWVnQixLQUFmaEIsS0FBZWdCLENBQWZoQjtBQURKYTtBQUdIO0FBQ0QsZUFBT2IsaUJBQVAsR0FBT0EsQ0FBUDtBQXpCUztBQTJCYmlCLGlCQUFhLGlDQUFrQztBQUFBLFlBQWJaLFVBQWEsb0VBQUgsRUFBRzs7QUFDM0MsZUFBT00sdUNBQVAsT0FBT0EsQ0FBUDtBQTVCUztBQThCYk8sY0FBVyx1QkFBZTtBQUN0QixlQUFPUCwyQkFBUCxHQUFPQSxDQUFQO0FBL0JTO0FBaUNiUSxjQUFVLDZCQUFxQjtBQUMzQixlQUFPQyxpQ0FBUCxLQUFPQSxDQUFQO0FBbENTO0FBb0NiQyxpQkFBYSw2QkFBa0I7QUFDM0JEO0FBckNTO0FBdUNiRSxhQUFTLG1CQUF1QjtBQUFBLFlBQWJDLFNBQWEsb0VBQUosRUFBSTs7QUFDNUIsZUFBT0MsbUJBQVAsTUFBT0EsQ0FBUDtBQUNIOztBQXpDWSxDQUFqQnpCOztBQTZDQSxlQUFhO0FBQ1QsV0FBT0MsR0FBUDtBQUNBLFdBQU9BLEdBQVA7QUFDQSxXQUFPQSxHQUFQO0FBSEosT0FJSztBQUNELFFBQUl5QixPQUFKO0FBQ0EsUUFBSUMsY0FBYyxTQUFkQSxXQUFjLFlBQXFCO0FBQ25DMUIsd0NBQWdDLEVBQUMyQixhQUFqQzNCLElBQWdDLEVBQWhDQTtBQUNBO0FBQ0F5QjtBQUNBTDtBQUpKO0FBTUFNO0FBQ0g7O2tCQUdjMUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWYsSUFBTUosWUFBWUMsZ0JBQWxCO0FBQ0EsSUFBTUMsVUFBVUYsbUJBQWhCO0FBQ0EsSUFBTU0sU0FBTjs7QUFFQUEsdUJBQXVCLG1CQUFnQjtBQUNuQyxTQUFJLElBQUosWUFBb0I7QUFDaEIsWUFBSTBCLG1CQUFKLEdBQUlBLENBQUosRUFBNkI7QUFDekJDLGVBQUdELElBQUhDLEdBQUdELENBQUhDO0FBQ0g7QUFDSjtBQUxMM0I7O0FBUUFBLHNCQUFzQiwwQkFBd0I7QUFDMUMsU0FBSSxJQUFKLGVBQXVCO0FBQ25CLFlBQUk0QixzQkFBSixHQUFJQSxDQUFKLEVBQWdDO0FBQzVCQywwQkFBY0QsT0FBZEMsR0FBY0QsQ0FBZEM7QUFDSDtBQUNKO0FBQ0Q7QUFOSjdCOztBQVNBQSxrQkFBa0IsWUFBVTtBQUN4QixrQkFBYztBQUNWLGVBQU84QixXQUFXLENBQUMsSUFBSUEsS0FBTCxNQUFLQSxFQUFMLElBQVhBLGdDQUFQLENBQU9BLENBQVA7QUFHSDtBQUNELFdBQU9DLHlFQUFQO0FBTkovQjs7QUFTQUEsa0JBQWtCLGdCQUFnQjtBQUM5QixXQUFRYyxzQkFBb0JBLFNBQVNrQixPQUE3QmxCLElBQTZCa0IsQ0FBN0JsQixJQUE2QyxFQUFFQSxnQkFBdkQsS0FBcUQsQ0FBckQ7QUFESmQ7O0FBSUFBLG9CQUFvQixZQUFXO0FBQzNCLFFBQUlpQyxPQUFKO0FBQ0EsUUFBSUMsV0FBSjtBQUNBLFFBQUlDLFVBQUo7QUFDQSxRQUFLLENBQUMsQ0FBQ3ZDLFFBQUYsT0FBaUIsQ0FBQyxDQUFDd0MsSUFBcEIsTUFBQyxJQUFrQyxDQUFDLENBQUN4QyxRQUFyQyxLQUFDLElBQXFEeUMsd0NBQTFELEdBQXFHO0FBQ2pHRjtBQUNBO0FBQ0g7QUFDRCxRQUFJLDBCQUFKLGFBQTJDO0FBQ3ZDO0FBQ0g7QUFDRCxRQUFJLG9CQUFvQnZDLFFBQXBCLGdCQUE2QyxhQUFhO0FBQzFELGVBQU8wQyxpQkFBUDtBQUQ0QyxLQUFDLENBRTlDLENBQUMxQyxRQUFELFFBQUNBLENBQUQsSUFBc0IyQyxPQUZ6QixnQkFBaUQsQ0FBakQsRUFFbUQ7QUFDL0M7QUFDSDtBQUNELFFBQUksTUFBSyxJQUFJLENBQUMsQ0FBQ0MsU0FBZixjQUFzQztBQUNsQ1Isd0JBQWdCLFlBQVk7QUFDeEIsZ0JBQUlTLFNBQVNDLFVBQWIsQ0FBYUEsQ0FBYjtBQUNBLGlCQUFLLElBQUlDLElBQVQsR0FBZ0JBLElBQUlELFVBQXBCLGFBQTJDO0FBQ3ZDLHFCQUFLLElBQUwsT0FBZ0JBLFVBQWhCLENBQWdCQSxDQUFoQixFQUE4QjtBQUMxQix3QkFBSWhCLE1BQU1nQixVQUFWLENBQVVBLENBQVY7QUFDQSx3QkFBSWhCLG1CQUFKLEdBQUlBLENBQUosRUFDSWUsY0FBY2YsSUFBZGUsR0FBY2YsQ0FBZGU7QUFDUDtBQUNKO0FBQ0Q7QUFUSlQ7QUFXQSxZQUFJLEVBQUUsWUFBWVksUUFBbEIsU0FBSSxDQUFKLEVBQXNDO0FBQ2xDQSx1Q0FBMkIsWUFBWTtBQUNuQyxvQkFBSSxLQUFKLFlBQXFCO0FBQ2pCO0FBQ0g7QUFITEE7QUFLSDtBQUNEWDtBQUNBO0FBQ0g7QUFDRCxRQUFJLFNBQVMsQ0FBQyxDQUFDckMsUUFBZixZQUFtQztBQUMvQjtBQUNIO0FBQ0QsUUFBSSxDQUFDLENBQUNBLFFBQUYsVUFBb0IsQ0FBQyxDQUFDQSxlQUExQixVQUFtRDtBQUMvQ3NDO0FBQ0E7QUFDSDtBQUNELFFBQUksQ0FBQ0EsWUFBRCxZQUF5QixDQUFDLENBQUN0QyxRQUEvQixLQUE0QztBQUN4QztBQUNIO0FBL0NMSTs7QUFrREFBLG1CQUFtQixpQkFBNkI7QUFBQSxRQUFiRyxVQUFhLG9FQUFILEVBQUc7O0FBQzVDLFFBQUcsaUJBQUgsWUFBK0I7QUFDM0IsZUFBTzBDLE1BQVAsT0FBT0EsQ0FBUDtBQURKLFdBRUs7QUFDRDtBQUNIO0FBTEw3Qzs7a0JBUWVBLE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZmLElBQU1OLFlBQVlDLGdCQUFsQjtBQUNBLElBQU1DLFVBQVVGLG1CQUFoQjtBQUNBLElBQUl3QixNQUFNO0FBQ040QixvQkFBZ0IsbUNBQXFCO0FBQ2pDLFlBQUksQ0FBQ2xELFFBQUwsdUJBQ0ksT0FBT21ELGVBQVAsS0FBT0EsQ0FBUDs7QUFFSixZQUFJQyxRQUFRQyxLQUFaLEdBQVlBLEVBQVo7QUFBQSxZQUNJQyxTQUFTLElBRGIsTUFDYSxFQURiOztBQUdBLGlDQUF5QjtBQUNwQkQseUJBQUQsS0FBQ0EsSUFBRCxLQUFDQSxHQUErQnRCLEdBQWhDLFNBQWdDQSxDQUEvQnNCLEdBQStDQyxlQUFldEQsOEJBQS9ELElBQStEQSxDQUE5RHFEO0FBQ0o7O0FBRURDLHVCQUFldEQsOEJBQWZzRCxJQUFldEQsQ0FBZnNEO0FBQ0E7QUFiRTtBQWVOQyx5QkFBcUIscUNBQWtCO0FBQ25DdkQsdUNBQStCQSw2QkFBNkJzRCxPQUE1RHRELEtBQStCQSxDQUEvQkEsR0FBMEV3RCxhQUExRXhELE1BQTBFd0QsQ0FBMUV4RDtBQUNIO0FBakJLLENBQVY7O2tCQW9CZXNCLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmOzs7Ozs7OztBQUNBLElBQUliLE1BQU07QUFDTkQsWUFBUSwwQkFBa0I7QUFDdEIsWUFBR2lELGFBQUgsV0FBd0I7QUFDcEI7QUFDSDs7QUFFRCxZQUFJQyxZQUFZRCxnQkFBaEIsQ0FBZ0JBLENBQWhCO0FBQ0EsWUFBSUUsT0FBT0YsbUJBQVgsQ0FBV0EsQ0FBWDtBQUNBLFlBQUlHLE9BQUo7QUFDQTtBQUNJO0FBQ0ksdUJBQU9oQix3QkFBUCxJQUFPQSxDQUFQO0FBQ0o7QUFDSWdCLHVCQUFPaEIseUNBQVBnQjtBQUNBO0FBQ0o7QUFDSUEsdUJBQVFoQiwyQ0FBUmdCO0FBUFI7O0FBVUE7QUFuQkU7QUFxQk5sRCxtQkFBZSw0QkFBc0M7QUFBQSxZQUF2Qm1ELEtBQXVCLG9FQUFsQixFQUFrQjtBQUFBLFlBQWR0RCxVQUFjLG9FQUFKLEVBQUk7O0FBQ2pELFlBQUl1RCxVQUFVbEIsdUJBQWQsR0FBY0EsQ0FBZDs7QUFFQSxZQUFJbUIsWUFBWUYsTUFBT0csWUFBWTVELGlCQUFuQyxRQUFtQ0EsRUFBbkM7QUFDQTBEOztBQUVBRzs7QUFFQTtBQUNIO0FBOUJLLENBQVY7O0FBaUNBLCtDQUErQztBQUMzQ0gsOEJBQTBCLElBQTFCQSxHQUEwQixFQUExQkE7QUFDQUEscUJBQWlCLElBQWpCQSxHQUFpQixFQUFqQkE7O0FBRUFBLGtCQUFjLDRCQUE0QjtBQUN0QyxZQUFJSSxRQUFRekQsMkJBQVosT0FBWUEsQ0FBWjtBQUNBLGVBQU8sZ0JBQVAsS0FBTyxDQUFQO0FBRkpxRDs7QUFLQUEseUJBQXFCLGlCQUFpQjtBQUNsQztBQUNBO0FBRkpBOztBQUtBQSx1QkFBbUIscUJBQXFCO0FBQ3BDO0FBQ0E7QUFGSkE7O0FBS0FBLDBCQUFzQixxQkFBcUI7QUFDdkM7QUFDQTtBQUZKQTs7QUFLQUEsc0JBQWtCLGVBQWE7QUFDM0IsZUFBT0EscUJBQVAsR0FBT0EsQ0FBUDtBQURKQTs7QUFJQUEsbUJBQWUsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFGSkE7O0FBS0FBLHNCQUFrQixZQUFVO0FBQ3hCLGVBQU8sS0FBUDtBQURKQTs7QUFJQUEsbUJBQWUsZUFBYTtBQUN4QjtBQUNBO0FBRkpBOztBQUtBQSxzQkFBa0IsZUFBYTtBQUMzQixlQUFPQSxRQUFQLEdBQU9BLENBQVA7QUFESkE7O0FBSUFBLG1CQUFlLHNCQUFzQjtBQUNqQztBQUNBO0FBRkpBOztBQUtBQSxrQkFBYyxzQkFBb0I7QUFDOUI7QUFDQTtBQUZKQTs7QUFLQUEsbUJBQWUsbUJBQWlCO0FBQzVCLGlCQUFRO0FBQ0osZ0JBQUkvRCxPQUFKO0FBQ0E7QUFDQSwrQkFBbUIsYUFBbkI7QUFDSDtBQUNEO0FBTkorRDtBQVFBQSxxQkFBaUIsZUFBYTtBQUMxQixZQUFJL0QsT0FBSjtBQUNBO0FBQ0EsOEJBQXNCLGFBQXRCO0FBQ0E7QUFKSitEOztBQU9BQSxxQkFBaUIsc0JBQW9CO0FBQ2pDLFlBQUkvQixLQUFLLGdCQUFULEdBQVMsQ0FBVDtBQUNBLGdCQUFNO0FBQ0YsZ0JBQUdBLHFCQUFxQixLQUFyQkEsV0FBSCxPQUE4QztBQUMxQztBQUNIO0FBQ0o7QUFOTCtCOztBQVNBQSxpQkFBYyx5QkFBaUM7QUFBQSxZQUFURSxNQUFTLG9FQUFILEVBQUc7O0FBQzNDLFlBQUlqRSxPQUFKO0FBQ0EsWUFBSW9FLFdBQVdDLFlBQWY7QUFDQSxZQUFJQyxlQUFlUCw0QkFBbkIsUUFBbUJBLENBQW5CO0FBQ0EsMEJBQWdCO0FBQ1o7QUFDQUE7QUFDSDtBQUNELGdCQUFPO0FBQ0hPLDJCQUFlLHlCQUFhO0FBQ3hCdEMsaUNBQWlCaEMsS0FBakJnQztBQURKc0M7QUFHQVA7QUFDQTtBQUNIO0FBQ0Q7QUFmSkE7O0FBa0JBQSxzQkFBa0IsZUFBZTtBQUM3QjtBQUNBO0FBRkpBOztBQUtBQSx5QkFBcUIsWUFBVTtBQUMzQjtBQUNBLFlBQUcsS0FBSCxRQUFlO0FBQ1g7QUFESixlQUVLO0FBQ0Q7QUFDSDtBQU5MQTs7QUFTQUEsZ0NBQTRCLFlBQVU7QUFDbEMsZUFBTyxLQUFQLFlBQXdCO0FBQ3BCLDZCQUFpQixLQUFqQjtBQUNIO0FBSExBOztBQU1BQSwwQkFBc0IsNEJBQTJCO0FBQzdDLFlBQUkvRCxPQUFKO0FBQ0EsWUFBSWtCLFFBQUosV0FBdUI7QUFDbkI7QUFDSDtBQUNELFlBQUksOERBQUosVUFBNkI7QUFDekJiLGdEQUEwQixxQkFBcUI7QUFDM0NMO0FBREpLO0FBR0E7QUFDSDs7QUFFRCxZQUFJa0UsSUFBSWxFLDJCQUFSLEtBQVFBLENBQVI7O0FBRUE7QUFDSTtBQUNJO0FBQ0E7QUFDSjtBQUNJLG9CQUFJNkMsVUFBSixPQUFxQjtBQUNqQjtBQURKLHVCQUVPO0FBQ0g7QUFDSDtBQUNEO0FBQ0o7QUFDSTtBQUNBO0FBYlI7QUFlQTtBQTdCSmE7O0FBZ0NBQSwyQkFBdUIsWUFBd0I7QUFBQSxZQUFkdkQsVUFBYyxvRUFBSixFQUFJOztBQUMzQyxZQUFJZ0UsVUFBVWhFLG1CQUFkO0FBQ0EsWUFBSWlFLFVBQVVqRSxtQkFBZDs7QUFGMkMsb0NBR2YsS0FIZSxxQkFHZixFQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBR2U7OztBQUMxRCxZQUFJa0UsS0FBS0MsSUFBVDtBQUNBLFlBQUlDLEtBQUtDLElBQVQ7QUFDQSxZQUFJQyxhQUFhNUUsT0FBakI7QUFDQSxZQUFJNkUsY0FBYzdFLE9BQWxCO0FBQ0EsZUFBTyxFQUFFd0UsTUFBTyxJQUFQQSxXQUFzQkMsS0FBTUcsYUFBNUJKLFdBQXFERSxNQUFPLElBQTVERixXQUE0RUcsS0FBTUUsY0FBM0YsT0FBTyxDQUFQO0FBUkpoQjtBQVVIOztrQkFFY3JELEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNZjs7Ozs7Ozs7QUFFQSxJQUFJSSxVQUFVO0FBQ1ZrRSxhQUFTLElBREMsR0FDRCxFQURDO0FBRVZDLGNBQVcsSUFGRCxHQUVDLEVBRkQ7QUFHVnBFLGNBQVUsOEJBQW9DO0FBQUEsWUFBZEwsVUFBYyxvRUFBSixFQUFJOztBQUMxQyxZQUFJUixPQUFKO0FBQ0EsWUFBSWdGLFVBQVUsS0FBZDtBQUYwQzs7QUFJMUMsWUFBSUUsY0FBSjtBQUNBLFlBQUlDLFdBQVdILFlBQWYsR0FBZUEsQ0FBZjtBQUNBLFlBQUczRSxvQ0FBMEJBLDBCQUExQkEsUUFBMEJBLENBQTFCQSxJQUF1RCtFLFVBQTFELE1BQTBFO0FBQ3RFL0Usa0RBQTRCLDBCQUEwQjtBQUNsRCxvQkFBSWMsU0FBSixPQUFvQjtBQUNoQitEO0FBQ0g7QUFDRG5ELDJCQUFXbUIsTUFBWG5CLEdBQVdtQixDQUFYbkI7QUFKSjFCO0FBREosZUFRTTtBQUNGNkU7QUFDQUY7QUFDSDs7QUFFRCxZQUFJSyxXQUFXTCxZQUFmLEdBQWVBLENBQWY7O0FBRUEseUJBQWdCO0FBQ2I7QUFDRjs7QUFFRDtBQTVCTTtBQThCVk0sZUFBVyxrQ0FBcUM7QUFBQSxZQUFiOUUsVUFBYSxvRUFBSCxFQUFHOztBQUM1QyxZQUFJUixPQUFKO0FBQ0EsWUFBSXVGLFFBQVEsa0JBQVosR0FBWSxDQUFaOztBQUVBLG1CQUFXO0FBQ1BwRjtBQUNIOztBQUVEb0YsZ0JBQVEsWUFBWSxZQUFZO0FBQzVCLGdCQUFJMUIsT0FBT2hCLGdDQUFnQyxhQUFoQ0EsUUFBWDtBQUNBLGlCQUFLLElBQUlHLElBQVQsR0FBZ0JBLElBQUlhLEtBQXBCLGFBQXNDO0FBQ2xDLG9CQUFJbkQsTUFBTW1ELEtBQVYsQ0FBVUEsQ0FBVjtBQUNBbkQsOEJBQWNBLGdCQUFkQSxRQUFjQSxDQUFkQTtBQUNIO0FBQ0RWO0FBTkksV0FPTFEsMEJBUEgrRSxFQUFRLENBQVJBOztBQVNBO0FBL0NNO0FBaURWbEUsY0FBVSx1QkFBZTtBQUNyQixlQUFPLGlCQUFQLEdBQU8sQ0FBUDtBQUNIO0FBbkRTLENBQWQ7O2tCQXNEZVAsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGYsSUFBTWEsTUFBTTtBQUNSNkQsVUFBTSxnQkFBdUI7QUFBQSxZQUFiOUQsU0FBYSxvRUFBSixFQUFJOztBQUN6QixZQUFJK0QsVUFBVSxZQUFZLDJCQUEyQjtBQUFBLHVCQUN3Qi9ELFVBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFHakQsZ0JBQUlELFVBQVUsSUFBZCxjQUFjLEVBQWQ7QUFDQUEseUJBQWNpRSxVQUFkakUsWUFBcUNrRSw2QkFBckNsRTs7QUFFQSxpQkFBSyxJQUFMLE9BQWlCbUUsVUFBakIsSUFBZ0M7QUFDNUIsb0JBQUksQ0FBQ0EsVUFBRCxtQkFBSixHQUFJLENBQUosRUFBd0M7QUFDcENuRSxrREFBOEJtRSxPQUE5Qm5FLEdBQThCbUUsQ0FBOUJuRTtBQUNIO0FBQ0o7QUFDRCxnQkFBR3RCLFlBQUgsZUFBR0EsQ0FBSCxFQUFnQztBQUM1QnNCLDBEQUEwQ3RCLFlBQTFDc0IsZUFBMEN0QixDQUExQ3NCO0FBQ0g7QUFDREEsNkJBQWlCLFlBQVk7QUFDekIsb0JBQUlBLHlCQUF5QkEsaUJBQTdCLEtBQW1EO0FBQy9Db0UsNEJBQVFBLEtBQUtDLFVBQVVyRSxRQUFmb0UsWUFBS0MsQ0FBTEQsRUFBUkEsT0FBUUEsQ0FBUkE7QUFDQUUsNEJBQVFELFVBQVVyRSxRQUFsQnNFLFlBQVFELENBQVJDO0FBRkosdUJBR087QUFDSEMsNEJBQVFBLEtBQUtGLFVBQVVyRSxRQUFmdUUsWUFBS0YsQ0FBTEUsRUFBUkEsT0FBUUEsQ0FBUkE7QUFDQUMsMkJBQU9ILFVBQVVyRSxRQUFqQndFLFlBQU9ILENBQVBHO0FBQ0g7QUFQTHhFOztBQVVBQSw4QkFBa0IsWUFBWTtBQUMxQnVFLHdCQUFRQSxLQUFLRixVQUFVckUsUUFBZnVFLFlBQUtGLENBQUxFLEVBQVJBLE9BQVFBLENBQVJBO0FBQ0FDLHVCQUFPSCxVQUFVckUsUUFBakJ3RSxZQUFPSCxDQUFQRztBQUZKeEU7O0FBS0FBLHdDQUE0QixhQUFhO0FBQ3JDLG9CQUFJa0IsSUFBSVIsV0FBVytELFdBQVdBLEVBQVhBLFFBQW5CLEdBQVEvRCxDQUFSO0FBQ0FnRSw4QkFBY0EsY0FBZEEsQ0FBY0EsQ0FBZEE7QUFGSjFFOztBQUtBLGdCQUFJMkUsYUFBSjtBQUNBO0FBQ0k7QUFDSUE7QUFDQTtBQUNKO0FBQ0E7QUFDSTNFLDZEQUF5QzRFLGdFQUF6QzVFO0FBQ0EyRSw0QkFBUUUsZUFBUkYsSUFBUUUsQ0FBUkY7QUFQUjs7QUFVQUcsMEJBQWNBLFdBQWRBLE9BQWNBLENBQWRBOztBQUVBOUU7QUEvQ0osU0FBYyxDQUFkOztBQWtEQTtBQUNIO0FBckRPLENBQVo7O0FBd0RBLHlCQUF5QjtBQUNyQixRQUFHO0FBQ0MsZUFBTzZFLFdBQVdFLFFBQWxCLEVBQU9GLENBQVA7QUFESixNQUVDLFVBQVU7QUFDUDtBQUNIO0FBQ0o7O2tCQUVjM0UsRzs7Ozs7Ozs7Ozs7Ozs7QUNoRWY7Ozs7Ozs7O0FBRUEsSUFBTThFLFFBQU47QUFDQSxJQUFNQyxRQUFOO0FBQ0EsSUFBTUMsY0FBTjtBQUNBLElBQU1DLE1BQU47QUFDQSxJQUFNQyxZQUFOO0FBQ0EsSUFBTUMsU0FBTjtBQUNBM0csa0NBQXdCLEVBQUM0RyxPQUFPN0csT0FBUixZQUEyQjhHLFFBQVE5RyxPQUEzREMsV0FBd0IsRUFBeEJBO0FBQ0FELGtDQUFrQyxZQUFZO0FBQzFDQyx5Q0FBMkIsRUFBQzRHLE9BQU83RyxPQUFSLFlBQTJCOEcsUUFBUTlHLE9BQTlEQyxXQUEyQixFQUEzQkE7QUFESkQ7O0FBSUEsSUFBSStHLFNBQUo7QUFDQS9HLGtCQUFrQixZQUFXO0FBQ3pCZ0gsdUJBQW1CLFlBQVU7QUFDekI7QUFDQS9HLHVDQUFxQixnQkFBZ0I7QUFDakNnSCx1QkFEaUM7QUFFakNDLG1CQUFPTjtBQUYwQixTQUFoQixDQUFyQjNHO0FBSUErRyx5QkFBaUI7QUFDYkMsdUJBRGE7QUFFYkMsbUJBQU9OO0FBRk0sU0FBakJJO0FBSUFBO0FBQ0FHLHFCQUFheEUsd0JBQWJ3RSxhQUFheEUsQ0FBYndFO0FBWEpIO0FBREpoSDs7QUFnQkEsK0JBQStCO0FBQzNCQyxtRUFDSSxzQkFBcUI7QUFDakJBO0FBRlJBLE9BR08saUJBQWdCO0FBQ2ZtSCxjQUFNaEIsaUNBQU5nQixDQUFNaEIsQ0FBTmdCO0FBSlJuSDtBQU1IOztBQUVELDRCQUE0QjtBQUN4QixRQUFJb0gsWUFBWSxvQkFDUDtBQUNEQyxtQkFEQztBQUVEQyxpQkFGQztBQUdEVixlQUhDO0FBSURXLG9CQUpDO0FBS0RDLGdCQUxDO0FBTURDLGdCQU5DO0FBT0RDLG9CQUFZO0FBUFgsS0FETyxtQkFVTSxZQUFZO0FBQzFCLGlCQUFTO0FBQ0xILHdCQUFZO0FBRFAsU0FBVDtBQVhRLHdCQWVNLFlBQVk7QUFDMUIsaUJBQVM7QUFDTEEsd0JBQVk7QUFEUCxTQUFUO0FBaEJRLG1CQW9CQyxZQUFZO0FBQ3JCVCxpQkFBVUEsVUFBVUEscUJBQXFCYSxTQUFoQyxPQUFXYixDQUFWQSxJQUFxRCxJQUFJYyxHQUFKLGlCQUF3QjtBQUNuRmYsb0JBQVE5RyxxQkFEMkU7QUFFbkY2RyxtQkFGbUY7QUFHbkZpQixxQkFBU0YsU0FIMEU7QUFJbkZHLG9CQUFRO0FBQ0osMkJBQVcsd0JBQWlCO0FBQ3hCQztBQUZBO0FBSUosaUNBQWlCLDBCQUFhLENBRTdCO0FBTkc7QUFKMkUsU0FBeEIsQ0FBL0RqQjtBQWFBcEU7QUFsQ1IsS0FBZ0IsQ0FBaEI7O0FBcUNBMEUsNkJBQ1M7QUFDRFIsZUFEQztBQUVEQyxnQkFBUTtBQUZQLEtBRFRPLE9BS1U7QUFDRlksYUFBS0wsZ0NBREg7QUFFRk0sZUFBTTtBQUZKLEtBTFZiOztBQVVBQSxnQ0FFYU8sY0FGYlAsV0FHUztBQUNEYyxlQURDO0FBRURDLGtCQUZDO0FBR0RDLHNCQUhDO0FBSURDLG9CQUFZO0FBSlgsS0FIVGpCO0FBU0g7O0FBRUQsaUJBQWlCO0FBQ2IsUUFBSWtCLE9BQU90SSxvQkFBWCxPQUFXQSxDQUFYO0FBQ0EsUUFBSXVJLE1BQU0sNkNBQ0Q7QUFDRDNCLGVBREM7QUFFREMsZ0JBRkM7QUFHRFUsb0JBSEM7QUFJRGlCLGtCQUpDO0FBS0RMLGtCQUFVO0FBTFQsS0FEQyxDQUFWO0FBUUFHOztBQUVBLFFBQUlHLGNBQWMsbURBRVQ7QUFDRG5CLGlCQURDO0FBRURrQixrQkFGQztBQUdETixlQUhDO0FBSURRLGFBSkM7QUFLREMsZUFMQztBQU1EbkIsZ0JBTkM7QUFPREUsb0JBQVk7QUFQWCxLQUZTLG1CQVdJLFlBQVk7QUFDMUI7QUFaVSx3QkFjSSxZQUFZO0FBQzFCO0FBZlUsb0JBaUJBLFlBQVk7QUFDdEI7QUFsQlIsS0FBa0IsQ0FBbEI7O0FBcUJBLFFBQUlrQixZQUFZLG1CQUNQO0FBQ0RKLGtCQURDO0FBRURFLGFBRkM7QUFHRHBCLGlCQUhDO0FBSURWLGVBSkM7QUFLRFcsb0JBTEM7QUFNREYsbUJBTkM7QUFPRHdCLGdCQUFRO0FBUFAsS0FETyx1QkFVVSxhQUFhO0FBQy9CLGlCQUFTO0FBQ0xILGlCQUFLSSxxQkFBcUI7QUFEckIsU0FBVDtBQVhRLHdCQWdCUDtBQUNEdkIsb0JBREM7QUFFRHdCLGdCQUZDO0FBR0RDLHNCQUhDO0FBSUQxQixpQkFKQztBQUtEWSxlQUxDO0FBTUR0QixlQU5DO0FBT0RjLG9CQUFZO0FBUFgsS0FoQk8sT0F5Qk47QUFDRnVCLHFCQUFhO0FBRFgsS0F6Qk0sY0E0QkMsYUFBYTtBQUN0QixZQUFJbEQsY0FBSixJQUFzQjtBQUNsQixnQkFBSXpFLFVBQVUsZ0NBQWdDO0FBQzFDNEgsbUJBQUduRCxTQUR1QztBQUUxQ29ELHNCQUYwQztBQUcxQ0MsNEJBQVk7QUFIOEIsYUFBaEMsQ0FBZDs7QUFNQTlILDRCQUFnQixvQkFBb0I7QUFDaEN0QixzREFBNEJxSixnQkFBNUJySjtBQURKc0I7QUFHSDtBQXZDVCxLQUFnQixDQUFoQjtBQXlDQWlILDBDQUNTO0FBQ0RlLG9CQUFZO0FBRFgsS0FEVGY7QUFLQUEsa0NBQ1M7QUFDRDNCLGVBREM7QUFFRFUsaUJBRkM7QUFHRGlDLGlCQUhDO0FBSURDLGtCQUpDO0FBS0RDLHdCQUFnQjtBQUxmLEtBRFRsQix1QkFRMEIsYUFBYTtBQUMvQixZQUFJMUksT0FBSjtBQUNBQTtBQUNBLFNBQUNpSixLQUFELFlBQWtCLGFBQWE7QUFDM0JZO0FBREo7QUFYUm5COztBQWlCQUEsa0NBQ1M7QUFDRDNCLGVBQU87QUFETixLQURUMkI7QUFJSDtBQUNEb0IsUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tL2RvbSc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcclxuaW1wb3J0IHJhZiBmcm9tICcuL2NvbW1vbi9yYWYnO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uL2NvbW1vbic7XHJcbmltcG9ydCB4aHIgZnJvbSAnLi94aHIveGhyJztcclxuXHJcbmNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG5cclxudmFyIGNjO1xyXG53aW5kb3cuY2MgPSBjYyA9IHtcclxuICAgIHRvb2xzOiBjb21tb24sXHJcbiAgICBsb2FkOiBmdW5jdGlvbihhZGRPbnMgPSBbXSwgb3B0aW9ucyA9IHt9KXtcclxuXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5zZWxlY3Qoc2VsZWN0b3IpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZ05hbWUsIGlkLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIGlkLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gKHRhZ05hbWUsIGlkLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBvcHRpb25zLk5TID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZG9tLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgaWQsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBvcHRpb25zLnJlc2V0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXRWYWx1ZShrZXksIHZhbHVlLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIHNhdmVBcnJheTogZnVuY3Rpb24oa2V5LCBhcnIgPSBbXSwgaWRrZXkpe1xyXG4gICAgICAgIGlmKGlka2V5ICE9PSB1bmRlZmluZWQgJiYgaWRrZXkgIT09ICcnICYmIGtleSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNjLnVwZGF0ZVZhbHVlKGl0ZW1baWRrZXldLCBpdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnNldFZhbHVlKGtleSwgYXJyKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KXtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXRWYWx1ZShrZXksIHZhbHVlLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGdldFZhbHVlOiAgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldFZhbHVlKGtleSk7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZXI6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gcmFmLnJlcXVlc3RUaW1lb3V0KGZuLCBkZWxheSlcclxuICAgIH0sXHJcbiAgICBjYW5jZWxUaW1lcjogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIHJhZi5jbGVhclJlcXVlc3RUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9LFxyXG4gICAgcmVxdWVzdDogZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHhoci5hamF4KHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuaWYoSVNfV09SS0VSKXtcclxuICAgIGRlbGV0ZSBjYy5zZWxlY3Q7XHJcbiAgICBkZWxldGUgY2MuY3JlYXRlRWxlbWVudDtcclxuICAgIGRlbGV0ZSBjYy5jcmVhdGVFbGVtZW50TlM7XHJcbn1lbHNle1xyXG4gICAgbGV0IGxhc3QgPSAwXHJcbiAgICBsZXQgZnJhbWVUaWNrZXIgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgY2Muc2V0VmFsdWUoJ2ZyYW1lJywgdGltZXN0YW1wLCB7aW1tZWRpYXRlbHk6IHRydWV9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRpbWVzdGFtcCAtIGxhc3QpO1xyXG4gICAgICAgIGxhc3QgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgcmFmLnJlcXVlc3RUaW1lb3V0KGZyYW1lVGlja2VyLCAxNilcclxuICAgIH07XHJcbiAgICBmcmFtZVRpY2tlcigwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNjOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG5jb25zdCBjb21tb24gPSB7fTtcclxuXHJcbmNvbW1vbi5vYmplY3Rmb3JFYWNoID0gZnVuY3Rpb24ob2JqLGZuKXtcclxuICAgIGZvcih2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmbihvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbW1vbi5vYmplY3RBc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSl7XHJcbiAgICBmb3IobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb21tb24uY3JlYXRlSWQgPSBmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxufTtcclxuXHJcbmNvbW1vbi5pc09iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmICEoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSlcclxufTtcclxuXHJcbmNvbW1vbi5nZXRCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgaWYgKCghIUNPTlRFWFQub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISFDT05URVhULm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XHJcbiAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICB9XHJcbiAgICBpZiAoL2NvbnN0cnVjdG9yL2kudGVzdChDT05URVhULkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgfSkoIUNPTlRFWFRbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgIH1cclxuICAgIGlmIChmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0lFID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gJ2llJztcclxuICAgIH1cclxuICAgIGlmICghaXNJRSAmJiAhIUNPTlRFWFQuU3R5bGVNZWRpYSkge1xyXG4gICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoISFDT05URVhULmNocm9tZSAmJiAhIUNPTlRFWFQuY2hyb21lLndlYnN0b3JlKSB7XHJcbiAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIUNPTlRFWFQuQ1NTKSB7XHJcbiAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ucmVhZFZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlKG9wdGlvbnMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG52YXIgcmFmID0ge1xyXG4gICAgcmVxdWVzdFRpbWVvdXQ6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICBpZiAoIUNPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgZGVsYXkpO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AodGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIChEYXRlLm5vdygpIC0gc3RhcnQpID49IGRlbGF5ID8gZm4odGltZXN0YW1wKSA6IGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJSZXF1ZXN0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIENPTlRFWFQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPyBDT05URVhULmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSk6Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYWY7IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xyXG52YXIgZG9tID0ge1xyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoc2VsZWN0b3I9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgX3NlbGVjdG9yID0gc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCBkb21zID0gW107XHJcbiAgICAgICAgc3dpdGNoIChfc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICBkb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZG9tcyA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikgfHwgW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9tcztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBpZCA9ICcnLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRJZCA9IGlkIHx8ICh0YWcgKyAnXycgKyBjb21tb24uY3JlYXRlSWQoKSk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGVsZW1lbnQuX2JvdW5kID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkID0gZnVuY3Rpb24gKHRhZywgaWQsIG9wdGlvbnMpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSBkb20uY3JlYXRlRWxlbWVudCh0YWcsIGlkLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbGVtZW50KGNoaWxkKTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkXHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0QXR0ciA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgnYXR0cicsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldERhdGEgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZGF0YSA9IGZ1bmN0aW9uKGFueSl7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGFueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXRQcm9wID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnByb3AgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ3Byb3AnLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5jc3MgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdjc3MnLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5iaW5kID0gZnVuY3Rpb24oa2V5LCBmbil7XHJcbiAgICAgICAgaWYoa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fYm91bmQuc2V0KGtleSwgZm4pO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3N0b3JhZ2VfJyArIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGVsZW1lbnQudW5iaW5kID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fYm91bmQuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzdG9yYWdlXycgKyBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Ll9yZWFjdCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgIGxldCBmbiA9IHRoaXMuX2JvdW5kLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGZuKXtcclxuICAgICAgICAgICAgaWYoZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdGhpcy5fZGF0YSkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kKGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5vbiAgPSBmdW5jdGlvbihldmVudE5hbWUsIGZuLCB0YWcgPSAnJyl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBldmVudFRhZyA9IGV2ZW50TmFtZSArIHRhZztcclxuICAgICAgICBsZXQgZXZlbnRIYW5kbGVyID0gZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50VGFnKTtcclxuICAgICAgICBpZihldmVudEhhbmRsZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycy5kZWxldGUoZXZlbnRUYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmbikge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZm4uY2FsbChzZWxmLCBlLCBzZWxmLl9kYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuc2V0KGV2ZW50VGFnLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuY29udGVudCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHN0cjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVTZWxmID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYodGhpcy5yZW1vdmUpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlQWxsQ2hpbGRyZW4gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5fc2V0RWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGtleSAsIHZhbHVlKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29tbW9uLm9iamVjdGZvckVhY2goa2V5ICxmdW5jdGlvbiAoaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmW3R5cGVdKGtleSwgaXRlbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHYgPSBjb21tb24ucmVhZFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Byb3AnOlxyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F0dHInOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGtleSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVtrZXldID0gIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYIHx8IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBvcHRpb25zLm9mZnNldFkgfHwgMDtcclxuICAgICAgICBsZXQge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy9JRSBub3Qgc3VwcG9ydCBib3R0b20gcmlnaHRcclxuICAgICAgICBsZXQgeDIgPSB4ICsgd2lkdGg7XHJcbiAgICAgICAgbGV0IHkyID0geSArIGhlaWdodDtcclxuICAgICAgICBsZXQgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBpbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICByZXR1cm4gISh4MiA8PSAoMCArIG9mZnNldFgpfHwgeCA+PSAoaW5uZXJXaWR0aCAtIG9mZnNldFgpIHx8IHkyIDw9ICgwICsgb2Zmc2V0WSkgfHwgeSA+PSAoaW5uZXJIZWlnaHQgLSBvZmZzZXRZKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xyXG5cclxudmFyIHN0b3JhZ2UgPSB7XHJcbiAgICBkYXRhTWFwOiBuZXcgTWFwKCksXHJcbiAgICB0aW1lck1hcDogIG5ldyBNYXAoKSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBkYXRhTWFwID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIGxldCB7cmVzZXR9ID0gb3B0aW9ucztcclxuICAgICAgICBsZXQgc2hvdWxkUmVhY3QgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBkYXRhTWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGNvbW1vbi5pc09iamVjdCh2YWx1ZSkgJiYgY29tbW9uLmlzT2JqZWN0KG9sZFZhbHVlKSAmJiByZXNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb21tb24ub2JqZWN0Zm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGtleSwgb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlW2tleV1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGRhdGFNYXAuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZGF0YU1hcC5nZXQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYoc2hvdWxkUmVhY3QpIHtcclxuICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChrZXksIG5ld1ZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBicm9hZGNhc3Q6IGZ1bmN0aW9uKGtleSwgbmV3VmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMudGltZXJNYXAuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICBjYy5jYW5jZWxUaW1lcih0aW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lciA9IGNjLnNldFRpbWVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGRvbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9yYWdlXycgKyBrZXkpIHx8IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkb20gPSBkb21zW2ldO1xyXG4gICAgICAgICAgICAgICAgZG9tLl9yZWFjdCAmJiBkb20uX3JlYWN0KGtleSwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYudGltZXJNYXAuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgfSwgb3B0aW9ucy5pbW1lZGlhdGVseT8gMDogMTApO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTWFwLnNldChrZXksIHRpbWVyKTtcclxuICAgIH0sXHJcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNvbnN0IHhociA9IHtcclxuICAgIGFqYXg6IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQge3VybCwgbWV0aG9kLCBkYXRhLCBhc3luYywgeGhyLCBjb250ZW50VHlwZSwgZGF0YVR5cGUsIGRvbmUsIGZhaWx9ID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgICAgICAgICBsZXQge2hlYWRlciwgb25Qcm9ncmVzcywgYmVmb3JlU2VuZH0gPSBwYXJhbXM7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbigobWV0aG9kIHx8ICdHRVQnKSwgdXJsLCBhc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFzeW5jKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiAoaGVhZGVyIHx8IHt9KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChoZWFkZXIgfHwge30pLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2MuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSl7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBjYy5nZXRWYWx1ZSgnQXV0aG9yaXphdGlvbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lICYmIGRvbmUocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBNYXRoLmZsb29yKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzICYmIG9uUHJvZ3Jlc3MocCwgZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgX2RhdGE7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIF9kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIiA6IGNvbnRlbnRUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kICYmIGJlZm9yZVNlbmQocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoX2RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZURhdGEoZGF0YSkge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEgfHwgJycpXHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHhocjtcclxuIiwiaW1wb3J0IGNjIGZyb20gJy4vY2Nqcy9jYyc7XHJcblxyXG5jb25zdCBXSElURSA9ICdyZ2JhKDI1NSwyNTUsMjU1LCAwLjcpJztcclxuY29uc3QgQkxBQ0sgPSAncmdiYSgwLDAsMCwgMC45KSc7XHJcbmNvbnN0IEJMQUNLX1NPTElEID0gJ3JnYigyNSwgMjUsIDI1KSc7XHJcbmNvbnN0IFJFRCA9ICcjZDYzMDMxJztcclxuY29uc3QgQ0xJRU5UX0lEID0gJzg0NTgyMjA1MDgwOC10amNlMm1uOWt1MGhlMmJxbDl2Ym4wNTY3cGJyYmludS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XHJcbmNvbnN0IFNDT1BFUyA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUucmVhZG9ubHknO1xyXG5jYy5zZXRWYWx1ZSgndmlld3BvcnQnLCB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY2MudXBkYXRlVmFsdWUoJ3ZpZXdwb3J0Jywge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9KTtcclxufSk7XHJcblxyXG5sZXQgcGxheWVyID0gdW5kZWZpbmVkO1xyXG53aW5kb3cuc3RhcnRBcHAgPSBmdW5jdGlvbigpIHtcclxuICAgIGdhcGkubG9hZCgnYXV0aDInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIFJldHJpZXZlIHRoZSBzaW5nbGV0b24gZm9yIHRoZSBHb29nbGVBdXRoIGxpYnJhcnkgYW5kIHNldCB1cCB0aGUgY2xpZW50LlxyXG4gICAgICAgIGNjLnNldFZhbHVlKCdhdXRoMicsIGdhcGkuYXV0aDIuaW5pdCh7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogQ0xJRU5UX0lELFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBnYXBpLmNsaWVudC5pbml0KHtcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBDTElFTlRfSUQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBTQ09QRVMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBnYXBpLmNsaWVudC5sb2FkKCd5b3V0dWJlJywgJ3YzJyk7XHJcbiAgICAgICAgYXR0YWNoU2lnbmluKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPQXV0aEJ1dHRvbicpKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYXR0YWNoU2lnbmluKGVsZW1lbnQpIHtcclxuICAgIGNjLmdldFZhbHVlKCdhdXRoMicpLmF0dGFjaENsaWNrSGFuZGxlcihlbGVtZW50LCB7fSxcclxuICAgICAgICBmdW5jdGlvbihnb29nbGVVc2VyKSB7XHJcbiAgICAgICAgICAgIGNjLnNldFZhbHVlKCd1c2VyJywgZ29vZ2xlVXNlcik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZXJyb3IsIHVuZGVmaW5lZCwgMikpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJWaWRlbyh2aWRlbykge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuYWRkKCdkaXYnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgd2lkdGg6ICczMjBweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMTgsMTgsMTgpJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcwLjJzJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDY0LDY0LDY0KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jc3Moe1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigxOCwxOCwxOCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIgPSAocGxheWVyICYmIHBsYXllci5sb2FkVmlkZW9CeUlkKHZpZGVvLmlkLnZpZGVvSWQpKSB8fCBuZXcgWVQuUGxheWVyKCdwbGF5ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvLmlkLnZpZGVvSWQsXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnb25SZWFkeSc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJDb250YWluZXInKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hZGQoJ2ltZycpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzE3MHB4JyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICAgc3JjOiB2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMubWVkaXVtLnVybCxcclxuICAgICAgICAgICAgYWxpZ246XCJtaWRkbGVcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lclxyXG4gICAgICAgIC5hZGQoJ2g0JylcclxuICAgICAgICAuY29udGVudCh2aWRlby5zbmlwcGV0LnRpdGxlKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBsZXQgcm9vdCA9IGNjLnNlbGVjdCgnI2JvZHknKTtcclxuICAgIGxldCBhcHAgPSBjYy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnYXBwJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigxOCwgMTgsIDE4KScsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgICAgICAgfSk7XHJcbiAgICByb290LmFwcGVuZENoaWxkKGFwcCk7XHJcblxyXG4gICAgbGV0IGxvZ2luQnV0dG9uID0gYXBwLmFkZCgnYScsICdPQXV0aEJ1dHRvbicpXHJcbiAgICAgICAgLmNvbnRlbnQoJ1NpZ24gSW4nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZGFya3JlZCcsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnMC4ycycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKCdjb2xvcicsICdyZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jc3MoJ2NvbG9yJywgJ2RhcmtyZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iaW5kKCd1c2VyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQoJ1NpZ24gb3V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgbGV0IHNlYXJjaEJhciA9IGFwcC5hZGQoJ2RpdicpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICB0b3A6ICdjYWxjKDUwdmggLSAzNXB4KScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDE4LCAxOCwgMTgpJyxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgekluZGV4OiA5XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCgnc2VhcmNoUmVzdWx0JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgdGhpcy5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBkLmxlbmd0aCA+IDAgPyAnMCcgOiAnY2FsYyg1MHZoIC0gMzVweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWRkKCdpbnB1dCcpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMS41cHggc29saWQgcmdiKDY0LCA2NCwgNjQpJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzhweCA4cHgnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMjMsIDIyMywgMjIzKScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnMC4ycydcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggVmlkZW8nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gZ2FwaS5jbGllbnQueW91dHViZS5zZWFyY2gubGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6IDUwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmV4ZWN1dGUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2V0VmFsdWUoJ3NlYXJjaFJlc3VsdCcsIHJlc3BvbnNlLnJlc3VsdC5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgYXBwLmFkZCgnZGl2JywgJ3BsYXllckNvbnRhaW5lcicpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICc1MXB4J1xyXG4gICAgICAgIH0pLmFkZCgnZGl2JywgJ3BsYXllcicpXHJcbiAgICA7XHJcbiAgICBhcHAuYWRkKCdkaXYnLCAnbGFuZGluZycpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCgnc2VhcmNoUmVzdWx0JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIChkIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWaWRlby5jYWxsKHNlbGYsIHYpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIGFwcC5hZGQoJ2RpdicsICd3YXRjaGVkJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgfSlcclxufVxyXG5pbmRleCgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==