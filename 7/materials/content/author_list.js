let Publisher_author = [
	{
		"fio" : "Петров Петр Петрович",
		"log" : "@Petr1337",
		"podpischik_list" : "28",
		"podpiski_list" : "7",
        "zapisi_list" : "2",
	},
    {
		"fio" : "Иванов Иван Иванович",
		"log" : "@Vanek228",
		"podpischik_list" : "2",
		"podpiski_list" : "23",
        "zapisi_list" : "2",
    },
    {
		"fio" : "Янов Ян Янович",
		"log" : "@Yan1488",
		"podpischik_list" : "12",
		"podpiski_list" : "5",
        "zapisi_list" : "2",
    }
];
function addOPT (){
    let Select = document.getElementById("vibor");
    console.log("work")

    Publisher_author.forEach(el =>{
        let iteam = document.createElement("option");
        iteam.value = el.log;
        iteam.innerHTML = el.fio;

        Select.appendChild(iteam);
    });
};

addOPT();