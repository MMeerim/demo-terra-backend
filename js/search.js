function search() {
    var input, filter
    input = document.getElementById("search");
    filter = document.getElementById('search').value.toUpperCase();
    list_tr = document.getElementsByTagName("tr");
    isTrue = false;
    for (i = 1; i < list_tr.length; i++) {
        tr = list_tr[i].getElementsByTagName('td');
        for(j=0; j < tr.length; j++) {
            td  = tr[j].getElementsByTagName('input')[0].value.toUpperCase()
            if (td.includes(filter)) {
                isTrue = true
            }
        }
        if (isTrue) {
            list_tr[i].style.display = ''
        } else {
            list_tr[i].style.display = "none";
        }
        isTrue=false
    }
}