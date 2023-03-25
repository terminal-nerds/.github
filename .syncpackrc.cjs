/** @see {@link https://github.com/JamieMason/syncpack/#-configuration-file} Official repository */
const config = {
	...require("@terminal-nerds/syncpack-config"),
	source: ["package.json"],
};

module.exports = config;
