import { useState, useEffect, useMemo } from "react"; //chỉ lấy các phần cần thiết
import TableUserList from "./TableUserList"; // để lấy toàn bô folder TableUserList
import FormUser from "./FormUser";

const DEFAULT_USER = { name: '', email: '', phone: ''}

const Bai3 = () => {
  // const [users, setUsers] = useState ([])
  const [userList, setUserList] = useState([{name: 'Nguyen Van A', email: 'a@gmail.com'},{name: 'Nguyen Van B', email: 'b@gmail.com'},{name: 'Nguyen anh C', email: 'c@gmail.com'}]);
  const [formData, setFormData] = useState(DEFAULT_USER);
  // const [searchUserList, setSearchUserList] = useState([]);
  const [keyword, setKeyWord] = useState('');

//   useEffect(() => {
//   if(keyword !== '') {
//     const newUserList = userList.filter((item) => {
//       return item.name.includes(keyword) || item.email.includes(keyword) //.includes de tim 1 cum tu
//     })
//     setSearchUserList(newUserList)
//   }
//   else {
//     setSearchUserList(userList)
//   }
// }, [keyword, userList])

const searchUserList = useMemo(() => {
  if(keyword !== '') {
    const newUserList = userList.filter((item) => {
      return item.name.includes(keyword) || item.email.includes(keyword) 
    })
    return newUserList 
  }
  else {
    return userList 
  }
}, [keyword, userList])

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onClick = () => {
    debugger
    if(formData.id) {
      const newUserList = userList.map((item) => {
        if(item.id === formData.id) {
            return formData
        }
        return item
      })
      setUserList(newUserList)
    }
    else{
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData
        }
      ])
    }
    setFormData(DEFAULT_USER)
  }

  const onEdit = (item) => {
    setFormData(item)
  }
  const onDelete = (item) => {
    const newUserList = userList.filter((user) =>{
      return user.id !== item.id
    })
    setUserList(newUserList)
  };

  const onSearch = (e) =>{
    setKeyWord(e.target.value)
  }

  return (
    <div>
      <FormUser formData={formData} setFormData={setFormData} onSubmit={onClick}/>

      <input value={keyword}  onChange ={onSearch}/>

      <TableUserList dataSource={searchUserList} onEdit={onEdit} onDelete={onDelete}/>
    </div>
  );
}

export default Bai3;
