import { jsonFormatter, JSONtoXML, minifyJSON, xmlFormatter } from "./processor";

export const tools = [
    {
        url: 'json-formatter',
        heading: 'JSON Formatter',
        subHeading: 'Effortlessly format, validate, and edit your JSON code. Get clear, error-free data for seamless integration and analysis.',
        labelOne: 'Raw JSON',
        labelTwo: 'Formatted JSON',
        process: jsonFormatter,
        metaKeywords: 'json formatter, json validator, json editor, json viewer, json beautifier',
    },
    {
        url: 'json-minify',
        heading: 'JSON Minify',
        subHeading: 'JSON minification removes unnecessary characters from JSON data, like whitespace and comments. This makes your JSON files smaller, saving storage space and speeding up transmission times.',
        labelOne: 'JSON',
        labelTwo: 'Minified JSON',
        process: minifyJSON,
        metaKeywords: 'json minify, json minifier, compress json, reduce json size',
    },
    {
        url: 'json-to-xml',
        heading: 'JSON To XML',
        subHeading: 'Convert JSON data to a well-formatted XML structure for broader compatibility.',
        labelOne: 'JSON',
        labelTwo: 'XML',
        process: JSONtoXML,
        metaKeywords: 'json to xml converter, json to xml, xml from json',
    },
    {
        url: 'xml-formatter',
        heading: 'XML Formatter',
        subHeading: 'Effortlessly format, validate, and edit your XML code. Get clear, error-free data for seamless integration and analysis.',
        labelOne: 'Raw XML',
        labelTwo: 'Formatted XML',
        process: xmlFormatter,
        metaKeywords: 'xml formatter, xml validator, xml editor, xml beautifier',
    },
];

// XML to JSON
// CSV to JSON
// TSV to JSON
// JSON to XML
// JSON to CSV
// JSON to Text
// JSON to TSV