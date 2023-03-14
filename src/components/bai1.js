import { useState } from "react";
// 2 ways biding

const App = () => {
  const [user, setUser] = useState({name: 'A', email:'a@gmail.com'})
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const [users, setUsers] = useState([{name: 'A', email:'a@gmail.com'}, 
                                      {name: 'B', email:'b@gmail.com'},
                                      {name: 'C', email:'c@gmail.com'}])
  const [count, setCount] = useState(0)
  ///////////

  const onClick = () => {
    setCount(count + 1)
    const newUser = {
      ...user,
      email: `${user.name}${count + 1}@gmail.com`
    }
    setUser(newUser)
  }
  ////////////

  const onClick2 = () => {
    const newArr = arr.map((item) => {
    return item *2
    })
    setArr(newArr)
  }
  //////

    const onClick3 = () => {
      const newArr = arr.filter((item) => {
        return item % 3 === 0
      })
      setArr(newArr)

    }
    ///
    const onClick4 = () => {
      const newUsers = users.map((item) => {
        if(item.name === 'A' ) {
          return { name: 'D', email: 'd@gmail.com'}
        }
      })
      return item
      }
    
////
    // const onClick5 = () => {
    //   setUsers([
    //     ...user, //giữ lại các phần tử của array sau đó thêm phần tử D vào
    //     {name: 'D', email: 'd@gmail.com'}
    //   ])
    //   }
  return (
    <div>
      {users.map((item) => {
        return (
          <div>
            <div> Ten la: {item.name} </div>
            <div> Email la: {item.email}</div>
          </div>
        )
      })}

        <div>Tên là: {user.name}</div>
        <div>Email là: {user.email}</div>
        <div>Count là: {count}</div>
        <button onClick={onClick}>Click me 1 </button>
        <button onClick={onClick2}>Click me 2</button>
        <button onClick={onClick3}>Click me 3</button>
        <button onClick={onClick4}>Click me 4</button>
        {/* <button onClick={onClick5}>Click me 5</button> */}
    </div>
  );
}

export default App;
