export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","preview.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.C33XirdO.js",app:"_app/immutable/entry/app.CUmntdyj.js",imports:["_app/immutable/entry/start.C33XirdO.js","_app/immutable/chunks/2rg_5MsK.js","_app/immutable/chunks/DmJuVvkY.js","_app/immutable/entry/app.CUmntdyj.js","_app/immutable/chunks/DfjK5nQf.js","_app/immutable/chunks/DmJuVvkY.js","_app/immutable/chunks/BsbGDeQH.js","_app/immutable/chunks/Cv7HM0kB.js","_app/immutable/chunks/hwsSaQlG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
