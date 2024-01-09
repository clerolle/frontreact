
const ApiCreate = (user) => {

        fetch("http://localhost:8080/company",{
            method: "POST",
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnVlYmExQGdtYWlsLmNvbSIsImV4cCI6MTcwNTU5MTk2OX0.ze60udIRMQRF7UBz3tl8twUJFbf4xyJUfLsNyJvEnFuRMx844TptDrjkwkPx9w2qNkGmH753QX7k1qkZjukSTQ'
              },
            body: JSON.stringify(user)
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
                return data
          });

}

export { ApiCreate } 