function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    
    function makeKeyRow(arr) {
        const keys = Object.keys(arr[0]);
        return `<tr>${keys.map(key => `<th>${escapeHtml(key)}</th>`).join('')}</tr>`;
    }

    function makeValueRow(obj) {
        const values = Object.values(obj);
        return `<tr>${values.map(value => `<td>${escapeHtml(value)}</td>`).join('')}</tr>`;
    }

    function escapeHtml(value) {
        // Use a simple replace to escape HTML characters
        return value.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    console.log(outputArr.join('\n'));
}