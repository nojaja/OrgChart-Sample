
import OrgChart from 'orgchart';
import 'orgchart/dist/css/jquery.orgchart.min.css'
import '../css/style.css'


//View///////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
  let  datascource = {
    'name': '鈴木 一郎',
    'title': '社長',
    'children': [
      { 'name': '田中 太郎', 'title': '部長', 'className': 'manager'},
      { 'name': '佐藤 花子', 'title': '部長', 'className': 'manager'}
    ]
  };
  $('#chart-container').orgchart({
    'data' : datascource,
    'depth': 2,
    'nodeContent': 'title',
    'parentNodeSymbol': ''
  });

});

window.addEventListener('load', (event) => {
  let container = document.querySelector(".container")
    if(container){
      console.log(container);
    }
});