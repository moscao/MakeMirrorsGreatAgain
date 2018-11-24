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
			module: 'MMM-iFrameReload',
			position: 'bottom_left', // This can be any of the regions.
			config: {
			// See 'Configuration options' for more information.
			url: "https://www.rockstarjobs.ch/gmaps-zurich.html",
			width: "300px", // Optional. Default: 100%
			height: "410px", //Optional. Default: 100px
			}
		},
                {
                        module: 'MMM-iFrameReload',
                        position: 'bottom_center', // This can be any of the regions.
                        config: {
                        // See 'Configuration options' for more information.
                        url: "https://www.rockstarjobs.ch/uber.html",
                        width: "300px", // Optional. Default: 100%
                        height: "410px", //Optional. Default: 100px
                        }
                },
                {
                        module: 'MMM-iFrameReload',
                        position: 'bottom_right', // This can be any of the regions.
                        config: {
                        // See 'Configuration options' for more information.
                        url: "https://www.rockstarjobs.ch/mobility.html",
                        width: "300px", // Optional. Default: 100%
                        height: "410px", //Optional. Default: 100px                        
			}
                }, 
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
                        module: "travelslogans",
                        position: "upper_third"
                },
		{
			module: 'MMM-SwissCommute',
			position: 'middle_center',
			header: 'Next trains to Zurich',
			config: {
				from: 'Zuerich, Schmiede Wiedikon', // Start train station
				to: 'Zuerich, Sonneggstrasse', // Destination station
				maximumEntries: 4, // Max departures displayed
				minWalkingTime: 5 // Minimum time to get to the station
			}
		}
]


};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
