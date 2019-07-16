"use strict";

/**
 * Velocity Custom Viewer
 * ================================================================
 * usage:
 *    node src/index.js --template /path/template.vm --data "foo=bar&bar=baz"
 *
 * author:
 *    jaziel.lopez @ thermofisher.com
 *
 **/

const fs = require('fs'),
    v = require('velocityjs'),
    y = require('yargs'),
    opn = require('opn'),
    argv = y
        .usage('Usage: $0 --template|-t [string] --data|-d [string]')
        .demandOption(["template"])
        .option("template",
            {
                alias: "t",

                description: "path to velocity template",

                type: "string"
                }
            )
        .option("data",
            {
                alias: "d",

                description: "key=value template data.\n--data \"foo=bar&baz=one\"",

                type: "string"
                }
            )
        .help().alias("help", "h").argv;

const tmpl = argv.template || "",

    data = argv.data || "",

    nodes = data.split("&");

/**
 *  Parse template data
 */
const parseTemplateData = function(nodes) {

    let templateInfo = {};

    nodes.forEach(function(i) {

       let kv = i.split("=");

       templateInfo[kv[0]] = kv[1];

    });

    return templateInfo;

};

/**
 * Read template file
 */
const readTemplateFile = function(tmpl) {

    return fs.readFileSync(tmpl, "utf8");

};

/**
 * Render velocity template upon given arguments
 */
const doRender = function() {

    const _f = readTemplateFile(tmpl),

        _d = parseTemplateData(nodes),

        render = v.render(_f, _d),

        vmpath = "/tmp/vm.html";

    fs.writeFile(vmpath, render, function(error) {

        if(error) {
            throw error;
        }

        opn("file://" + vmpath);

       console.log("velocity template render complete!");

    });
};



doRender();
