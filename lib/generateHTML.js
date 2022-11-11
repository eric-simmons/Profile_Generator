const generateHTML = (data) => {
    const {
        name,
        id,
        email,
        github,
        officeNumber,
        school
    } = data

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Profiles</title>
    </head>
    
    <body>
        <div class="card">
            <header class="name">${name}</header>
            <div class="id">${id}</div>
            <div class="email">${email}</div>
            <a href="${github}">github</a>
            <div class="officenumber">Office Number: ${officeNumber}</div>
            <div class="school">School: ${school}</div>
        </div>
    </body>
    </html>`
}

console.log(generateHTML)

export default generateHTML