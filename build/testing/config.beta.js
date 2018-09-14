"use strict";

/**
 * Beta - Cross Browser Configuration
 *
 * This controls the different subsets of cross browser / device configurations that can be used to test 
 * projects or packages with user interafaces or experiences.
 *
 * As projects move from Alpha to Beta to Release we gradually want to increase testing scenarios 
 * across browsers.
 *
 * This is intended to capture confidence in quality across the core browser rendering engines.
 *
 * These configurations require updating over time as new browser versions are released or
 * known unstable combinations become apparent.
 *
 */

var Phases;

(function (Phases) {
    Phases[Phases["Alpha"] = 0] = "Alpha";
    Phases[Phases["Beta"] = 1] = "Beta";
    Phases[Phases["Release"] = 2] = "Release";
})(Phases = exports.Phases || (exports.Phases = {}));

/**
 * Provides platform configurations sourced from Selenium and Appium Platform Configurator online tools.  
 * 
 * @see 
 * https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
 * https://www.browserstack.com/automate/node 
 */
var Configure = (function () {
    function _configure(phases) {

        switch (phases) {
            case Phases.Alpha:
                return [
                    {
                        'platform': 'Windows 10',
                        'browserName': 'MicrosoftEdge',
                        'version': '17.17134',
                        'screenResolution': '1280x1024'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'internet explorer',
                        'version': '11.103',
                        'screenResolution': '1400x1050'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'chrome',
                        'version': '68.0',
                        'screenResolution': '1920x1200'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'firefox',
                        'version': '61.0',
                        'screenResolution': '2560x1600'
                    },
                    {
                        'platform': 'macOS 10.13',
                        'browserName': 'safari',
                        'version': '11.1',
                        'screenResolution': '2048x1536'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '11.3',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPhone X Simulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '6.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Android Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Chrome',
                        'language': 'en',
                        'locale': 'en_US'
                    }
                ];
            case Phases.Beta:
                return [
                    {
                        'platform': 'Windows 10',
                        'browserName': 'MicrosoftEdge',
                        'version': '17.17134',
                        'screenResolution': '1280x1024'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'internet explorer',
                        'version': '11.103',
                        'screenResolution': '1400x1050'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'chrome',
                        'version': '68.0',
                        'screenResolution': '1920x1200'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'firefox',
                        'version': '61.0',
                        'screenResolution': '2560x1600'
                    },
                    {
                        'platform': 'macOS 10.13',
                        'browserName': 'safari',
                        'version': '11.1',
                        'screenResolution': '2048x1536'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '11.3',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPhone X Simulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '9.3',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPad Pro Simulator',
                        'appiumVersion': '1.7.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '6.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Android Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Chrome',
                        'language': 'en',
                        'locale': 'en_US'
                    }
                ];
            case Phases.Release:
            default:
                return [
                    {
                        'platform': 'Windows 8.1',
                        'browserName': 'internet explorer',
                        'version': '11.0',
                        'screenResolution': '1024x768'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'MicrosoftEdge',
                        'version': '17.17134',
                        'screenResolution': '1280x1024'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'internet explorer',
                        'version': '11.103',
                        'screenResolution': '1400x1050'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'chrome',
                        'version': '67.0',
                        'screenResolution': '1920x1080'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'chrome',
                        'version': '68.0',
                        'screenResolution': '1920x1200'
                    },
                    {
                        'platform': 'Windows 10',
                        'browserName': 'firefox',
                        'version': '61.0',
                        'screenResolution': '2560x1600'
                    },
                    {
                        'platform': 'macOS 10.13',
                        'browserName': 'safari',
                        'version': '11.1',
                        'screenResolution': '1920x1440'
                    },
                    {
                        'platform': 'macOS 10.13',
                        'browserName': 'firefox',
                        'version': '62.0',
                        'screenResolution': '2360x1770'
                    },
                    {
                        'platform': 'macOS 10.12',
                        'browserName': 'safari',
                        'version': '11.0',
                        'screenResolution': '2048x1536'
                    },
                    {
                        'platform': 'macOS 10.12',
                        'browserName': 'safari',
                        'version': '10.1',
                        'screenResolution': '2360x1770'
                    },
                    {
                        'platform': 'OS X 10.11',
                        'browserName': 'chrome',
                        'version': '69.0',
                        'screenResolution': '2048x1536'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '11.3',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPhone X Simulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '11.2',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPhone 8 Plus Simulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '11.1',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPhone 7 Simulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '11.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPhone 6s Simulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '10.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPad Retina Simulator',
                        'appiumVersion': '1.8.0',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'iOS',
                        'platformVersion': '9.3',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'iPad Pro Simulator',
                        'appiumVersion': '1.7.1',
                        'browserName': 'Safari'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '7.1',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Samsung Galaxy S7 Edge FHD GoogleAPI Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Chrome',
                        'language': 'en',
                        'locale': 'en_US'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '7.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Samsung Galaxy Tab A 10 GoogleAPI Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Chrome',
                        'language': 'en',
                        'locale': 'en_US'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '6.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Android Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Chrome',
                        'language': 'en',
                        'locale': 'en_US'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '5.1',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Android GoogleAPI Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Browser'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '5.0',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'Android Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Browser'
                    },
                    {
                        'platformName': 'Android',
                        'platformVersion': '4.4',
                        'deviceOrientation': 'PORTRAIT',
                        'deviceName': 'LG Nexus 4 Emulator',
                        'appiumVersion': '1.8.1',
                        'browserName': 'Browser'
                    }
                ];
        }
    }

    return _configure;
})();


exports.Configure = Configure;