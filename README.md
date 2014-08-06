# Node XDG-ENV
<br><br>
Provide an Object with the XDG_* env variables or their defaults (according to http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html)
<br><br>

Arrays are the env strings (or defaults) splitted by ':'
<br>
$* means process.env.*

## Install
```
npm install xdg-env
```

## Example
```js
var env = require('xdg-env')

console.log(env)

// logs

{
	DATA_HOME: "/home/user/.local/share",
	
	CONFIG_HOME: "/home/user/.config",
	
	DATA_DIRS: [ // first DATA_DIR is always DATA_HOME
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
		"Pantheon" // Could by GNOME, KDE, Unity, etc. and more than one name
	],
	
	USER_DIRS: { // dirs defined in $CONFIG_HOME/user-dirs.dirs
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
