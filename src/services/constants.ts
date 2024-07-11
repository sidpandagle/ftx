import { jsonFormatter, JSONtoXML, minifyJSON } from "./processor";

export const tools = [
    {
        url: 'json-formatter',
        heading: 'JSON Formatter',
        subHeading: 'Effortlessly format, validate, and edit your JSON code. Get clear, error-free data for seamless integration and analysis.',
        labelOne: 'Raw JSON',
        labelTwo: 'Formatted JSON',
        process: jsonFormatter,
    },
    {
        url: 'json-minify',
        heading: 'JSON Minify',
        subHeading: 'JSON minification removes unnecessary characters from JSON data, like whitespace and comments. This makes your JSON files smaller, saving storage space and speeding up transmission times.',
        labelOne: 'JSON',
        labelTwo: 'Minified JSON',
        process: minifyJSON,
    },
    {
        url: 'json-to-xml',
        heading: 'JSON To XML',
        subHeading: 'JSON minification removes unnecessary characters from JSON data, like whitespace and comments. This makes your JSON files smaller, saving storage space and speeding up transmission times.',
        labelOne: 'JSON',
        labelTwo: 'XML',
        process: JSONtoXML,
    },
];

// XML to JSON
// CSV to JSON
// TSV to JSON
// JSON to XML
// JSON to CSV
// JSON to Text
// JSON to TSV