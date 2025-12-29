
export const client = {
  getContacts:async ()=>{
      return fetch('https://jsonplaceholder.typicode.com/users',{
          next:{
              tags: ["users"]
          }
      }).then(res => res.json())
  },
    getContactByID:async (clientID: number) =>{
      return fetch(`https://jsonplaceholder.typicode.com/users/${clientID}`).then(res => res.json())
    },
    addContact:async (contact) =>{
      return fetch(`https://jsonplaceholder.typicode.com/users/`,{
          headers:{
              'Content-Type':'application/json'
          },
          next: { revalidate: 60,
              tags: ["users"]
          },
          method:'POST',
          body:JSON.stringify(contact)
      }).then(res => res.json())
    },
    deleteContact:async (contact) =>{
      return fetch(`https://jsonplaceholder.typicode.com/users/`,{
          headers:{
              'Content-Type':'application/json'
          },
          next:{
            revalidate:0
          },
          method:'DELETE',
          body:JSON.stringify(contact)
      }).then(res => res.json())
    }
}