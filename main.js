/*
	
	Roku Remote

 */

	var menubar = require('menubar');
	var Server = require('electron-rpc/server')
	var app = new Server()

	var mb = menubar({
	    "preloadWindow": true,
	    "width": 370,
	    "height": 510
	});
	mb.on('ready', function ready() {
	    //mb.window.openDevTools();
	    app.on('terminate', function terminate (ev) {
		    mb.app.quit()
		});
	});