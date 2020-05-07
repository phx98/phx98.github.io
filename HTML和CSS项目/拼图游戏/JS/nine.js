window.onload =function(){
	var arr =['0px 0px','400px 0px','200px 0px','0px 400px','400px 400px','200px 400px','0px 200px','400px 200px']
	var big =document.getElementById("big")
	var img =big.children
	var puz =new Nine(img,arr)
	
}
function Nine(img,arr){
	this.img = img
	this.arr = arr
	this.index = 8
	this.arrNew =[]
	this.init()
}
// 构造函数
Nine.prototype.init =function(){
	this.mess()
	this.Click()
	console.log(this.arrNew)
}


// 打乱拼图的函数
Nine.prototype.mess =function(){
	var num
	var tem = this.copy(this.arr)
	
	for(var i =0;i<this.img.length-1;i++){
		num = Math.floor(Math.random()*tem.length)
		this.img[i].style.backgroundPosition = tem[num]
		this.arrNew.push(tem[num])
		tem.splice(num,1)
	}
	this.arrNew.push(null)
}


// 拷贝数组
Nine.prototype.copy =function(obj){
	var newObj=[]
	for(var i =0;i<obj.length;i++){
		newObj.push(obj[i])
	}
	return newObj;
}

// 绑定点击事件,交换背景
Nine.prototype.Click =function(){
	for(let i=0;i<this.img.length;i++){
		var that =this
		this.img[i].onclick =function(){
			if(that.jud()){
				alert("恭喜你,你的拼图已完成")
			}
			var res =that.none(i)
			if(that.img[0].style.backgroundPosition == '' && (i == 1 || i == 3)){
				that.index = i
				that.img[0].style.backgroundPosition = this.style.backgroundPosition
				that.img[0].classList.remove("white")
				this.style.backgroundPosition = ''
				this.setAttribute("class",'white')
				that.arrNew[0]=that.arrNew[i]
				that.arrNew[i] =null
			}
			if( res != false){
				that.index = i
				that.img[res].style.backgroundPosition = this.style.backgroundPosition
				that.img[res].classList.remove("white")
				this.style.backgroundPosition = ''
				this.setAttribute("class",'white')
				console.log(res)
				console.log(that.img[that.index])
				that.arrNew[res] =that.arrNew[i]
				that.arrNew[i] =null
			}
			
		}
		
	}
}

// 我还是弄个新函数来专门判断盒子旁边是否有空盒子吧,心累
Nine.prototype.none = function(i){
	// 判断i下标的盒子旁边是否有空盒子
	// 首先判断它的上下左右是否有盒子,当数字为0,3,6时左边没有盒子;当数字为0,1,2时上面没有盒子,
	// 当数字为2,5,8时右边没有盒子,当数字为6,7,8时下面没有盒子
	// 左边有盒子且盒子为空
	// var jud =false
	if(!(i%3 == 0) && this.img[i-1].style.backgroundPosition == ''){
		return i-1
	}else if(!(i%3 == 2) && this.img[i+1].style.backgroundPosition == ''){
		// 右边有盒子且盒子为空
		return i+1
	}else if(!(i/3 <1) && this.img[i-3].style.backgroundPosition == ''){
		// 上面有盒子且盒子为空
		return i-3
	}else if(!(i/3 == 2) && this.img[i+3].style.backgroundPosition == ''){
		// 下面有盒子且盒子为空
		return i+3
	}else{
		return false
	}
	
}

// 判断是否数组是否相等
Nine.prototype.jud =function(){
	var judage = true
	for(var i =0;i<this.arr.length;i++){
		if(this.arr[i] != this.arrNew[i]){
			judage =false
		}
	}
	return judage
}