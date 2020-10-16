#!/usr/bin/env node
console.log('cli-init.js',2)
const program=require('commander');
// const version=require('../package.json').version
// console.log(version,5)

// program.version(version,'-v,--version')
program.command('create <app-name')
.description('使用award-cli create new pj')
.option('-d --dir <dir>','创建目录')
.action((name,command)=>{
    console.log('action exe')
    console.log('action',name)
    // console.log('command',command)
    const create=require('./cli-init-index.js')
    create(name)
})
program.parse(process.argv)

console.log(process.argv)