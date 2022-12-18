#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const { prompt } = require('inquirer');
const { order, findOrder, removeOrder, updateOrder, listOrder } = require('./methods/methods');
const question = require('./questions/question');
program
    .version('1.0.0')
    .description('Order Management System')
program
    .command("add")
    .alias("a")
    .description("Command to add order")
    .action(()=>{
        prompt(question.addQuestions).then((answers)=>order(answers));
    });
program
    .command("find")
    .alias("f")
    .description("Command to find order by a name")
    .action(()=>{
        prompt(question.findQuestionName).then((answer)=>findOrder(answer));
    });
program
    .command("update")
    .alias("u")
    .description("Command to update order by a name")
    .action(()=>{
        prompt(question.addQuestions).then((answer)=>updateOrder(answer));
    });
program
    .command("remove")
    .alias("r")
    .description("Command to remove order by a name")
    .action(()=>{
        prompt(question.findQuestionName).then((answer)=>removeOrder(answer));
    });
program
    .command("list")
    .alias("l")
    .description("Command to list all orders")
    .action(()=>{
        listOrder();
    });

program.parse();