const addQuestions = [
    {
        type: String,
        name: "name",
        message: "Enter customer name"
    },
    {
        type: String,
        name: "orderPrice",
        message: "Enter the price of the item (with currency symbol)"
    },
    {
        type: String,
        name: "ordered",
        message: "What he ordered"
    }
];
const findQuestionName = [
    {
        type: String,
        name: "name",
        message: "Enter customer name"
    }
]
module.exports = {
    addQuestions,
    findQuestionName
}