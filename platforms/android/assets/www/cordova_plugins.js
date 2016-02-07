cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.plugins.shortcut/www/ShortcutPlugin.js",
        "id": "com.plugins.shortcut.ShortcutPlugin",
        "pluginId": "com.plugins.shortcut",
        "clobbers": [
            "ShortcutPlugin"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.plugins.shortcut": "0.1.1",
    "phonegap-plugin-push": "1.5.3",
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-whitelist": "1.2.1"
}
// BOTTOM OF METADATA
});