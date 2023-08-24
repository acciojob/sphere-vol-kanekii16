function volume_sphere() {
    //Write your code here

	let obj = document.getElementById("radius");

	let r = obj.value;

	let ans = 4/3;
	ans = ans * 3.14;
	ans = ans * r *r *r;

	let temp = document.getElementById("volume");
	temp.value = ans;
	console.log(temp.value);

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
