/**
 * Created by markdiantonio1 on 4/7/15.
 */
var RoboHydraHeadStatic = require("robohydra").heads.RoboHydraHeadStatic;

exports.getBodyParts = function (conf) {
    return {
        heads: [
            new RoboHydraHeadStatic({
                path: '/foobar',
                content: {
                    "success": true,
                    "results": [
                        {
                            "url": "http://robohydra.org",
                            "title": "RoboHydra testing tool"
                        },
                        {
                            "url": "http://en.wikipedia.org/wiki/Hydra",
                            "title": "Hydra - Wikipedia"
                        }
                    ]
                }
            })
        ]
    };
};