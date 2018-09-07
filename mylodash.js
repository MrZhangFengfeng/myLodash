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


/*
*  字符串截取。
*  cutstr("winter", 0) -->'...'
*  cutstr("winter", 2) -->'w...'
*  cutstr("winter", 3) -->'wi...'
*/
function cutstr(str, len) {
    var temp,i,
    length = str.length,
    icount = 0,
    patrn = /[^\x00-\xff]/,//GBK双字节编码范围
    strre = "";

    for (i = 0; i < length; i++) {
        if (icount < len - 1) {
          temp = str.substr(i, 1);//substr(start,length) 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
            if (patrn.exec(temp) == null) {
               icount = icount + 1
            } else {
               icount = icount + 2
            }
               strre += temp
        } else {
            break;
        }
    }
    return strre + "..."
}

/*
*  字符串替换全部
*/
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

/*
*  判断是否以某个字符串开头
*/
String.prototype.startWith = function (s) {
    return this.indexOf(s) == 0
}

/*
*  转义HTML标签
*/
function HtmlEncode(text) {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')
}

/*
*  日期格式转换
 */
Date.prototype.Format = function (fmt) { 
      fmt = fmt.toLowerCase();
      var o = {
          "m+": this.getMonth() + 1, //月份 
          "d+": this.getDate(), //日 
          "h+": this.getHours(), //小时 
          "i+": this.getMinutes(), //分 
          "s+": this.getSeconds(), //秒 
      };
      if (/(y+)/.test(fmt)) 
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) 
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }   
      return fmt;
  }
// --------------------------------------------
// 数组
// --------------------------------------------

/*
* 数组顺序打乱
*/
function upsetArr(arr){
    return arr.sort(function(){
        return (Math.random()-0.5)
    });
}

/*
* 求数组的最大最小值
*/
function maxArr(arr){
    return Math.max.apply(null,arr)
}
function minArr(arr){
    return Math.min.apply(null,arr);
}

/*
* 数组求和
*/
function sumArr(arr){
    var sum=0;
    var len = arr.length;
    var i;
    for(i=0;i<len;i++){
        sum+=arr[i];
    }
    return sum;
}

/*
* 从数组中随机获取元素
*/
function randomOne(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

/*
* 回数组（字符串）一个元素出现的次数
*/
function getEleCount(arr,ele){
    var i;
    var len = arr.length;
    var count=0;
    arr.forEach(function(item){
        if(item==ele){
            count++;
        } 
    });
    return count;
}

/*
* 返回数组（字符串）出现最多的几次元素和出现次数
*/
//arr, rank->长度，默认为数组长度，rankType，排序方式，默认降序
//rank--->返回升序或者降序的前几，默认是全部返回
function getMaxCount(arr,rank,rankType){
    var obj={},k,arr1=[],i;
    var len = arr.length;
    //记录每一个元素出现的次数
    for(i=0;i<len;i++){
        k=arr[i];
        if(obj[k]){
            obj[k]++;
        }else{
            obj[k]=1;
        }
    }

    for(o in obj){
        arr1.push({ele:o,count:obj[o]});
    }
    //排序（降序）
    arr1.sort(function(n1.n2){
        return (n2.count-n1.count);
    })
    //rankType==1 就是升序
    if(rankType==1){
        arr1 = arr1.reverse();
    }

    var rank1 = rank || len;
    return arr1.slice(0,rank1);
}

/*
* 筛选值为目标元素的数组
*/

//删除值为'val'的数组元素
//removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
//["aaa"]   带有'test'的都删除
    
//removeArrayForValue(['test','test1','test2','test','aaa'],'test')
//["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
function removeArrayForValue(arr,val,type){
    return (arr.filter(function(item){return type==='%'?item.indexOf(val)==-1:item!==val}))
}

/*
* 模糊搜索  北京-直辖。  随便输入北  北京  直辖   北直   都可以搜索岛北京-直辖
*/

    function fuzzySearch(keywords, arr, key) {
      keywords = keywords.split('')
      const reg = new RegExp(keywords.join('.*'))
      const resultArr = []
      if (key.length > 0) {
        // 适用于item为obj的
        for (let i = 0; i < arr.length; i++) {
          if (reg.exec(arr[i][key])) {
            resultArr.push(arr[i])
          }
        }
      } else {
        // 适用于字符串数组
        for (let i = 0; i < arr.length; i++) {
          if (reg.exec(arr[i])) {
            resultArr.push(arr[i])
          }
        }
      }
      return resultArr
    }
