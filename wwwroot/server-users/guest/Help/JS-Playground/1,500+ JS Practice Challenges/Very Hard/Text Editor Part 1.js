/*  

Text Editor Part 1

We're going to create a text editor similar to Microsoft Word. The editor autosaves so that the user only loses a small amount of data if a crash occurs.

We want to be able to handle as many operations as needed, but they have to be processed in order. There are two basic operations that our editor understands:

An insert operation contains the text to be inserted and the position to insert it at.
A delete operation contains the position to delete from and the length of the text to delete.
Write a function that takes a list of operations, either insert or delete, and returns the combined text.

Examples
[Insert("foo", 0), Insert(" bar", 3)] ➞ "foo bar"

[Insert("foo bar", 0), Delete(4, 2)] ➞ "fobar"


Notes
Keep in mind that each operation will have data that assumes the previous operations were already processed.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


// Input will be an array of objects of the form:
// {operation: "insert", text: string, position: number}
// {operation: "delete", from: number, length: number}
function edit(operations) {
    let document_text = "";

    let insert_operation = (current, str, pos) =>
        current.substr(0, pos) + str + current.substring(pos);

    let delete_operation = (current, from, length) =>
        current.substr(0, from - length) + current.substr(from);

    for (let op of operations) {
        if (op["operation"] == "insert") {
            document_text = insert_operation(document_text, op["text"], op["position"]);
        } else if (op["operation"] == "delete") {
            document_text = delete_operation(document_text, op["from"], op["length"]);
        }
    }

    return document_text;
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function edit(operations) {
    let str = '';

    operations.forEach(el => el.operation == 'insert' ?

        str = `${str.slice(0,el.position)}${el.text}${str.slice(el.position)}` :
        str = `${str.slice(0,el.from-el.length)}${str.slice(el.from)}`

    );

    return str;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const edit = operations =>
    operations.reduce((a, { operation: o, position: p, text: t, from: f, length: l }) =>
        o === "insert" ? (a.splice(p, 0, ...t), a) : (a.splice(f - l, l), a), [])
    .join ``