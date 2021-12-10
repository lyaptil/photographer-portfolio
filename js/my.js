

/*function for for smooth page loading*/
setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);

var my_array = new Array;
my_array[0]  = "/assets/ph_people/ppl1.jpg";
my_array[1]  = "/assets/ph_people/ppl2.png";
my_array[2]  = "/assets/ph_people/ppl3.png";
my_array[3]  = "/assets/ph_people/ppl4.png";
my_array[4]  = "/assets/ph_people/ppl5.png";
my_array[5]  = "/assets/ph_people/ppl6.png";
my_array[6]  = "/assets/ph_people/ppl7.jpg";
my_array[7]  = "/assets/ph_people/ppl8.png";
my_array[8]  = "/assets/ph_people/ppl9.png";
my_array[9]  = "/assets/ph_people/ppl10.png";
my_array[10] = "/assets/ph_people/ppl11.png";
my_array[11] = "/assets/ph_people/ppl12.png";
my_array[12] = "/assets/ph_people/ppl13.jpg";
my_array[13] = "/assets/ph_people/ppl14.png";
my_array[14] = "/assets/ph_people/ppl15.png";
my_array[15] = "/assets/ph_people/ppl16.png";
my_array[16] = "/assets/ph_people/ppl17.png";

document.querySelector(".pagination").querySelector(".n-page").onclick = () => {
	let page = parseInt(document.querySelector(".active-page").innerHTML)
	if (page == 3) return
	updateTeacherList(convertAndFilterNewUsers(getUsers({"seed": seed, "page": ++page}, 10)))
	document.querySelector(".active-page").innerHTML = page
}

document.querySelector(".pagination").querySelector(".p-page").onclick = () => {
	let page = parseInt(document.querySelector(".active-page").innerHTML)
	if (page == 1) return
	updateTeacherList(convertAndFilterNewUsers(getUsers({"seed": seed, "page": --page}, 10)))
	document.querySelector(".active-page").innerHTML = page
}



function search() {
    if (document.getElementById("Search").value) {
        updateTeacherList(findBy(document.getElementById("Search").value))
        document.getElementById("Search").value = ""
        return
    } 
}

function findBy(value) {
    return value ? _.filter(users, (user) => {
        return user["full_name"] && user["full_name"].toLowerCase().includes(value.toLowerCase()) ||
        user["note"] && user["note"].toLowerCase().includes(value.toLowerCase())
    }) : users
}
