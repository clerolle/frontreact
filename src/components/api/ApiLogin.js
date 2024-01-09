import React, { useEffect, useState } from 'react'

const ApiLogin = (email, password) => {

    //   fetch("http://localhost:8080/users/login",{
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //     body: JSON.stringify(user)
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         return data;
    //   });

    let validate = false;
    let users = [{
        email: "prueba1@gmail.com",
        password: "12345"
    }];

    users.map(item=>{
        if(item.email === email && item.password === password){
            validate= true;
        }
    })
    return validate;

}

export { ApiLogin} 
