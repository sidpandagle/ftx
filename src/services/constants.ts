import { htmlFormatter, jsonFormatter, JSONtoXML, lowercaseToUppercase, minifyJSON, textToSlug, uppercaseToLowercase, xmlFormatter } from "./processor";

export const tools = [
    {
        url: '/converter/json-formatter',
        heading: 'JSON Formatter',
        subHeading: 'Effortlessly format, validate, and edit your JSON code. Get clear, error-free data for seamless integration and analysis.',
        labelOne: 'Raw JSON',
        labelTwo: 'Formatted JSON',
        sampleInput: `{"name":"Alice","age":30,"city":"New York"}`,
        process: jsonFormatter,
        metaKeywords: 'json formatter, json validator, json editor, json viewer, json beautifier',
    },
    {
        url: '/converter/html-formatter',
        heading: 'HTML Formatter',
        subHeading: 'Effortlessly format, validate, and edit your HTML code. Get clear, error-free data for seamless integration and analysis.',
        labelOne: 'Raw HTML',
        labelTwo: 'Formatted HTML',
        sampleInput: `<html><head>This is the head section, but it's not formatted for readability<title>Unformatted HTML Example</title></head><body><h1>This is a heading</h1><p>This is a paragraph with some text. It will all appear on one line.</p><ul><li>This is a list item</li><li>Another list item</li></ul></body></html>`,
        process: htmlFormatter,
        metaKeywords: 'html formatter, html validator, html editor, html beautifier',
    },
    {
        url: '/converter/xml-formatter',
        heading: 'XML Formatter',
        subHeading: 'Effortlessly format, validate, and edit your XML code. Get clear, error-free data for seamless integration and analysis.',
        labelOne: 'Raw XML',
        labelTwo: 'Formatted XML',
        sampleInput: `<?xml version="1.0" encoding="UTF-8"?><note><to>Alice</to><from>Bob</from><heading>Reminder</heading><body>Don't forget to buy milk!</body></note>`,
        process: xmlFormatter,
        metaKeywords: 'xml formatter, xml validator, xml editor, xml beautifier',
    },
    {
        url: '/converter/json-minify',
        heading: 'JSON Minify',
        subHeading: 'JSON minification removes unnecessary characters from JSON data, like whitespace and comments. This makes your JSON files smaller, saving storage space and speeding up transmission times.',
        labelOne: 'JSON',
        labelTwo: 'Minified JSON',
        sampleInput: `{\n\t"name": "Alice",\n\t"age": 30,\n\t"city": "New York"\n}`,
        process: minifyJSON,
        metaKeywords: 'json minify, json minifier, compress json, reduce json size',
    },
    {
        url: '/converter/json-to-xml',
        heading: 'JSON to XML',
        subHeading: 'Convert JSON data to a well-formatted XML structure for broader compatibility.',
        labelOne: 'JSON',
        labelTwo: 'XML',
        sampleInput: `{"name":"Alice","age":30,"city":"New York"}`,
        process: JSONtoXML,
        metaKeywords: 'json to xml converter, json to xml, xml from json',
    },
    {
        url: '/converter/text-to-slug',
        heading: 'Text to Slug',
        subHeading: 'Convert text to a well-formatted slug structure for broader compatibility.',
        labelOne: 'Text',
        labelTwo: 'Slug',
        sampleInput: `lorem ipsum dolor sit amet`,
        process: textToSlug,
        metaKeywords: 'json to xml converter, json to xml, xml from json',
    },
    {
        url: '/converter/lowercase-to-uppercase',
        heading: 'Lowercase to Uppercase',
        subHeading: 'Effortless Uppercase Conversion: Highlight the ease and speed of the tool.',
        labelOne: 'Lowercase',
        labelTwo: 'Uppercase',
        sampleInput: `lorem ipsum dolor sit amet`,
        process: lowercaseToUppercase,
        metaKeywords: 'lowercase to uppercase converter, uppercase converter, change case to uppercase, text converter uppercase, online uppercase tool, case converter, text formatting tool, uppercase letters, change text case, free uppercase converter, convert text to uppercase online, make text uppercase free, uppercase text for social media, uppercase my text document, batch uppercase converter',
    },
    {
        url: '/converter/uppercase-to-lowercase',
        heading: 'Uppercase to Lowercase',
        subHeading: 'Effortless Lowercase Conversion: Highlight the ease and speed of the tool.',
        labelOne: 'Uppercase',
        labelTwo: 'Lowercase',
        sampleInput: `lorem ipsum dolor sit amet`.toUpperCase(),
        process: uppercaseToLowercase,
        metaKeywords: 'lowercase to uppercase converter, uppercase converter, change case to uppercase, text converter uppercase, online uppercase tool, case converter, text formatting tool, uppercase letters, change text case, free uppercase converter, convert text to uppercase online, make text uppercase free, uppercase text for social media, uppercase my text document, batch uppercase converter',
    },
];

// CSS Minifier
// CSS Beautifier
// Color Code Picker
// HAR Viewer
// URL Splitter
// Code Cleaner
// REST API Tester
// Diff Checker
// URL Encoder/Decoder
// Mime Type Checker
// Har Sanitizer
// HTML encoder and decoder
// JavaScript String Escaper
// Base64 Encoder
// Base64 Decoder
// SVG Viewer