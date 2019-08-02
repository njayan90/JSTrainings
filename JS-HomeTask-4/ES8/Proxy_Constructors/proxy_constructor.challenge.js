// 1. SET 
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass
let handler1={
    set:(target,property,value)=>{
      if(property==="employees"){
        if(Array.isArray(value) || typeof value==="string" || value === null){
           target[property]=value;
        }
        else{
          console.log("Error Invalid Type");
        }
      }
      else{
        target[property]=value;
      }
    }
  }
  let manager = {
      office: `Dubai`,
      dept: `sales`,
      employees: 0
  }
  
  manager=new Proxy(manager,handler1);
  
  
  manager.office = `London` //updates
  manager.employees = ['Jim', 'Patrick', 'Mary']; //updates
  manager.employees = 3; // doesn't update
  manager.employees = null; // updates
  manager.employees = {name:'Jim'} // doesn't update
  
  // 2. GET
  // adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
  //"Access Denied" is returned.
  
  let users = [
      {
          username: `bob`,
          accessLevel: 1,
          accessCode: 1234
      },
      {
          username: `Mary`,
          accessLevel: 2,
          accessCode: 2345
      },
      {
          username: `Harold`,
          accessLevel: 2,
          accessCode: 9999
      }
  ]
  let error={
    username: `Access Denied!`,
          accessLevel: "Access Denied!",
          accessCode: "Access Denied!"
  };
  let handler={
  get:(target,property)=>{
    if(target[property].accessLevel==1){
      return(error);
    }
    else
    return(target[property]);
  }
  }
  users=new Proxy(users,handler);
  
  console.log(users[0].username); // Access Denied
  console.log(users[0].accessCode) // Access Denied
  console.log(users[1].accessCode) // 2345
  console.log(users[2].username) // Harold