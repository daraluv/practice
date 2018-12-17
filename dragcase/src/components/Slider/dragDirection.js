export function dragDirection(ele,callback){
  console.log(ele)
  var firstX = 0,firstY = 0,endX = 0,endY = 0;
  ele.addEventListener("touchstart",function(e){
    firstX = e.targetTouches[0].clientX; //初始位置
    firstY = e.targetTouches[0].clientY;
  })
  ele.addEventListener("touchend",function(e){
    endX = e.changedTouches[0].clientX; //结束位置
    endY = e.changedTouches[0].clientY;
    let moveX = endX - firstX;
    let moveY = endY - firstY;
    let direction = 'left';
    if(Math.abs(moveX) > 60 || Math.abs(moveY) > 60){//判断是滑动，不是点击
      if(Math.abs(moveX) > Math.abs(moveY)){
        /*判断横向移动的距离和纵向移动的距离大小对比，判断是左右还是上下*/
        direction = moveX > 0 ? 'right' : 'left';             
      }else{
        direction = moveY > 0 ? 'down' : 'top';                       
      }
      // console.log(direction);
      callback(direction);
    }
  })
}

