import React from "react";
import { Link } from "react-router-dom";
function Student(){
    return(
        <>
        
        <div className="datacontainer">
        <div className="div1">
          <h1 className="studentDetail">Student Details</h1>
          <button className="addnewstudent">Add New Student</button>
        </div>
        <div className="div2">
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>KUNAL</td>
            <td>22</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>MODI</td>
            <td>22</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>ROHIT</td>
            <td>22</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>SONAM</td>
            <td>21</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>VAISHNAVI</td>
            <td>22</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>SHIVALI</td>
            <td>22</td>
            <td>MERN</td>
            <td>EA25</td>
            <td><Link>Edit</Link></td>
          </tr>
        </table>
        </div>
      </div>
        </>
    )
}
export default Student;