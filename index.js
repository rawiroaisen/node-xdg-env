"use strict"

var fs = require('fs')
var path = require('path')

var env = module.exports = {}

env.DATA_HOME = process.env.XDG_DATA_HOME || path.join(process.env.HOME, '.local/share')

env.CONFIG_HOME = process.env.XDG_CONFIG_HOME || path.join(process.env.HOME, '.config')

// ":" separated list ordered by importance
env.DATA_DIRS = (process.env.XDG_DATA_DIRS || '/usr/local/share/:/usr/share/').split(':')
// The first $XDG_DATA_DIR is always $XDG_DATA_HOME
env.DATA_DIRS.unshift(env.DATA_HOME)

// ":" separated list ordered by importance
env.CONFIG_DIRS = (process.env.XDG_CONFIG_DIRS || '/etc/xdg').split(':')

env.CACHE_HOME = process.env.XDG_CACHE_HOME || path.join(process.env.HOME, '.cache')

// See http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html
env.RUNTIME_DIR = process.env.XDG_RUNTIME_DIR

// ":" separated list
env.CURRENT_DESKTOP = process.env.XDG_CURRENT_DESKTOP ? process.env.XDG_CURRENT_DESKTOP.split(':') : []

env.USER_DIRS = {}

;(function(){
	try{
		var content = fs.readFileSync(path.join(env.CONFIG_HOME, 'user-dirs.dirs'), 'utf-8');
	} catch(e){
		return	
	}
	var reg = /^XDG_(\w+)_DIR[^\S\n]*=[^\S\n]*(["'])(.+?)\2/mg
	var match

	while(match = reg.exec(content))
		env.USER_DIRS[match[1]] = match[3].replace('$HOME', process.env.HOME);
})()