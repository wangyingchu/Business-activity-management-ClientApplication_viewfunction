//build.bat profile=idxdojocompress.profile.js 
function timestamp(){
    // this function isn't really necessary...
    // just using it to show you can call a function to get a profile property value
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + "-" + d.getDate() + "-" +
    d.getHours() +
    ':' +
    d.getMinutes() +
    ":" +
    d.getSeconds();
}


var profile = {
    action: 'release',
    basePath: "../../../",
    releaseDir: "../../../simplebuild",
    buildTimestamp: timestamp(),
    cssOptimize: "comments",
    optimize: "closure",
    stripConsole: "all",
    layerOptimize: "closure",
    selectorEngine: 'acme',
    packages: [{
        name: 'dojo',
        location: 'dojo',
        resourceTags: {
            ignore: function(filename, mid){
                return (/tests/.test(filename) || /demos/.test(filename));
            }
        }
    }, {
        name: 'dijit',
        location: 'dijit',
        resourceTags: {
            ignore: function(filename, mid){
                return (/tests/.test(filename) || /demos/.test(filename));
            }
        }
    }, {
        name: 'dojox',
        location: 'dojox',
        resourceTags: {
            ignore: function(filename, mid){
                return (/tests/.test(filename) || /demos/.test(filename));
            }
        }
    }, {
        name: 'gridx',
        location: '../ibmjs/gridx',
        resourceTags: {
            ignore: function(filename, mid){
                return (/tests/.test(filename) || /demos/.test(filename));
            }
        }
    }, {
        name: 'idx',
        location: '../ibmjs/idx',
        resourceTags: {
            ignore: function(filename, mid){
                return (/tests/.test(filename) || /demos/.test(filename));
            }
        }
    }]
};
