function volume_sphere() {
    //Write your code here

	let obj = document.getElementById("radius");

	let r = obj.text;

	let ans = 4 / 3;
	ans = ans * 3.14;
	ans = ans * r *r *r;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
