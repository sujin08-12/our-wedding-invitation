export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["10.webp","11.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp","9.webp","calendar-deco.svg","calendar-friday.svg","calendar-monday.svg","calendar-saturday.svg","calendar-sunday.svg","calendar-thursday.svg","calendar-tuesday.svg","calendar-wednesday.svg","calendar.png","cover.webp","favicon.png","letter-bottom.webp","letter-deco.svg","location-deco.svg","location-top-wave.svg","preview.jpg","rsvp-deco.svg"]),
	mimeTypes: {".webp":"image/webp",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.G3uzflda.js",app:"_app/immutable/entry/app.oU7RR22P.js",imports:["_app/immutable/entry/start.G3uzflda.js","_app/immutable/chunks/BzecsSbK.js","_app/immutable/chunks/DmJuVvkY.js","_app/immutable/entry/app.oU7RR22P.js","_app/immutable/chunks/DfjK5nQf.js","_app/immutable/chunks/DmJuVvkY.js","_app/immutable/chunks/BsbGDeQH.js","_app/immutable/chunks/Cv7HM0kB.js","_app/immutable/chunks/hwsSaQlG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
