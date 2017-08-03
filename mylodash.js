//-----------------------------------------------------------------------------------------------
//	date: 2017/08/03
//
//	author: winter.zhang
//
//	description: myLodash
//-----------------------------------------------------------------------------------------------

/*
*  字符串操作
*/

/*
*  去除空格
*  type=1  去除所有空格
*  type=2  去除前后空格
*  type=3  去除单单前面空格
*  type=4  去除单单后面空格
*/
function trim(str,type){
    //
    switch(type){
        case 1:return str.replace(/\s+/g,"");

        case 1:return str.replace(/(^\s*)|(\s*$)/g,"");

        case 1:return str.replace(/(^\s*)/g,"");

        case 1:return str.replace(/(\s*$)/g,"");

        default: return str;
    }
}

/*
*  字母大小写切换
*  type=1  首字母大写
*  type=2  首字母小写
*  type=3  大小写切换
*  type=4  全部大写
*  type=5  全部小写
*/
function changeCase(str,type){

    function toggle(str){
        var itemText = "";
        str.split("").forEach(function(item){
            if(/^[a-z]+/.test(item)){
                itemText += item.toUpperCase(); 
            }else if(/^[A-Z]+/.test(item)){
                itemText += item.toLowerCase();
            }
        });
        return itemText;
    }
    
    switch(type){
        case 1: return str.replace(/^(\w)(\w+)/,function(str){
            return  str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
        });

        case 2: return str.replace(/^(\w)(\w+)/,function(str){
            return str.substring(0,1).toLowerCase() + str.substring(1).toUpperCase();
        });

        case 3: return toggle(str);

        case 4: return str.toUpperCase();

        case 5: return str.toLowerCase();

        default : return str;
    }
}

/*
*  字符串循环复制
*  repeatStr(str,count)
*  repeatStr("winter",3)
*  --> winterwinterwinter
*/
function repeatStr(str,count){
    var newStr="";
    var i;

    for(i=0;i<count;i++){
        newStr += str;
    }
    return newStr;
}

/*
*  字符串替换
*  repeatStr(str,old,new)
*  repeatStr("Hello winter","winter","summer")
*  --> Hello summer
*/
function replaceStr(str,oldText,newText){
    var reg = new RegExp(oldText,"g");
    return str.replace(reg,newText);
}

/*
*  用*来替换字符串部分字符
*  repeatWithStar(字符串，字符格式，替换方式，替换的字符(默认为*))
*  repeatWithStar(str,regArr,type,ARegText)
*  repeatWithStar("18800206076",[3,5,3],0)
*  --> 188*****076
*  该方法中用到了上面定义过的 字符串循环复制 方法repeatStr()
*/
function repeatWithStar(str,regArr,type,ARegText){
    
}