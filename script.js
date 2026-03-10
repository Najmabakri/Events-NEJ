
    function load(key){
        return JSON.parse(localStorage.getItem(key))||[];
    }
    function save(key,data){
        localStorage.setItem(key,JSON.stringify(data));
    }
    function addElement(key,obj){
        let d=load(key);
        d.push(obj);
        save(key,d);
    }
    function deleteElement(key,i){
        let d=load(key);
        d.splice(i,1);
        save(key,d);
    }

document.querySelectorAll('.sidebar a').forEach(link=>{
    if(link.href === window.location.href){
        link.classList.add('active');
    }
});

//CSV
function downloadCSV() {
    let table = document.getElementById("table");
    let rows = table.querySelectorAll("tr");
    let csv = [];

    rows.forEach(row => {
        let cols = row.querySelectorAll("th, td");
        let rowData = [];
        cols.forEach(col => rowData.push(col.innerText));
        csv.push(rowData.join(","));
    });

    let blob = new Blob([csv.join("\n")], { type: "text/csv" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
}
//PDF

function downloadPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Table Data", 14, 10);
    doc.autoTable({ html: '#table' }); // PDF of your table
    doc.save("data.pdf");
}


//deconnexion
document.getElementById("deco").addEventListener('click', function(event) {
    window.location.href = '../login.html';
});


//menu telephone
function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open');
}

