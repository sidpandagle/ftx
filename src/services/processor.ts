export function jsonFormatter(input: any) {
    try {
        return JSON.stringify(JSON.parse(input), null, "\t")
    } catch (error) {
        return 'Invalid JSON'
    }
}

export function minifyJSON(json: any) {
    try {
        JSON.parse(json)
        return json.replace(/(^\s+|\s+$|\n)/gm, "");
    } catch (error) {
        return 'Invalid JSON'
    }
}

export function JSONtoXML(json: any) {
    try {
        if (typeof json == 'string') {
            json = JSON.parse(json)
        }
        let xml = '';
        for (let prop in json) {
            xml += "<" + prop + ">";
            if (Array.isArray(json[prop])) {
                for (let array of json[prop]) {

                    // A real botch fix here
                    xml += "</" + prop + ">";
                    xml += "<" + prop + ">";

                    xml += JSONtoXML(new Object(array));
                }
            } else if (typeof json[prop] == "object") {
                xml += JSONtoXML(new Object(json[prop]));
            } else {
                xml += json[prop];
            }
            xml += "</" + prop + ">";
        }
        xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
        return xmlFormatter(xml)
    } catch (error) {
        console.log(error)
        return 'Invalid JSON'
    }
}

export function xmlFormatter(xml: string) {
    let tab = '\t';
    let result = '';
    let indent = '';

    xml && xml.split(/>\s*</).forEach(function (element: any) {
        if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
            indent += tab;
        }
    });

    return result.substring(1, result.length - 3);
}

export function lowercaseToUppercase(text: string) {
    return text?.toUpperCase() || '';
}

export function uppercaseToLowercase(text: string) {
    return text?.toLowerCase() || '';
}

export function textToCapitalCase(text: string) {
    if (text) {
        let resultArr = text?.split(' ').filter(r => r != '');
        resultArr = resultArr.map((r: string) => {
            r = r[0].toUpperCase() + r.slice(1, r.length).toLowerCase();
            return r;
        })
        return resultArr.join(' ');
    }
    return ''
}

export function htmlFormatter(html: string) {
    let tab = '\t';
    let result = '';
    let indent = '';

    html && html.split(/>\s*</).forEach(function (element) {
        if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        let bypassList = ['input', 'br', 'hr', 'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
        let hasBypass = bypassList.every(r => !element.startsWith(r));
        if (hasBypass && element.match(/^<?\w[^>]*[^\/]$/)) {
            indent += tab;
        }
    });

    return result.substring(1, result.length - 3);
}

export function textToSlug(text: string) {
    return text?.replace(/\s+/g, '-').toLowerCase() || '';
}

export function wordCount(text: string) {
    return (text && text?.split(' ').filter(r => r != '').length);
}

export function encodeURIString(text: string) {
    try {
        return encodeURIComponent(text);
    }
    catch{
        return 'Invalid Input'
    }
}

export function decodeURIString(text: string) {
    try {
        return decodeURIComponent(text);
    }
    catch{
        return 'Invalid Input'
    }
}

export function encodeHTML(text: string) {
    const element = document.createElement('div');
    if (text) {
        element.innerText = text;
        return element.innerHTML;
    }
    return '';
}

export function decodeHTML(text: string) {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
}
