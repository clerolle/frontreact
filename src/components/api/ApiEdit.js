
const ApiEdit = (user) => {

    fetch("",{
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
      });

}

export { ApiEdit } 