const path=require('path')
const fs=require('fs')
const mkdirp=require('mkdirp')
module.exports=function(name){
    console.log(process.cwd(),'path')
    let newPjPath=path.join(process.cwd(),'../',name)
    mkdirp(newPjPath,function(err){
        templateList.forEach(template=>{
            
            if(template.type==='copy'){
                if(fs.lstatSync(template.path)){
                    // 文件夹拷贝
                }else{
                    // 文件拷贝
                }
                fs.writeFileSync(newPjPath)
            }
            const {template,dir,name:filename}=require(template.path)
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
    path:'../config',


},{
    label:'package',
    type:'compile',
    path:'../package-template.json',
},{
    label:'dev template',
    type:'copy',
    path:'../template.dev.html',
}]