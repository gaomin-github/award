const path=require('path')
const fs=require('fs')
const mkdirp=require('mkdirp')
module.exports=function(name){
    console.log(process.cwd(),'path')
    let newPjPath=path.join(process.cwd(),'../',name)
    console.log(process.cwd(),7)
    let curPjPath=process.cwd()
    
    mkdirp(newPjPath,function(err){
        templateList.forEach(o=>{
            if(o.type==='copy'){
                if(fs.lstatSync(o.path)){
                    // 文件夹拷贝
                }else{
                    // 文件拷贝
                    // fs.writeFileSync(newPjPath)
                    _handleConfigFile(fromPath,destPath)
                }
            }else{
                _handlePkgFile(path.join(process.cwd(),o.path),newPjPath)
                    return;
            }
        })
        if(err){
            console.err('创建失败')
        }else{
            console.log('创建成功')
        }
    })
}

const templateList=[{

    label:'webpack',
    type:'copy',
    path:'./config/webpack.base.js',
},
// {
//     label:'webpack',
//     type:'copy',
//     path:'./config',
// },{
//         label:'webpack',
//         type:'copy',
//         path:'./config',
// },
{
    label:'package',
    type:'compile',
    path:'./package.json',
}
// ,{
//     label:'dev template',
//     type:'copy',
//     path:'../template.dev.html',
// }
]

// package.json相关
function _handlePkgFile(fromPath,destPath){
    console.log('copy file',56)
    try{
        const data=fs.readFileSync(fromPath,'utf-8')
        const pkg=JSON.parse(data)
        pkg.name='pj1'
        pkg.version='1.0'
        pkg.author='gaomin5'
        delete pkg.scripts.myinit;
        fs.writeFileSync(path.join(destPath,`./package_${Math.random()}.json`),JSON.stringify(pkg,null,2),'utf-8')
    }catch(error){
        console.log(red(`fail to generate:${error.message}`))
        process.exit(1)
    }  
}

function _handleConfigFile(fromPath,destPath){
    console.log('copy file',56)

    try{
        const data=fs.readFileSync(fromPath,'utf-8')
        fs.writeFileSync(path.join(destPath,'utf-8'),data)
    }catch(error){
        console.log(red(`fail to copy:${error.message}`))
        process.exit(1)
    }
}