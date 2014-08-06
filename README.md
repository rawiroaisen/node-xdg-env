# Node XDG-ENV
<br><br>
Provide an Object with the XDG_* env variables or their defaults (according to http://standards.freedesktop.org)
<br><br>

Arrays are the env strings (or defaults) splitted by ':'
$* means process.env.*

```js
// String
DATA_HOME = $XDG_DATA_HOME || $HOME/.local/share

// String
CONFIG_HOME = $XDG_CONFIG_HOME || $HOME/.config

// Array
// the first DATA_DIR should always be DATA_HOME
DATA_DIRS = [DATA_HOME, $XDG_DATA_DIRS]

// Array
CONFIG_DIRS = [$XDG_CONFIG_DIRS]

// String
CACHE_HOME = $XDG_CACHE_HOME || $HOME/.cache

// String
// There's no default to this (see http://standards.freedesktop.org)
RUNTIME_DIR = $XDG_RUNTIME_DIR

// Array
CURRENT_DESKTOP = $XDG_CURRENT_DESKTOP

// Object
// user dirs defined in $CONFIG_HOME/user-dirs.dirs
USER_DIRS
```
<br><br>

## Example
```js
var env = require('xdg-env')

console.log(env)

// logs

{
	DATA_HOME: "/home/user/.local/share",
	
	CONFIG_HOME: "/home/user/.config",
	
	DATA_DIRS: [
		"/home/user/.local/share",
		"/usr/share/pantheon",
		"/usr/share/gnome",
		"/usr/local/share/",
		"/usr/share/"
	],
	
	CONFIG_DIRS: [
		"/etc/xdg/xdg-pantheon",
		"/etc/xdg"
	],
	
	CACHE_HOME: "/home/user/.cache",
	
	CURRENT_DESKTOP: [
		"Pantheon" // Could by GNOME, Unity, etc
	],
	
	USER_DIRS: { // this is in spanish (as my Desktop)
		DOWNLOAD: "/home/user/Descargas",
		TEMPLATES: "/home/user/Plantillas",
		PUBLICSHARE: "/home/user/Público",
		DOCUMENTS: "/home/user/Documentos",
		MUSIC: "/home/user/Música",
		PICTURES: "/home/user/Imágenes",
		VIDEOS: "/home/user/Vídeos",
		DESKTOP: "/home/user/Escritorio"
	}
}
```
