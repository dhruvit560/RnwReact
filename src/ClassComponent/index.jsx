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
            <th className="border border-gray-200 p-3 bg-gray-50">Name</th>
            <th className="border border-gray-200 p-3 bg-gray-50">Age</th>
            <th className="border border-gray-200 p-3 bg-gray-50">Salary</th>
            <th className="border border-gray-200 p-3 bg-gray-50">Bonus</th>
            <th className="border border-gray-200 p-3 bg-gray-50">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map((val,index) => {
              return(
                <tr>
                  <td className="border border-gray-200 p-3">{val.name}</td>
                  <td className="border border-gray-200 p-3">{val.age}</td>
                  <td className="border border-gray-200 p-3">{val.salary}</td>
                  <td className="border border-gray-200 p-3">{val.bonus}</td>
                  <td className="border border-gray-200 p-3">{val.status}</td>
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