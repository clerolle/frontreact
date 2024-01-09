
const ApiDelete = (ids) => {
    console.log(ids);
    fetch(`http://localhost:8080/company/${ids}`,{
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify(info)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
      });

}

export { ApiDelete } 