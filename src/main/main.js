"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var MyApp = /** @class */ (function () {
    function MyApp(app) {
        var _this = this;
        this.mainURL = "file://" + __dirname + "/index.html";
        this.onReady = function () {
            _this.window = new electron_1.BrowserWindow();
            _this.window.loadURL(_this.mainURL);
            _this.window.webContents.openDevTools();
        };
        this.onActivated = function () { };
        this.onWindowAllClosed = function () {
            _this.app.quit();
        };
        this.app = app;
        this.app.on("ready", this.onReady);
        this.app.on("activate", this.onActivated);
        this.app.on("window-all-closed", this.onWindowAllClosed);
    }
    return MyApp;
}());
new MyApp(electron_1.app);
