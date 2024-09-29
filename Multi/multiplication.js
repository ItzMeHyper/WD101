let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tables = numbers.map((num) =>
    multipliers.map((factor) => {
        let product = num * factor;
        return "<p>" + String(num) + " x " + String(factor) + " = " + String(product) + "</p>";
    })
);
console.log(tables);

let htmlTables = tables.map((table) => {
    let lineItems = table.join("\n");
    return '<div style="padding: 8px 16px; background-color: beige; margin-right: 6px">' + "\n" + lineItems + "\n" + "</div>";
});

document.getElementById("table").innerHTML = htmlTables.join("\n");