function quickSort(a,left,right){
    if(left==right)return;
    let key=partition(a,left,right);//选出key下标
    if(left<key){
        quickSort(a,left,key-1);//对key的左半部分排序
    }
    if(key<right){
        quickSort(a,key+1,right)//对key的右半部份排序
    }
}
function partition(a,left,right){
    let key=a[left];//一开始让key为第一个数
    while(left<right){//扫描一遍
        while(key<=a[right]&&left<right){//如果key小于a[right]，则right递减，继续比较
            right--;
        }
        [a[left],a[right]]=[a[right],a[left]];//交换
        while(key>=a[left]&&left<right){//如果key大于a[left]，则left递增，继续比较
            left++;
        }
        [a[left],a[right]]=[a[right],a[left]];//交换
    }
    return left;//把key现在所在的下标返回
}
let arr=[2,3,1,4];
quickSort(arr,0,3);
console.log(arr);