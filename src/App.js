import logo from './logo.svg';
import './App.css';

function App() {
        let data = [
          {
              name: "Dhruvit",
              age: 21,
              salary: 200000,
              bonus: 150000,
              status: true
          },
          {
              name: "Jenish",
              age: 25,
              salary: 400000,
              bonus: 350000,
              status: false
          },
          {
              name: "Darshak",
              age: 23,
              salary: 5000,
              bonus: 400,
              status: true
          },
          {
              name: "Dharmesh",
              age: 28,
              salary: 30000,
              bonus: 600,
              status: true,
          },
          {
              name: "Pinki",
              age: 33,
              salary: 6000,
              bonus: 1000,
              status: true
          }
  ]	
  
  let tbody = document.getElementById("dataHere");
		
		data.map((val,index)=>{
			var tr = document.createElement('tr');	
			for(i in val){
				var td = document.createElement('td');
				td.innerHTML = val[i];
				tr.appendChild(td);	
			}
			tbody.appendChild(tr);
		});
  return (
    <>
       <table id="myTbl" width="100%" border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
        <thead>
          <tr>				
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Bonus</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="dataHere"></tbody>
      </table>
    </>
  );
}

export default App;
