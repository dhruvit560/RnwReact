import React, { Component } from "react";

class User extends Component{
  constructor(){
    super();

    this.state = {
      data:[
        {
                  name: "Dhruvit",
                  age: 21,
                  salary: 200000,
                  bonus: 150000,
                  status: "true"
              },
              {
                  name: "Jenish",
                  age: 25,
                  salary: 400000,
                  bonus: 350000,
                  status: "false"
              },
              {
                  name: "Darshak",
                  age: 23,
                  salary: 5000,
                  bonus: 400,
                  status: "true"
              },
              {
                  name: "Dharmesh",
                  age: 28,
                  salary: 30000,
                  bonus: 600,
                  status: "true",
              },
              {
                  name: "Pinki",
                  age: 33,
                  salary: 6000,
                  bonus: 1000,
                  status: "true"
              }
      ]
    }
    
  }

  
  render(){
    return <>
      <table>
        <thead>
          <tr>
            <th className="p-3 border border-gray-200 bg-gray-50">Name</th>
            <th className="p-3 border border-gray-200 bg-gray-50">Age</th>
            <th className="p-3 border border-gray-200 bg-gray-50">Salary</th>
            <th className="p-3 border border-gray-200 bg-gray-50">Bonus</th>
            <th className="p-3 border border-gray-200 bg-gray-50">Status</th>
            <th className="p-3 border border-gray-200 bg-gray-50">Total</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map((val,index) => {
              return(
                <tr>
                  <td className="p-3 border border-gray-200">{val.name}</td>
                  <td className="p-3 border border-gray-200">{val.age}</td>
                  <td className="p-3 border border-gray-200">{val.salary}</td>
                  <td className="p-3 border border-gray-200">{val.bonus}</td>
                  <td className="p-3 border border-gray-200">{val.status}</td>
                  <td className="p-3 border border-gray-200"></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  }
}


export default User