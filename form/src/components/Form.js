import React, { useState , useEffect} from "react";

function Form() {
  const [Form, setForm] = useState({});
  const [Users, setUsers] = useState([])

  const handleInput = (e) => {
    // console.log(e.target.value, e.target.name);
    setForm({
      ...Form, // Form veriable // previous state distructure
      [e.target.name]: e.target.value,
    });
  };

  // console.log(Form)

  const handleSubmit = async (e) => {
    e.preventDefault(); // default befaviour & console
    console.log(Form);

    // connect nodejs server
    const Url =`http://localhost:8080/form`
    const Server = await fetch(Url,{
      method : 'POST',
      body: JSON.stringify(Form),
      headers:{
        'Content-Type':'application/json'
      }
    });
    console.log(Server)
    const Data = await Server.json();
    
    console.log(Data)

  };

  // getuser backend
  const getUsers = async ()=>{
    const Url =`http://localhost:8080/form`
    const Server = await fetch(Url,{
      method : 'GET',
    });
    console.log(Server)
    const Data = await Server.json();
    console.log(Data)

    setUsers(Data)
  }
  useEffect(() => {
      getUsers();
  }, [])





  return (
    <>
      <div>
        <h1>{JSON.stringify(Form)}</h1> {/* debuging */}
        <div className="d-flex justify-content-center m-5">
          <form action="" onSubmit={handleSubmit}>
            <h5>username</h5>
            <input type="text" name="username" onChange={handleInput} />
            <h5>Password</h5>
            <input type="password" name="password" onChange={handleInput} />
            <br />
            <br />
            <input type="submit" />
          </form>

          <div>
            <ul>
              {Users.map(user=>
                <li key={user._id}>{user.username} ,{user.password} </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
