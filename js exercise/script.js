$.ajax({
url: 'https://jsonplaceholder.typicode.com/users',
dataType: 'json',
success: function(data) {
    for (var i=0; i<data.length; i++) {
        var row = $('<tbody><tr><td>' + data[i].id + '</td><td>' + data[i].name + '</td><td>' +data[i].username +'</td><td>'
            + data[i].email+ '</td><td>' + data[i].address.street +'</td><td>' + data[i].address.city  +'</td><td>' + data[i].phone + '</td><td>' + data[i].website+
                '</td><td>' + data[i].company.name + '</td></tr></tbody>');
        $('#myTable').append(row);
    }
    
},
error: function(jqXHR, textStatus, errorThrown){
    alert('Error: ' + textStatus + ' - ' + errorThrown);
}
});

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }