function  mini2(arr) {
	let n=arr.length;
	for(let i=0;i<2;i++){
		for(let j=0;j<arr.length-1;j++){
			if(arr[j]<arr[j+1]){
				let temp=arr[j+1];
				arr[j+1]=arr[j];
				arr[j]=temp;
			}
		}
	}
	let ans=arr[n-1]+arr[n-2];
	arr.pop();
	arr.pop();
	arr.push(ans);
	return ans;
}

function mincost(arr)
{ 
//write your code here
// return the min cost
	arr=arr.map((el)=>Number(el));

	let ans=0;
	while(arr.length>=2){
		let temp=mini2(arr);
		ans+=temp;
		
	}
	return ans;
  
}

module.exports=mincost;
