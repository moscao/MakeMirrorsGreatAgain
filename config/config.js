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
		//{
		//	module: "calendar",
		//	header: "US Holidays",
		//	position: "top_left",
		//	config: {
		//		calendars: [
		//			{
		//				symbol: "calendar-check-o ",
		//				url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
		//			}
		//		]
		//	}
		//},
		{
			module: 'calendar_monthly',
			position: 'top_left',
			config: {
						// The config property is optional
						// Without a config, a default month view is shown
						// Please see the 'Configuration Options' section for more information
				}
		},

		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
       		{
            		module: 'MMM-CoinMarketCap',
           		 position: "top_right",  header: "Cryptocurrencies",
           		 config: {
                		currencies: ['bitcoin', 'ethereum', 'litecoin', 'ripple','electroneum'],
               			view: 'graphWithChanges',
               		 	conversion: 'CHF',

                // See below for more Configuration Options
            		}
        	},
		{
    			module:     'MMM-3Day-Forecast',
    			position:   'top_left',
			config: {
			api_key:    '6f7a480425e041019635d6061258eb97',
			lat:        47.3769,
			lon:        8.5417,
			units:      'M',
			lang:       'en',
			interval:   900000
			}
		},
		{
			module: 'MMM-Globe',
			position: 'center',
			config: {
				style: 'geoColor',
			imageSize: 600,
			ownImagePath:'',
			updateInterval: 10*60*1000
			}
		},
		{
			module: 'MMM-bergfex',
			position: 'top_right', 
			classes: 'small dimmed', 
			config: {
			    updateInterval: 30*60*1000,
			    animationSpeed: 0,
			    header: 'bergfex.at Snow Report',
				skiareas: [
						'Gerlos - Zillertal Arena',
						'Hauser Kaibling / Schladming - Ski amade',
						'Hochkar',
						'Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade',
						'Klippitztörl',
						'Koralpe'
					],
				shortenArea: 20,
				cssclassrow: 'normal',
				cssclassheader: 'bright'				
			}
		},

{
		module: 'iFrame',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: "https://meteo.search.ch/widget/Basel?days=1"
				width: "100%" // Optional. Default: 100%
				height: "100px" //Optional. Default: 100px
			}
		}

]


};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
