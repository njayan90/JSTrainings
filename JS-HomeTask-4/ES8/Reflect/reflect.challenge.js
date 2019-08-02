let course = {
    cost:1300
  };
  Reflect.defineProperty(course,'name',{value:"Javascript", writable:false,enumerable:true})
  Reflect.defineProperty(course,'duration',{value:"3 hours",writable:false,enumerable:true})
  console.log(course);
  Reflect.deleteProperty(course,'cost');
  console.log(course);
  Reflect.getOwnPropertyDescriptor(course,`name`).value;
  
  
  // use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
  // property to define - name with value as "Javascript", make it read only (writable : false)
  // property to define - duration with value as "3 hours", make it read only (writable : false)
  // getOwnpropertydescriptor - check and print metadata about name property
  