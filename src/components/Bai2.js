

import { useState } from "react";
const Bai2 = () => {
    const [user, setUser] = useState ({name: "", email: ''})//khong dc dung forEach, map, find, filter

    const [userList, setUserList] = useState([
      {name: '123', email: '123@gmail.com'}, 
      {name: '456', email: '456@gmail.com'}])
      const onClick = () => {
        setUserList([
          ...userList,
          user
        ]);
  
        setUser({name: "", email: ''})
      }
      const onChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
      };
      return (
        ///Cau 1: input ra man hinh "Hoc sinh co ma so 123, diem so la 10"
        //Cau2: input ra man hinh List hoc sinh
          <div>
               <div>
                  <input name = 'name' value={user.name} placeholder="name" onChange ={onChange}/>
                  <input name = 'email' value={user.email} placeholder="email"  onChange={onChange} />
  
                  <button onClick = {onClick}>Add</button>
                </div>
              {/* {`Hoc sinh co ma so ${student.id}, diem so la: ${student.score}`} */}
              {userList.map((item) => {
                return (
                  <div>
                      <div> Ma so hoc sinh: {item.name}</div>
                      <div>Diem so: {item.email}</div>
                  </div>
                );
              })}
              <button onClick = {onClick}> Click here</button>
          </div>
      )
  }
  export default Bai2;