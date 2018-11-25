/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 3000,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","129.132.224.37"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-iFrameReload',
			position: 'upper_third', // This can be any of the regions.
			config: {
			url: "https://www.rockstarjobs.ch/tvfeed.html",
			width: "680px", // Optional. Default: 100%
			height: "580px" //Optional. Default: 100px
			}
		},
                {
                        module: "MMM-Reddit",
                        position: "lower_third",
                        config: {
                                subreddit: ['worldnews','switzerland'],
                                headerType: 'chained',
                                showNumComments : false,
                                displayType: 'headlines',
                                count: 24,
                                show: 8,
				width: 950,
                                showScore: false,
                                showHeader: true,
                                characterLimit: 62,
                                showSubreddit: false,
                                showGilded: false,
                                colorText: true,
                                showThumbnail: false,
                        }
                }
		]


};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
