## TEMPLATE VELOCITY VIEWER
--

Parse Velocity template files from command line and view it in your browser

### INSTALLATION

```
$ npm install 
```

### USAGE

```
$ node render-velocity-template.js --help

# Usage: render-velocity-template.js --template|-t [string] --data|-d [string]

# Options:
#  --version       Show version number                                  [boolean]
#  --template, -t  path to velocity template                             [string]
#  --data, -d      key=value template data.
#                    --data "foo=bar&baz=one"                              [string]
#  --help, -h      Show help
```

### EXAMPLE 

In order to parse and display a velocity template file you need to provide the following information:

1. Provide path to template file
2. Provide data for template placeholders in file
   Data should be provided in the form of key=value. If you want to concatenate more than one key-value use `&` separator.

```
$ node render-velocity-template.js --template /path/to/file.vm --data "foo=bar&bar=baz"
```

### VERSION

1.0.0 Initial

### CONTACT

Jaziel Lopez <jaziel.lopez @ thermofisher.com>
