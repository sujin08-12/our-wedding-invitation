import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["10.webp","11.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp","9.webp","calendar-deco.svg","calendar-friday.svg","calendar-monday.svg","calendar-saturday.svg","calendar-sunday.svg","calendar-thursday.svg","calendar-tuesday.svg","calendar-wednesday.svg","calendar.png","cover.JPG","favicon.png","letter-bottom.webp","letter-deco.svg","location-deco.svg","location-top-wave.svg","preview.jpg","rsvp-deco.svg"]),
	mimeTypes: {".webp":"image/webp",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BwzP37XK.js",app:"_app/immutable/entry/app.B80-6y8V.js",imports:["_app/immutable/entry/start.BwzP37XK.js","_app/immutable/chunks/Ch--5ZwB.js","_app/immutable/chunks/DJ5dJD4v.js","_app/immutable/entry/app.B80-6y8V.js","_app/immutable/chunks/BNNYOpfA.js","_app/immutable/chunks/DJ5dJD4v.js","_app/immutable/chunks/Baj6YgRk.js","_app/immutable/chunks/Btdgrw-I.js","_app/immutable/chunks/jjEcpqGk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
})());
