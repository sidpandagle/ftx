
export function jsonFormatter(input: any) {
    try {
        return JSON.stringify(JSON.parse(input), null, "\t")
    } catch (error) {
        return 'Invalid JSON'
    }
}

export function minifyJSON(json: any) {
    try {
        let parsed = JSON.parse(json)
        return json.replace(/(^\s+|\s+$|\n)/gm, "");
    } catch (error) {
        return 'Invalid JSON'
    }
}
