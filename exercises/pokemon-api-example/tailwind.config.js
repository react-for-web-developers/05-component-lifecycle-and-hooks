module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				primary: "#374151"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
