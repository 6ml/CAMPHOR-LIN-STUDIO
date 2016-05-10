/**
 * Created by Administrator on 2015/11/22.
 */
function startMove(obj,json,speed_multiple,fn)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for(var attr in json)
        {
            //取当前值
            var icur = 0;
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                icur = parseInt(getStyle(obj, attr));
            }
            //计算速度
            var speed = (json[attr] - icur) / speed_multiple;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //检测停止
            if (icur != json[attr])
            {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = "alpha(opacity:" + (icur + speed) + ")";
                obj.style.opacity = (icur + speed) / 100;
            }
            else {
                obj.style[attr] = icur + speed + 'px';
            }
        }
        if(flag)
        {
            clearInterval(obj.timer);
            if(fn)
            {
                fn(obj);
            }
        }
    },30);
}


function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}