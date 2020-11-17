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
            let fromPath=path.join(process.cwd(),o.path)
            let destPath=path.join(newPjPath,o.path)
            let stat=fs.lstatSync(fromPath)
            if(o.type==='copy'){

                if(stat.isDirectory()){
                    // 文件夹拷贝
                    console.log('folder exist')
                    _handleFolderTemplate(fromPath,destPath)
                }else{
                    // 文件拷贝
                    // fs.writeFileSync(newPjPath)
                    _handleConfigFile(fromPath,destPath)
                }
            }else{
                _handlePkgFile(fromPath,newPjPath)
                    return;
            }
        })
        if(err){
            console.err('创建失败')
        }else{
            // console.log('创建成功')
        }
    })
}

const templateList=[{
    label:'webpack',
    type:'copy',
    path:'./config',
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
,{
    label:'dev template',
    type:'copy',
    path:'../template.dev.html',
}
]

// package.json相关
function _handlePkgFile(fromPath,destPath){
    console.log('compile file',56)
    try{
        const data=fs.readFileSync(fromPath,'utf-8')
        const pkg=JSON.parse(data)
        pkg.name='pj1'
        pkg.version='1.0'
        pkg.author='gaomin5'
        delete pkg.scripts.myinit;
        fs.writeFileSync(path.join(destPath,`./package.json`),JSON.stringify(pkg,null,2),'utf-8')
    }catch(error){
        console.log(`fail to generate:${error.message}`)
        process.exit(1)
    }  
}

function _handleConfigFile(fromPath,destPath){
    console.log('copy file',56)
    console.log('fromPath',fromPath,'destPath',destPath,79)

    try{
        const data=fs.readFileSync(fromPath,'utf-8')
        fs.writeFileSync(path.join(destPath,'utf-8'),data)
    }catch(error){
        console.log(`fail to copy:${error.message}`)
        process.exit(1)
    }
}
/* 文件夾拷貝
 */
function _handleFolderTemplate(fromPath,destPath){
    try{
        fs.access(destPath,function(err){
            if(err){
                // 创建文件夹
                fs.mkdirSync(destPath);
            }
            fs.readdir(fromPath,(err,paths)=>{
                if(err){
                    console.log('readdir error')
                }else{
                    console.log(paths,106)
                    paths.forEach(o=>{
                        
                        let stat=fs.lstatSync(path.join(fromPath,o));
                        if(stat.isDirectory()){
                            _handleFolderTemplate(path.join(fromPath,o),path.join(destPath,o))
                        }else{
    
                            fs.writeFileSync(path.join(destPath,o),fs.readFileSync(path.join(fromPath,o)))
                        }
                    })
                }
            })
        })
    }catch(error){
        console.log('_handleFolderTemplate',error,122)
    }
}