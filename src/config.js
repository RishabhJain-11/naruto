const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	stripe: {
		free: "price_1OuqA5SD0a6IGyLMvOj1eqSV",
		entry: "price_1OuqB7SD0a6IGyLMcLWQr7DG",
		pro: "price_1Ouq1zSD0a6IGyLMknitgwuG"
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://app.openaitemplate.com",
	stripe: {
		free: "price_1OuqA5SD0a6IGyLMvOj1eqSV",
		entry: "price_1OuqB7SD0a6IGyLMcLWQr7DG",
		pro: "price_1Ouq1zSD0a6IGyLMknitgwuG"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;