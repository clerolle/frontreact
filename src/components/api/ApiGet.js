const ApiGet = () => {

    let response;
    fetch("")
        .then((res) => res.json())
        .then((data) => {
            return data 
      });

}

export { ApiGet } 