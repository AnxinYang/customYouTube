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
        cursor: 'pointer'
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
        flexWrap: 'wrap'
    }).bind('searchResult', function (d) {
        var self = this;
        self.removeAllChildren();
        (d || []).forEach(function (v) {
            renderVideo.call(self, v);
        });
    });

    app.add('div', 'watched').css({
        height: '100vh'
    });
}
index();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NjanMvY2MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NjanMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL3NyYy9jY2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NjanMvc3RvcmFnZS9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIklTX1dPUktFUiIsInNlbGYiLCJDT05URVhUIiwid2luZG93IiwiY2MiLCJ0b29scyIsImNvbW1vbiIsImxvYWQiLCJhZGRPbnMiLCJvcHRpb25zIiwic2VsZWN0IiwiZG9tIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInNldFZhbHVlIiwic3RvcmFnZSIsInNhdmVBcnJheSIsImFyciIsImlka2V5Iiwia2V5IiwiaXRlbSIsInVwZGF0ZVZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRUaW1lciIsInJhZiIsImNhbmNlbFRpbWVyIiwicmVxdWVzdCIsInBhcmFtcyIsInhociIsImxhc3QiLCJmcmFtZVRpY2tlciIsImltbWVkaWF0ZWx5Iiwib2JqIiwiZm4iLCJzb3VyY2UiLCJ0YXJnZXQiLCJNYXRoIiwiczQiLCJPYmplY3QiLCJpc0lFIiwiaXNDaHJvbWUiLCJpc09wZXJhIiwib3ByIiwibmF2aWdhdG9yIiwicCIsInNhZmFyaSIsImRvY3VtZW50Iiwib3V0cHV0IiwiYXJndW1lbnRzIiwiaSIsIkVsZW1lbnQiLCJ2YWx1ZSIsInJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsInN0YXJ0IiwiRGF0ZSIsImhhbmRsZSIsImNsZWFyUmVxdWVzdFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZWxlY3RvciIsIl9zZWxlY3RvciIsIm5hbWUiLCJkb21zIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudElkIiwidGFnIiwic2V0dXBFbGVtZW50TWV0aG9kcyIsImNoaWxkIiwiZXZlbnRUYWciLCJldmVudE5hbWUiLCJldmVudEhhbmRsZXIiLCJ2Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4MiIsIngiLCJ5MiIsInkiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkYXRhTWFwIiwidGltZXJNYXAiLCJzaG91bGRSZWFjdCIsIm9sZFZhbHVlIiwicmVzZXQiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiYWpheCIsInByb21pc2UiLCJtZXRob2QiLCJhc3luYyIsImhlYWRlciIsImRvbmUiLCJwYXJzZURhdGEiLCJyZXNvbHZlIiwiZmFpbCIsInJlamVjdCIsImUiLCJvblByb2dyZXNzIiwiX2RhdGEiLCJjb250ZW50VHlwZSIsIkpTT04iLCJiZWZvcmVTZW5kIiwiZGF0YSIsIldISVRFIiwiQkxBQ0siLCJCTEFDS19TT0xJRCIsIlJFRCIsIkNMSUVOVF9JRCIsIlNDT1BFUyIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyIiwiZ2FwaSIsImNsaWVudF9pZCIsInNjb3BlIiwiYXR0YWNoU2lnbmluIiwiYWxlcnQiLCJjb250YWluZXIiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiY3Vyc29yIiwidmlkZW8iLCJZVCIsInZpZGVvSWQiLCJldmVudHMiLCJldmVudCIsInNyYyIsImFsaWduIiwiY29sb3IiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJyb290IiwiYXBwIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwibG9naW5CdXR0b24iLCJ0b3AiLCJyaWdodCIsInRyYW5zaXRpb24iLCJzZWFyY2hCYXIiLCJ6SW5kZXgiLCJkIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGxhY2Vob2xkZXIiLCJxIiwicGFydCIsIm1heFJlc3VsdHMiLCJyZXNwb25zZSIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJyZW5kZXJWaWRlbyIsImluZGV4Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsZ0JBQWxCO0FBQ0EsSUFBTUMsVUFBVUYsbUJBQWhCOztBQUVBO0FBQ0FHLFlBQVlDLEtBQUs7QUFDYkMsV0FBT0MsU0FETTtBQUViQyxVQUFNLGdCQUFtQztBQUFBLFlBQTFCQyxTQUEwQixvRUFBakIsRUFBaUI7QUFBQSxZQUFiQyxVQUFhLG9FQUFILEVBQUc7QUFGNUI7QUFLYkMsWUFBUSwwQkFBa0I7QUFDdEIsZUFBT0MscUJBQVAsUUFBT0EsQ0FBUDtBQU5TO0FBUWJDLG1CQUFlLDZDQUFnQztBQUMzQyxlQUFPRCx5Q0FBUCxPQUFPQSxDQUFQO0FBVFM7QUFXYkUscUJBQWlCLHNDQUFxQztBQUFBLFlBQWRKLFVBQWMsb0VBQUosRUFBSTs7QUFDbERBO0FBQ0EsZUFBT0UseUNBQVAsT0FBT0EsQ0FBUDtBQWJTO0FBZWJHLGNBQVUsOEJBQW9DO0FBQUEsWUFBZEwsVUFBYyxvRUFBSixFQUFJOztBQUMxQ0E7QUFDQSxlQUFPTSx1Q0FBUCxPQUFPQSxDQUFQO0FBakJTO0FBbUJiQyxlQUFXLHdCQUE4QjtBQUFBLFlBQWhCQyxNQUFnQixvRUFBVixFQUFVO0FBQUEsWUFBTkMsUUFBTTs7QUFDckMsWUFBR0EsdUJBQXVCQSxVQUF2QkEsTUFBdUNDLFFBQTFDLFdBQTREO0FBQ3hERix3QkFBWSxnQkFBZ0I7QUFDeEJiLCtCQUFlZ0IsS0FBZmhCLEtBQWVnQixDQUFmaEI7QUFESmE7QUFHSDtBQUNELGVBQU9iLGlCQUFQLEdBQU9BLENBQVA7QUF6QlM7QUEyQmJpQixpQkFBYSxpQ0FBa0M7QUFBQSxZQUFiWixVQUFhLG9FQUFILEVBQUc7O0FBQzNDLGVBQU9NLHVDQUFQLE9BQU9BLENBQVA7QUE1QlM7QUE4QmJPLGNBQVcsdUJBQWU7QUFDdEIsZUFBT1AsMkJBQVAsR0FBT0EsQ0FBUDtBQS9CUztBQWlDYlEsY0FBVSw2QkFBcUI7QUFDM0IsZUFBT0MsaUNBQVAsS0FBT0EsQ0FBUDtBQWxDUztBQW9DYkMsaUJBQWEsNkJBQWtCO0FBQzNCRDtBQXJDUztBQXVDYkUsYUFBUyxtQkFBdUI7QUFBQSxZQUFiQyxTQUFhLG9FQUFKLEVBQUk7O0FBQzVCLGVBQU9DLG1CQUFQLE1BQU9BLENBQVA7QUFDSDs7QUF6Q1ksQ0FBakJ6Qjs7QUE2Q0EsZUFBYTtBQUNULFdBQU9DLEdBQVA7QUFDQSxXQUFPQSxHQUFQO0FBQ0EsV0FBT0EsR0FBUDtBQUhKLE9BSUs7QUFDRCxRQUFJeUIsT0FBSjtBQUNBLFFBQUlDLGNBQWMsU0FBZEEsV0FBYyxZQUFxQjtBQUNuQzFCLHdDQUFnQyxFQUFDMkIsYUFBakMzQixJQUFnQyxFQUFoQ0E7QUFDQTtBQUNBeUI7QUFDQUw7QUFKSjtBQU1BTTtBQUNIOztrQkFHYzFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVmLElBQU1KLFlBQVlDLGdCQUFsQjtBQUNBLElBQU1DLFVBQVVGLG1CQUFoQjtBQUNBLElBQU1NLFNBQU47O0FBRUFBLHVCQUF1QixtQkFBZ0I7QUFDbkMsU0FBSSxJQUFKLFlBQW9CO0FBQ2hCLFlBQUkwQixtQkFBSixHQUFJQSxDQUFKLEVBQTZCO0FBQ3pCQyxlQUFHRCxJQUFIQyxHQUFHRCxDQUFIQztBQUNIO0FBQ0o7QUFMTDNCOztBQVFBQSxzQkFBc0IsMEJBQXdCO0FBQzFDLFNBQUksSUFBSixlQUF1QjtBQUNuQixZQUFJNEIsc0JBQUosR0FBSUEsQ0FBSixFQUFnQztBQUM1QkMsMEJBQWNELE9BQWRDLEdBQWNELENBQWRDO0FBQ0g7QUFDSjtBQUNEO0FBTko3Qjs7QUFTQUEsa0JBQWtCLFlBQVU7QUFDeEIsa0JBQWM7QUFDVixlQUFPOEIsV0FBVyxDQUFDLElBQUlBLEtBQUwsTUFBS0EsRUFBTCxJQUFYQSxnQ0FBUCxDQUFPQSxDQUFQO0FBR0g7QUFDRCxXQUFPQyx5RUFBUDtBQU5KL0I7O0FBU0FBLGtCQUFrQixnQkFBZ0I7QUFDOUIsV0FBUWMsc0JBQW9CQSxTQUFTa0IsT0FBN0JsQixJQUE2QmtCLENBQTdCbEIsSUFBNkMsRUFBRUEsZ0JBQXZELEtBQXFELENBQXJEO0FBREpkOztBQUlBQSxvQkFBb0IsWUFBVztBQUMzQixRQUFJaUMsT0FBSjtBQUNBLFFBQUlDLFdBQUo7QUFDQSxRQUFJQyxVQUFKO0FBQ0EsUUFBSyxDQUFDLENBQUN2QyxRQUFGLE9BQWlCLENBQUMsQ0FBQ3dDLElBQXBCLE1BQUMsSUFBa0MsQ0FBQyxDQUFDeEMsUUFBckMsS0FBQyxJQUFxRHlDLHdDQUExRCxHQUFxRztBQUNqR0Y7QUFDQTtBQUNIO0FBQ0QsUUFBSSwwQkFBSixhQUEyQztBQUN2QztBQUNIO0FBQ0QsUUFBSSxvQkFBb0J2QyxRQUFwQixnQkFBNkMsYUFBYTtBQUMxRCxlQUFPMEMsaUJBQVA7QUFENEMsS0FBQyxDQUU5QyxDQUFDMUMsUUFBRCxRQUFDQSxDQUFELElBQXNCMkMsT0FGekIsZ0JBQWlELENBQWpELEVBRW1EO0FBQy9DO0FBQ0g7QUFDRCxRQUFJLE1BQUssSUFBSSxDQUFDLENBQUNDLFNBQWYsY0FBc0M7QUFDbENSLHdCQUFnQixZQUFZO0FBQ3hCLGdCQUFJUyxTQUFTQyxVQUFiLENBQWFBLENBQWI7QUFDQSxpQkFBSyxJQUFJQyxJQUFULEdBQWdCQSxJQUFJRCxVQUFwQixhQUEyQztBQUN2QyxxQkFBSyxJQUFMLE9BQWdCQSxVQUFoQixDQUFnQkEsQ0FBaEIsRUFBOEI7QUFDMUIsd0JBQUloQixNQUFNZ0IsVUFBVixDQUFVQSxDQUFWO0FBQ0Esd0JBQUloQixtQkFBSixHQUFJQSxDQUFKLEVBQ0llLGNBQWNmLElBQWRlLEdBQWNmLENBQWRlO0FBQ1A7QUFDSjtBQUNEO0FBVEpUO0FBV0EsWUFBSSxFQUFFLFlBQVlZLFFBQWxCLFNBQUksQ0FBSixFQUFzQztBQUNsQ0EsdUNBQTJCLFlBQVk7QUFDbkMsb0JBQUksS0FBSixZQUFxQjtBQUNqQjtBQUNIO0FBSExBO0FBS0g7QUFDRFg7QUFDQTtBQUNIO0FBQ0QsUUFBSSxTQUFTLENBQUMsQ0FBQ3JDLFFBQWYsWUFBbUM7QUFDL0I7QUFDSDtBQUNELFFBQUksQ0FBQyxDQUFDQSxRQUFGLFVBQW9CLENBQUMsQ0FBQ0EsZUFBMUIsVUFBbUQ7QUFDL0NzQztBQUNBO0FBQ0g7QUFDRCxRQUFJLENBQUNBLFlBQUQsWUFBeUIsQ0FBQyxDQUFDdEMsUUFBL0IsS0FBNEM7QUFDeEM7QUFDSDtBQS9DTEk7O0FBa0RBQSxtQkFBbUIsaUJBQTZCO0FBQUEsUUFBYkcsVUFBYSxvRUFBSCxFQUFHOztBQUM1QyxRQUFHLGlCQUFILFlBQStCO0FBQzNCLGVBQU8wQyxNQUFQLE9BQU9BLENBQVA7QUFESixXQUVLO0FBQ0Q7QUFDSDtBQUxMN0M7O2tCQVFlQSxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGZixJQUFNTixZQUFZQyxnQkFBbEI7QUFDQSxJQUFNQyxVQUFVRixtQkFBaEI7QUFDQSxJQUFJd0IsTUFBTTtBQUNONEIsb0JBQWdCLG1DQUFxQjtBQUNqQyxZQUFJLENBQUNsRCxRQUFMLHVCQUNJLE9BQU9tRCxlQUFQLEtBQU9BLENBQVA7O0FBRUosWUFBSUMsUUFBUUMsS0FBWixHQUFZQSxFQUFaO0FBQUEsWUFDSUMsU0FBUyxJQURiLE1BQ2EsRUFEYjs7QUFHQSxpQ0FBeUI7QUFDcEJELHlCQUFELEtBQUNBLElBQUQsS0FBQ0EsR0FBK0J0QixHQUFoQyxTQUFnQ0EsQ0FBL0JzQixHQUErQ0MsZUFBZXRELDhCQUEvRCxJQUErREEsQ0FBOURxRDtBQUNKOztBQUVEQyx1QkFBZXRELDhCQUFmc0QsSUFBZXRELENBQWZzRDtBQUNBO0FBYkU7QUFlTkMseUJBQXFCLHFDQUFrQjtBQUNuQ3ZELHVDQUErQkEsNkJBQTZCc0QsT0FBNUR0RCxLQUErQkEsQ0FBL0JBLEdBQTBFd0QsYUFBMUV4RCxNQUEwRXdELENBQTFFeEQ7QUFDSDtBQWpCSyxDQUFWOztrQkFvQmVzQixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZjs7Ozs7Ozs7QUFDQSxJQUFJYixNQUFNO0FBQ05ELFlBQVEsMEJBQWtCO0FBQ3RCLFlBQUdpRCxhQUFILFdBQXdCO0FBQ3BCO0FBQ0g7O0FBRUQsWUFBSUMsWUFBWUQsZ0JBQWhCLENBQWdCQSxDQUFoQjtBQUNBLFlBQUlFLE9BQU9GLG1CQUFYLENBQVdBLENBQVg7QUFDQSxZQUFJRyxPQUFKO0FBQ0E7QUFDSTtBQUNJLHVCQUFPaEIsd0JBQVAsSUFBT0EsQ0FBUDtBQUNKO0FBQ0lnQix1QkFBT2hCLHlDQUFQZ0I7QUFDQTtBQUNKO0FBQ0lBLHVCQUFRaEIsMkNBQVJnQjtBQVBSOztBQVVBO0FBbkJFO0FBcUJObEQsbUJBQWUsNEJBQXNDO0FBQUEsWUFBdkJtRCxLQUF1QixvRUFBbEIsRUFBa0I7QUFBQSxZQUFkdEQsVUFBYyxvRUFBSixFQUFJOztBQUNqRCxZQUFJdUQsVUFBVWxCLHVCQUFkLEdBQWNBLENBQWQ7O0FBRUEsWUFBSW1CLFlBQVlGLE1BQU9HLFlBQVk1RCxpQkFBbkMsUUFBbUNBLEVBQW5DO0FBQ0EwRDs7QUFFQUc7O0FBRUE7QUFDSDtBQTlCSyxDQUFWOztBQWlDQSwrQ0FBK0M7QUFDM0NILDhCQUEwQixJQUExQkEsR0FBMEIsRUFBMUJBO0FBQ0FBLHFCQUFpQixJQUFqQkEsR0FBaUIsRUFBakJBOztBQUVBQSxrQkFBYyw0QkFBNEI7QUFDdEMsWUFBSUksUUFBUXpELDJCQUFaLE9BQVlBLENBQVo7QUFDQSxlQUFPLGdCQUFQLEtBQU8sQ0FBUDtBQUZKcUQ7O0FBS0FBLHlCQUFxQixpQkFBaUI7QUFDbEM7QUFDQTtBQUZKQTs7QUFLQUEsdUJBQW1CLHFCQUFxQjtBQUNwQztBQUNBO0FBRkpBOztBQUtBQSwwQkFBc0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFGSkE7O0FBS0FBLHNCQUFrQixlQUFhO0FBQzNCLGVBQU9BLHFCQUFQLEdBQU9BLENBQVA7QUFESkE7O0FBSUFBLG1CQUFlLHNCQUFzQjtBQUNqQztBQUNBO0FBRkpBOztBQUtBQSxzQkFBa0IsWUFBVTtBQUN4QixlQUFPLEtBQVA7QUFESkE7O0FBSUFBLG1CQUFlLGVBQWE7QUFDeEI7QUFDQTtBQUZKQTs7QUFLQUEsc0JBQWtCLGVBQWE7QUFDM0IsZUFBT0EsUUFBUCxHQUFPQSxDQUFQO0FBREpBOztBQUlBQSxtQkFBZSxzQkFBc0I7QUFDakM7QUFDQTtBQUZKQTs7QUFLQUEsa0JBQWMsc0JBQW9CO0FBQzlCO0FBQ0E7QUFGSkE7O0FBS0FBLG1CQUFlLG1CQUFpQjtBQUM1QixpQkFBUTtBQUNKLGdCQUFJL0QsT0FBSjtBQUNBO0FBQ0EsK0JBQW1CLGFBQW5CO0FBQ0g7QUFDRDtBQU5KK0Q7QUFRQUEscUJBQWlCLGVBQWE7QUFDMUIsWUFBSS9ELE9BQUo7QUFDQTtBQUNBLDhCQUFzQixhQUF0QjtBQUNBO0FBSkorRDs7QUFPQUEscUJBQWlCLHNCQUFvQjtBQUNqQyxZQUFJL0IsS0FBSyxnQkFBVCxHQUFTLENBQVQ7QUFDQSxnQkFBTTtBQUNGLGdCQUFHQSxxQkFBcUIsS0FBckJBLFdBQUgsT0FBOEM7QUFDMUM7QUFDSDtBQUNKO0FBTkwrQjs7QUFTQUEsaUJBQWMseUJBQWlDO0FBQUEsWUFBVEUsTUFBUyxvRUFBSCxFQUFHOztBQUMzQyxZQUFJakUsT0FBSjtBQUNBLFlBQUlvRSxXQUFXQyxZQUFmO0FBQ0EsWUFBSUMsZUFBZVAsNEJBQW5CLFFBQW1CQSxDQUFuQjtBQUNBLDBCQUFnQjtBQUNaO0FBQ0FBO0FBQ0g7QUFDRCxnQkFBTztBQUNITywyQkFBZSx5QkFBYTtBQUN4QnRDLGlDQUFpQmhDLEtBQWpCZ0M7QUFESnNDO0FBR0FQO0FBQ0E7QUFDSDtBQUNEO0FBZkpBOztBQWtCQUEsc0JBQWtCLGVBQWU7QUFDN0I7QUFDQTtBQUZKQTs7QUFLQUEseUJBQXFCLFlBQVU7QUFDM0I7QUFDQSxZQUFHLEtBQUgsUUFBZTtBQUNYO0FBREosZUFFSztBQUNEO0FBQ0g7QUFOTEE7O0FBU0FBLGdDQUE0QixZQUFVO0FBQ2xDLGVBQU8sS0FBUCxZQUF3QjtBQUNwQiw2QkFBaUIsS0FBakI7QUFDSDtBQUhMQTs7QUFNQUEsMEJBQXNCLDRCQUEyQjtBQUM3QyxZQUFJL0QsT0FBSjtBQUNBLFlBQUlrQixRQUFKLFdBQXVCO0FBQ25CO0FBQ0g7QUFDRCxZQUFJLDhEQUFKLFVBQTZCO0FBQ3pCYixnREFBMEIscUJBQXFCO0FBQzNDTDtBQURKSztBQUdBO0FBQ0g7O0FBRUQsWUFBSWtFLElBQUlsRSwyQkFBUixLQUFRQSxDQUFSOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBQ0o7QUFDSSxvQkFBSTZDLFVBQUosT0FBcUI7QUFDakI7QUFESix1QkFFTztBQUNIO0FBQ0g7QUFDRDtBQUNKO0FBQ0k7QUFDQTtBQWJSO0FBZUE7QUE3QkphOztBQWdDQUEsMkJBQXVCLFlBQXdCO0FBQUEsWUFBZHZELFVBQWMsb0VBQUosRUFBSTs7QUFDM0MsWUFBSWdFLFVBQVVoRSxtQkFBZDtBQUNBLFlBQUlpRSxVQUFVakUsbUJBQWQ7O0FBRjJDLG9DQUdmLEtBSGUscUJBR2YsRUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUdlOzs7QUFDMUQsWUFBSWtFLEtBQUtDLElBQVQ7QUFDQSxZQUFJQyxLQUFLQyxJQUFUO0FBQ0EsWUFBSUMsYUFBYTVFLE9BQWpCO0FBQ0EsWUFBSTZFLGNBQWM3RSxPQUFsQjtBQUNBLGVBQU8sRUFBRXdFLE1BQU8sSUFBUEEsV0FBc0JDLEtBQU1HLGFBQTVCSixXQUFxREUsTUFBTyxJQUE1REYsV0FBNEVHLEtBQU1FLGNBQTNGLE9BQU8sQ0FBUDtBQVJKaEI7QUFVSDs7a0JBRWNyRCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTWY7Ozs7Ozs7O0FBRUEsSUFBSUksVUFBVTtBQUNWa0UsYUFBUyxJQURDLEdBQ0QsRUFEQztBQUVWQyxjQUFXLElBRkQsR0FFQyxFQUZEO0FBR1ZwRSxjQUFVLDhCQUFvQztBQUFBLFlBQWRMLFVBQWMsb0VBQUosRUFBSTs7QUFDMUMsWUFBSVIsT0FBSjtBQUNBLFlBQUlnRixVQUFVLEtBQWQ7QUFGMEM7O0FBSTFDLFlBQUlFLGNBQUo7QUFDQSxZQUFJQyxXQUFXSCxZQUFmLEdBQWVBLENBQWY7QUFDQSxZQUFHM0Usb0NBQTBCQSwwQkFBMUJBLFFBQTBCQSxDQUExQkEsSUFBdUQrRSxVQUExRCxNQUEwRTtBQUN0RS9FLGtEQUE0QiwwQkFBMEI7QUFDbEQsb0JBQUljLFNBQUosT0FBb0I7QUFDaEIrRDtBQUNIO0FBQ0RuRCwyQkFBV21CLE1BQVhuQixHQUFXbUIsQ0FBWG5CO0FBSkoxQjtBQURKLGVBUU07QUFDRjZFO0FBQ0FGO0FBQ0g7O0FBRUQsWUFBSUssV0FBV0wsWUFBZixHQUFlQSxDQUFmOztBQUVBLHlCQUFnQjtBQUNiO0FBQ0Y7O0FBRUQ7QUE1Qk07QUE4QlZNLGVBQVcsa0NBQXFDO0FBQUEsWUFBYjlFLFVBQWEsb0VBQUgsRUFBRzs7QUFDNUMsWUFBSVIsT0FBSjtBQUNBLFlBQUl1RixRQUFRLGtCQUFaLEdBQVksQ0FBWjs7QUFFQSxtQkFBVztBQUNQcEY7QUFDSDs7QUFFRG9GLGdCQUFRLFlBQVksWUFBWTtBQUM1QixnQkFBSTFCLE9BQU9oQixnQ0FBZ0MsYUFBaENBLFFBQVg7QUFDQSxpQkFBSyxJQUFJRyxJQUFULEdBQWdCQSxJQUFJYSxLQUFwQixhQUFzQztBQUNsQyxvQkFBSW5ELE1BQU1tRCxLQUFWLENBQVVBLENBQVY7QUFDQW5ELDhCQUFjQSxnQkFBZEEsUUFBY0EsQ0FBZEE7QUFDSDtBQUNEVjtBQU5JLFdBT0xRLDBCQVBIK0UsRUFBUSxDQUFSQTs7QUFTQTtBQS9DTTtBQWlEVmxFLGNBQVUsdUJBQWU7QUFDckIsZUFBTyxpQkFBUCxHQUFPLENBQVA7QUFDSDtBQW5EUyxDQUFkOztrQkFzRGVQLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERmLElBQU1hLE1BQU07QUFDUjZELFVBQU0sZ0JBQXVCO0FBQUEsWUFBYjlELFNBQWEsb0VBQUosRUFBSTs7QUFDekIsWUFBSStELFVBQVUsWUFBWSwyQkFBMkI7QUFBQSx1QkFDd0IvRCxVQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBR2pELGdCQUFJRCxVQUFVLElBQWQsY0FBYyxFQUFkO0FBQ0FBLHlCQUFjaUUsVUFBZGpFLFlBQXFDa0UsNkJBQXJDbEU7O0FBRUEsaUJBQUssSUFBTCxPQUFpQm1FLFVBQWpCLElBQWdDO0FBQzVCLG9CQUFJLENBQUNBLFVBQUQsbUJBQUosR0FBSSxDQUFKLEVBQXdDO0FBQ3BDbkUsa0RBQThCbUUsT0FBOUJuRSxHQUE4Qm1FLENBQTlCbkU7QUFDSDtBQUNKO0FBQ0QsZ0JBQUd0QixZQUFILGVBQUdBLENBQUgsRUFBZ0M7QUFDNUJzQiwwREFBMEN0QixZQUExQ3NCLGVBQTBDdEIsQ0FBMUNzQjtBQUNIO0FBQ0RBLDZCQUFpQixZQUFZO0FBQ3pCLG9CQUFJQSx5QkFBeUJBLGlCQUE3QixLQUFtRDtBQUMvQ29FLDRCQUFRQSxLQUFLQyxVQUFVckUsUUFBZm9FLFlBQUtDLENBQUxELEVBQVJBLE9BQVFBLENBQVJBO0FBQ0FFLDRCQUFRRCxVQUFVckUsUUFBbEJzRSxZQUFRRCxDQUFSQztBQUZKLHVCQUdPO0FBQ0hDLDRCQUFRQSxLQUFLRixVQUFVckUsUUFBZnVFLFlBQUtGLENBQUxFLEVBQVJBLE9BQVFBLENBQVJBO0FBQ0FDLDJCQUFPSCxVQUFVckUsUUFBakJ3RSxZQUFPSCxDQUFQRztBQUNIO0FBUEx4RTs7QUFVQUEsOEJBQWtCLFlBQVk7QUFDMUJ1RSx3QkFBUUEsS0FBS0YsVUFBVXJFLFFBQWZ1RSxZQUFLRixDQUFMRSxFQUFSQSxPQUFRQSxDQUFSQTtBQUNBQyx1QkFBT0gsVUFBVXJFLFFBQWpCd0UsWUFBT0gsQ0FBUEc7QUFGSnhFOztBQUtBQSx3Q0FBNEIsYUFBYTtBQUNyQyxvQkFBSWtCLElBQUlSLFdBQVcrRCxXQUFXQSxFQUFYQSxRQUFuQixHQUFRL0QsQ0FBUjtBQUNBZ0UsOEJBQWNBLGNBQWRBLENBQWNBLENBQWRBO0FBRkoxRTs7QUFLQSxnQkFBSTJFLGFBQUo7QUFDQTtBQUNJO0FBQ0lBO0FBQ0E7QUFDSjtBQUNBO0FBQ0kzRSw2REFBeUM0RSxnRUFBekM1RTtBQUNBMkUsNEJBQVFFLGVBQVJGLElBQVFFLENBQVJGO0FBUFI7O0FBVUFHLDBCQUFjQSxXQUFkQSxPQUFjQSxDQUFkQTs7QUFFQTlFO0FBL0NKLFNBQWMsQ0FBZDs7QUFrREE7QUFDSDtBQXJETyxDQUFaOztBQXdEQSx5QkFBeUI7QUFDckIsUUFBRztBQUNDLGVBQU82RSxXQUFXRSxRQUFsQixFQUFPRixDQUFQO0FBREosTUFFQyxVQUFVO0FBQ1A7QUFDSDtBQUNKOztrQkFFYzNFLEc7Ozs7Ozs7Ozs7Ozs7O0FDaEVmOzs7Ozs7OztBQUVBLElBQU04RSxRQUFOO0FBQ0EsSUFBTUMsUUFBTjtBQUNBLElBQU1DLGNBQU47QUFDQSxJQUFNQyxNQUFOO0FBQ0EsSUFBTUMsWUFBTjtBQUNBLElBQU1DLFNBQU47QUFDQTNHLGtDQUF3QixFQUFDNEcsT0FBTzdHLE9BQVIsWUFBMkI4RyxRQUFROUcsT0FBM0RDLFdBQXdCLEVBQXhCQTtBQUNBRCxrQ0FBa0MsWUFBWTtBQUMxQ0MseUNBQTJCLEVBQUM0RyxPQUFPN0csT0FBUixZQUEyQjhHLFFBQVE5RyxPQUE5REMsV0FBMkIsRUFBM0JBO0FBREpEOztBQUlBLElBQUkrRyxTQUFKO0FBQ0EvRyxrQkFBa0IsWUFBVztBQUN6QmdILHVCQUFtQixZQUFVO0FBQ3pCO0FBQ0EvRyx1Q0FBcUIsZ0JBQWdCO0FBQ2pDZ0gsdUJBRGlDO0FBRWpDQyxtQkFBT047QUFGMEIsU0FBaEIsQ0FBckIzRztBQUlBK0cseUJBQWlCO0FBQ2JDLHVCQURhO0FBRWJDLG1CQUFPTjtBQUZNLFNBQWpCSTtBQUlBQTtBQUNBRyxxQkFBYXhFLHdCQUFid0UsYUFBYXhFLENBQWJ3RTtBQVhKSDtBQURKaEg7O0FBZ0JBLCtCQUErQjtBQUMzQkMsbUVBQ0ksc0JBQXFCO0FBQ2pCQTtBQUZSQSxPQUdPLGlCQUFnQjtBQUNmbUgsY0FBTWhCLGlDQUFOZ0IsQ0FBTWhCLENBQU5nQjtBQUpSbkg7QUFNSDs7QUFFRCw0QkFBNEI7QUFDeEIsUUFBSW9ILFlBQVksb0JBQ1A7QUFDREMsbUJBREM7QUFFREMsaUJBRkM7QUFHRFYsZUFIQztBQUlEVyxnQkFBUTtBQUpQLEtBRE8sY0FPQyxZQUFZO0FBQ3JCVCxpQkFBVUEsVUFBVUEscUJBQXFCVSxTQUFoQyxPQUFXVixDQUFWQSxJQUFxRCxJQUFJVyxHQUFKLGlCQUF3QjtBQUNuRlosb0JBQVE5RyxxQkFEMkU7QUFFbkY2RyxtQkFGbUY7QUFHbkZjLHFCQUFTRixTQUgwRTtBQUluRkcsb0JBQVE7QUFDSiwyQkFBVyx3QkFBaUI7QUFDeEJDO0FBRkE7QUFJSixpQ0FBaUIsMEJBQWEsQ0FFN0I7QUFORztBQUoyRSxTQUF4QixDQUEvRGQ7QUFhQXBFO0FBckJSLEtBQWdCLENBQWhCOztBQXdCQTBFLDZCQUNTO0FBQ0RSLGVBREM7QUFFREMsZ0JBQVE7QUFGUCxLQURUTyxPQUtVO0FBQ0ZTLGFBQUtMLGdDQURIO0FBRUZNLGVBQU07QUFGSixLQUxWVjs7QUFVQUEsZ0NBRWFJLGNBRmJKLFdBR1M7QUFDRFcsZUFEQztBQUVEQyxrQkFGQztBQUdEQyxzQkFIQztBQUlEQyxvQkFBWTtBQUpYLEtBSFRkO0FBU0g7O0FBRUQsaUJBQWlCO0FBQ2IsUUFBSWUsT0FBT25JLG9CQUFYLE9BQVdBLENBQVg7QUFDQSxRQUFJb0ksTUFBTSw2Q0FDRDtBQUNEeEIsZUFEQztBQUVEQyxnQkFGQztBQUdEd0Isb0JBSEM7QUFJREMsa0JBSkM7QUFLRE4sa0JBQVU7QUFMVCxLQURDLENBQVY7QUFRQUc7O0FBRUEsUUFBSUksY0FBYyxtREFFVDtBQUNEakIsaUJBREM7QUFFRGdCLGtCQUZDO0FBR0RQLGVBSEM7QUFJRFMsYUFKQztBQUtEQyxlQUxDO0FBTURsQixnQkFOQztBQU9EbUIsb0JBQVk7QUFQWCxLQUZTLG1CQVdJLFlBQVk7QUFDMUI7QUFaVSx3QkFjSSxZQUFZO0FBQzFCO0FBZlUsb0JBaUJBLFlBQVk7QUFDdEI7QUFsQlIsS0FBa0IsQ0FBbEI7O0FBcUJBLFFBQUlDLFlBQVksbUJBQ1A7QUFDREwsa0JBREM7QUFFREUsYUFGQztBQUdEbEIsaUJBSEM7QUFJRFYsZUFKQztBQUtEeUIsb0JBTEM7QUFNRGhCLG1CQU5DO0FBT0R1QixnQkFBUTtBQVBQLEtBRE8sdUJBVVUsYUFBYTtBQUMvQixpQkFBUztBQUNMSixpQkFBS0sscUJBQXFCO0FBRHJCLFNBQVQ7QUFYUSx3QkFnQlA7QUFDRFIsb0JBREM7QUFFRFMsZ0JBRkM7QUFHREMsc0JBSEM7QUFJRHpCLGlCQUpDO0FBS0RTLGVBTEM7QUFNRG5CLGVBTkM7QUFPRDhCLG9CQUFZO0FBUFgsS0FoQk8sT0F5Qk47QUFDRk0scUJBQWE7QUFEWCxLQXpCTSxjQTRCQyxhQUFhO0FBQ3RCLFlBQUlqRCxjQUFKLElBQXNCO0FBQ2xCLGdCQUFJekUsVUFBVSxnQ0FBZ0M7QUFDMUMySCxtQkFBR2xELFNBRHVDO0FBRTFDbUQsc0JBRjBDO0FBRzFDQyw0QkFBWTtBQUg4QixhQUFoQyxDQUFkOztBQU1BN0gsNEJBQWdCLG9CQUFvQjtBQUNoQ3RCLHNEQUE0Qm9KLGdCQUE1QnBKO0FBREpzQjtBQUdIO0FBdkNULEtBQWdCLENBQWhCO0FBeUNBOEcsMENBQ1M7QUFDRGlCLG9CQUFZO0FBRFgsS0FEVGpCO0FBS0FBLGtDQUNTO0FBQ0R4QixlQURDO0FBRURVLGlCQUZDO0FBR0RnQyxpQkFIQztBQUlEQyxrQkFBVTtBQUpULEtBRFRuQix1QkFPMEIsYUFBYTtBQUMvQixZQUFJdkksT0FBSjtBQUNBQTtBQUNBLFNBQUNnSixLQUFELFlBQWtCLGFBQWE7QUFDM0JXO0FBREo7QUFWUnBCOztBQWdCQUEsa0NBQ1M7QUFDRHZCLGdCQUFRO0FBRFAsS0FEVHVCO0FBSUg7QUFDRHFCLFEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS9kb20nO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XHJcbmltcG9ydCByYWYgZnJvbSAnLi9jb21tb24vcmFmJztcclxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbi9jb21tb24nO1xyXG5pbXBvcnQgeGhyIGZyb20gJy4veGhyL3hocic7XHJcblxyXG5jb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxuXHJcbnZhciBjYztcclxud2luZG93LmNjID0gY2MgPSB7XHJcbiAgICB0b29sczogY29tbW9uLFxyXG4gICAgbG9hZDogZnVuY3Rpb24oYWRkT25zID0gW10sIG9wdGlvbnMgPSB7fSl7XHJcblxyXG4gICAgfSxcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBkb20uc2VsZWN0KHNlbGVjdG9yKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWdOYW1lLCBpZCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBkb20uY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBpZCwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uICh0YWdOYW1lLCBpZCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5OUyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIGlkLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5yZXNldCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBzYXZlQXJyYXk6IGZ1bmN0aW9uKGtleSwgYXJyID0gW10sIGlka2V5KXtcclxuICAgICAgICBpZihpZGtleSAhPT0gdW5kZWZpbmVkICYmIGlka2V5ICE9PSAnJyAmJiBrZXkgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYy51cGRhdGVWYWx1ZShpdGVtW2lka2V5XSwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5zZXRWYWx1ZShrZXksIGFycik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBnZXRWYWx1ZTogIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRWYWx1ZShrZXkpO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVyOiBmdW5jdGlvbiAoZm4sIGRlbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHJhZi5yZXF1ZXN0VGltZW91dChmbiwgZGVsYXkpXHJcbiAgICB9LFxyXG4gICAgY2FuY2VsVGltZXI6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICByYWYuY2xlYXJSZXF1ZXN0VGltZW91dChoYW5kbGUpO1xyXG4gICAgfSxcclxuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB4aHIuYWpheChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmlmKElTX1dPUktFUil7XHJcbiAgICBkZWxldGUgY2Muc2VsZWN0O1xyXG4gICAgZGVsZXRlIGNjLmNyZWF0ZUVsZW1lbnQ7XHJcbiAgICBkZWxldGUgY2MuY3JlYXRlRWxlbWVudE5TO1xyXG59ZWxzZXtcclxuICAgIGxldCBsYXN0ID0gMFxyXG4gICAgbGV0IGZyYW1lVGlja2VyID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGNjLnNldFZhbHVlKCdmcmFtZScsIHRpbWVzdGFtcCwge2ltbWVkaWF0ZWx5OiB0cnVlfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aW1lc3RhbXAgLSBsYXN0KTtcclxuICAgICAgICBsYXN0ID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHJhZi5yZXF1ZXN0VGltZW91dChmcmFtZVRpY2tlciwgMTYpXHJcbiAgICB9O1xyXG4gICAgZnJhbWVUaWNrZXIoMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYzsiLCJjb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxuY29uc3QgY29tbW9uID0ge307XHJcblxyXG5jb21tb24ub2JqZWN0Zm9yRWFjaCA9IGZ1bmN0aW9uKG9iaixmbil7XHJcbiAgICBmb3IodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZm4ob2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ub2JqZWN0QXNzaWduID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2Upe1xyXG4gICAgZm9yKGxldCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuY29tbW9uLmNyZWF0ZUlkID0gZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbn07XHJcblxyXG5jb21tb24uaXNPYmplY3QgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIChpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiAhKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSkpXHJcbn07XHJcblxyXG5jb21tb24uZ2V0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgIGlmICgoISFDT05URVhULm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhQ09OVEVYVC5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCkge1xyXG4gICAgICAgIGlzT3BlcmEgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgfVxyXG4gICAgaWYgKC9jb25zdHJ1Y3Rvci9pLnRlc3QoQ09OVEVYVC5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgIH0pKCFDT05URVhUWydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpIHtcclxuICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcclxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNJRSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzSUUgJiYgISFDT05URVhULlN0eWxlTWVkaWEpIHtcclxuICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhQ09OVEVYVC5jaHJvbWUgJiYgISFDT05URVhULmNocm9tZS53ZWJzdG9yZSkge1xyXG4gICAgICAgIGlzQ2hyb21lID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgIH1cclxuICAgIGlmICgoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISFDT05URVhULkNTUykge1xyXG4gICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29tbW9uLnJlYWRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgIHJldHVybiB2YWx1ZShvcHRpb25zKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJjb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxudmFyIHJhZiA9IHtcclxuICAgIHJlcXVlc3RUaW1lb3V0OiBmdW5jdGlvbiAoZm4sIGRlbGF5KSB7XHJcbiAgICAgICAgaWYgKCFDT05URVhULnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIGRlbGF5KTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb29wKHRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAoRGF0ZS5ub3coKSAtIHN0YXJ0KSA+PSBkZWxheSA/IGZuKHRpbWVzdGFtcCkgOiBoYW5kbGUudmFsdWUgPSBDT05URVhULnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoYW5kbGUudmFsdWUgPSBDT05URVhULnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfSxcclxuICAgIGNsZWFyUmVxdWVzdFRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICBDT05URVhULmNhbmNlbEFuaW1hdGlvbkZyYW1lID8gQ09OVEVYVC5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpOmNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFmOyIsImltcG9ydCBjb21tb24gZnJvbSAnLi4vY29tbW9uL2NvbW1vbidcclxudmFyIGRvbSA9IHtcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgIGlmKHNlbGVjdG9yPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IF9zZWxlY3RvciA9IHNlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgZG9tcyA9IFtdO1xyXG4gICAgICAgIHN3aXRjaCAoX3NlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgZG9tcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZSkgfHwgW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRvbXMgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpIHx8IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvbXM7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZywgaWQgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50SWQgPSBpZCB8fCAodGFnICsgJ18nICsgY29tbW9uLmNyZWF0ZUlkKCkpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIHNldHVwRWxlbWVudE1ldGhvZHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudE1ldGhvZHMoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBlbGVtZW50Ll9ib3VuZCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBlbGVtZW50LmFkZCA9IGZ1bmN0aW9uICh0YWcsIGlkLCBvcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gZG9tLmNyZWF0ZUVsZW1lbnQodGFnLCBpZCwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRWxlbWVudChjaGlsZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZFxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmFkZENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldEF0dHIgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ2F0dHInLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXREYXRhID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmRhdGEgPSBmdW5jdGlvbihhbnkpe1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBhbnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0UHJvcCA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRba2V5XTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5wcm9wID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdwcm9wJywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuY3NzID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgnY3NzJywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYmluZCA9IGZ1bmN0aW9uKGtleSwgZm4pe1xyXG4gICAgICAgIGlmKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kLnNldChrZXksIGZuKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzdG9yYWdlXycgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBlbGVtZW50LnVuYmluZCA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2JvdW5kLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcmFnZV8nICsga2V5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5fcmVhY3QgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICBsZXQgZm4gPSB0aGlzLl9ib3VuZC5nZXQoa2V5KTtcclxuICAgICAgICBpZihmbil7XHJcbiAgICAgICAgICAgIGlmKGZuLmNhbGwodGhpcywgdmFsdWUsIHRoaXMuX2RhdGEpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZChrZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQub24gID0gZnVuY3Rpb24oZXZlbnROYW1lLCBmbiwgdGFnID0gJycpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZXZlbnRUYWcgPSBldmVudE5hbWUgKyB0YWc7XHJcbiAgICAgICAgbGV0IGV2ZW50SGFuZGxlciA9IGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLmdldChldmVudFRhZyk7XHJcbiAgICAgICAgaWYoZXZlbnRIYW5kbGVyKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuZGVsZXRlKGV2ZW50VGFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZm4pIHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGZuLmNhbGwoc2VsZiwgZSwgc2VsZi5fZGF0YSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLnNldChldmVudFRhZywgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmNvbnRlbnQgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlU2VsZiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnJlbW92ZUFsbENoaWxkcmVuID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuX3NldEVsZW1lbnQgPSBmdW5jdGlvbih0eXBlLCBrZXkgLCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbW1vbi5vYmplY3Rmb3JFYWNoKGtleSAsZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlXShrZXksIGl0ZW0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ID0gY29tbW9uLnJlYWRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwcm9wJzpcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhdHRyJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShrZXkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IG9wdGlvbnMub2Zmc2V0WCB8fCAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gb3B0aW9ucy5vZmZzZXRZIHx8IDA7XHJcbiAgICAgICAgbGV0IHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vSUUgbm90IHN1cHBvcnQgYm90dG9tIHJpZ2h0XHJcbiAgICAgICAgbGV0IHgyID0geCArIHdpZHRoO1xyXG4gICAgICAgIGxldCB5MiA9IHkgKyBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuICEoeDIgPD0gKDAgKyBvZmZzZXRYKXx8IHggPj0gKGlubmVyV2lkdGggLSBvZmZzZXRYKSB8fCB5MiA8PSAoMCArIG9mZnNldFkpIHx8IHkgPj0gKGlubmVySGVpZ2h0IC0gb2Zmc2V0WSkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJztcclxuXHJcbnZhciBzdG9yYWdlID0ge1xyXG4gICAgZGF0YU1hcDogbmV3IE1hcCgpLFxyXG4gICAgdGltZXJNYXA6ICBuZXcgTWFwKCksXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZGF0YU1hcCA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICBsZXQge3Jlc2V0fSA9IG9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNob3VsZFJlYWN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gZGF0YU1hcC5nZXQoa2V5KTtcclxuICAgICAgICBpZihjb21tb24uaXNPYmplY3QodmFsdWUpICYmIGNvbW1vbi5pc09iamVjdChvbGRWYWx1ZSkgJiYgcmVzZXQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29tbW9uLm9iamVjdGZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXksIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZVtrZXldXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhTWFwLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGRhdGFNYXAuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmKHNob3VsZFJlYWN0KSB7XHJcbiAgICAgICAgICAgdGhpcy5icm9hZGNhc3Qoa2V5LCBuZXdWYWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYnJvYWRjYXN0OiBmdW5jdGlvbihrZXksIG5ld1ZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLnRpbWVyTWFwLmdldChrZXkpO1xyXG5cclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgY2MuY2FuY2VsVGltZXIodGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIgPSBjYy5zZXRUaW1lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBkb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcmFnZV8nICsga2V5KSB8fCBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9tID0gZG9tc1tpXTtcclxuICAgICAgICAgICAgICAgIGRvbS5fcmVhY3QgJiYgZG9tLl9yZWFjdChrZXksIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnRpbWVyTWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIH0sIG9wdGlvbnMuaW1tZWRpYXRlbHk/IDA6IDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lck1hcC5zZXQoa2V5LCB0aW1lcik7XHJcbiAgICB9LFxyXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChrZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJjb25zdCB4aHIgPSB7XHJcbiAgICBhamF4OiBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IHt1cmwsIG1ldGhvZCwgZGF0YSwgYXN5bmMsIHhociwgY29udGVudFR5cGUsIGRhdGFUeXBlLCBkb25lLCBmYWlsfSA9IHBhcmFtcyB8fCB7fTtcclxuICAgICAgICAgICAgbGV0IHtoZWFkZXIsIG9uUHJvZ3Jlc3MsIGJlZm9yZVNlbmR9ID0gcGFyYW1zO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oKG1ldGhvZCB8fCAnR0VUJyksIHVybCwgYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhc3luYyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gKGhlYWRlciB8fCB7fSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoaGVhZGVyIHx8IHt9KS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNjLmdldFZhbHVlKCdBdXRob3JpemF0aW9uJykpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgY2MuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSAmJiBkb25lKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gTWF0aC5mbG9vcihlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyAmJiBvblByb2dyZXNzKHAsIGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IF9kYXRhO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxlJzpcclxuICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIgOiBjb250ZW50VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmVmb3JlU2VuZCAmJiBiZWZvcmVTZW5kKHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKF9kYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcclxuICAgIHRyeXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhIHx8ICcnKVxyXG4gICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB4aHI7XHJcbiIsImltcG9ydCBjYyBmcm9tICcuL2NjanMvY2MnO1xyXG5cclxuY29uc3QgV0hJVEUgPSAncmdiYSgyNTUsMjU1LDI1NSwgMC43KSc7XHJcbmNvbnN0IEJMQUNLID0gJ3JnYmEoMCwwLDAsIDAuOSknO1xyXG5jb25zdCBCTEFDS19TT0xJRCA9ICdyZ2IoMjUsIDI1LCAyNSknO1xyXG5jb25zdCBSRUQgPSAnI2Q2MzAzMSc7XHJcbmNvbnN0IENMSUVOVF9JRCA9ICc4NDU4MjIwNTA4MDgtdGpjZTJtbjlrdTBoZTJicWw5dmJuMDU2N3BicmJpbnUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5jb25zdCBTQ09QRVMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLnJlYWRvbmx5JztcclxuY2Muc2V0VmFsdWUoJ3ZpZXdwb3J0Jywge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNjLnVwZGF0ZVZhbHVlKCd2aWV3cG9ydCcsIHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fSk7XHJcbn0pO1xyXG5cclxubGV0IHBsYXllciA9IHVuZGVmaW5lZDtcclxud2luZG93LnN0YXJ0QXBwID0gZnVuY3Rpb24oKSB7XHJcbiAgICBnYXBpLmxvYWQoJ2F1dGgyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgc2luZ2xldG9uIGZvciB0aGUgR29vZ2xlQXV0aCBsaWJyYXJ5IGFuZCBzZXQgdXAgdGhlIGNsaWVudC5cclxuICAgICAgICBjYy5zZXRWYWx1ZSgnYXV0aDInLCBnYXBpLmF1dGgyLmluaXQoe1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcclxuICAgICAgICAgICAgc2NvcGU6IFNDT1BFUyxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZ2FwaS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogQ0xJRU5UX0lELFxyXG4gICAgICAgICAgICBzY29wZTogU0NPUEVTLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2FwaS5jbGllbnQubG9hZCgneW91dHViZScsICd2MycpO1xyXG4gICAgICAgIGF0dGFjaFNpZ25pbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnT0F1dGhCdXR0b24nKSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFNpZ25pbihlbGVtZW50KSB7XHJcbiAgICBjYy5nZXRWYWx1ZSgnYXV0aDInKS5hdHRhY2hDbGlja0hhbmRsZXIoZWxlbWVudCwge30sXHJcbiAgICAgICAgZnVuY3Rpb24oZ29vZ2xlVXNlcikge1xyXG4gICAgICAgICAgICBjYy5zZXRWYWx1ZSgndXNlcicsIGdvb2dsZVVzZXIpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycm9yLCB1bmRlZmluZWQsIDIpKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVmlkZW8odmlkZW8pIHtcclxuICAgIGxldCBjb250YWluZXIgPSB0aGlzLmFkZCgnZGl2JylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzIwcHgnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGxheWVyID0gKHBsYXllciAmJiBwbGF5ZXIubG9hZFZpZGVvQnlJZCh2aWRlby5pZC52aWRlb0lkKSkgfHwgbmV3IFlULlBsYXllcigncGxheWVyJywge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICB2aWRlb0lkOiB2aWRlby5pZC52aWRlb0lkLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ29uUmVhZHknOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQ29udGFpbmVyJykuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuYWRkKCdpbWcnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxNzBweCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cih7XHJcbiAgICAgICAgICAgIHNyYzogdmlkZW8uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmwsXHJcbiAgICAgICAgICAgIGFsaWduOlwibWlkZGxlXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXJcclxuICAgICAgICAuYWRkKCdoNCcpXHJcbiAgICAgICAgLmNvbnRlbnQodmlkZW8uc25pcHBldC50aXRsZSlcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgbGV0IHJvb3QgPSBjYy5zZWxlY3QoJyNib2R5Jyk7XHJcbiAgICBsZXQgYXBwID0gY2MuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2FwcCcpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMTgsIDE4LCAxOCknLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChhcHApO1xyXG5cclxuICAgIGxldCBsb2dpbkJ1dHRvbiA9IGFwcC5hZGQoJ2EnLCAnT0F1dGhCdXR0b24nKVxyXG4gICAgICAgIC5jb250ZW50KCdTaWduIEluJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2RhcmtyZWQnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJzAuMnMnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNzcygnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKCdjb2xvcicsICdkYXJrcmVkJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCgndXNlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50KCdTaWduIG91dCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGxldCBzZWFyY2hCYXIgPSBhcHAuYWRkKCdkaXYnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgdG9wOiAnY2FsYyg1MHZoIC0gMzVweCknLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDAnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigxOCwgMTgsIDE4KScsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHpJbmRleDogOVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJpbmQoJ3NlYXJjaFJlc3VsdCcsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRvcDogZC5sZW5ndGggPiAwID8gJzAnIDogJ2NhbGMoNTB2aCAtIDM1cHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFkZCgnaW5wdXQnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzEuNXB4IHNvbGlkIHJnYig2NCwgNjQsIDY0KScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggOHB4JyxcclxuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjIzLCAyMjMsIDIyMyknLFxyXG4gICAgICAgICAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJzAuMnMnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cih7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIFZpZGVvJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IGdhcGkuY2xpZW50LnlvdXR1YmUuc2VhcmNoLmxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHE6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnQ6ICdzbmlwcGV0JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOiA1MFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5leGVjdXRlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNldFZhbHVlKCdzZWFyY2hSZXN1bHQnLCByZXNwb25zZS5yZXN1bHQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIGFwcC5hZGQoJ2RpdicsICdwbGF5ZXJDb250YWluZXInKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnNTFweCdcclxuICAgICAgICB9KS5hZGQoJ2RpdicsICdwbGF5ZXInKVxyXG4gICAgO1xyXG4gICAgYXBwLmFkZCgnZGl2JywgJ2xhbmRpbmcnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzMycHgnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iaW5kKCdzZWFyY2hSZXN1bHQnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgKGQgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclZpZGVvLmNhbGwoc2VsZiwgdilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgYXBwLmFkZCgnZGl2JywgJ3dhdGNoZWQnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcclxuICAgICAgICB9KVxyXG59XHJcbmluZGV4KCk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9