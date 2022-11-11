
function newEmployee(name, role, id, email) {
    const cardDiv = document.createElement('div')
    cardDiv.setAttribute("id", "card")
    document.body.appendChild(cardDiv)
    cardDiv.innerText = `${name} -${role} \n
    Id  ${id} \n
    Email: ${email}\n
    `
    // "Eric Simmons" + "  -  Manager" + '\n'
    // + "Id" + "  #09" + '\n' 
    // + "Email" + " : EricTomlinsonSimmons@gmail.com" + '\n'
    

    // const idDiv = document.createElement('div')
    // idDiv.setAttribute("id", "id")
    // cardDiv.appendChild(idDiv)
    // idDiv.innerText = "Id" + " #09" + '\n' + "    email@email.com"
    
    // const managerDiv = document.createElement('div')
    // managerDiv.setAttribute("id", "manager")
    // cardDiv.appendChild(managerDiv)
    // managerDiv.innerText = "Office Number:" + "  001"

    // const internDiv = document.createElement('div')
    // internDiv.setAttribute("id", "intern")
    // cardDiv.appendChild(internDiv)
    // internDiv.innerText = "School:" + " University of Illinois"

    // const engineerDiv = document.createElement('a')
    // engineerDiv.setAttribute("id", "engineer")
    // cardDiv.appendChild(engineerDiv)
    // engineerDiv.innerText = "Github:" + " github.com"
}
newEmployee("Eric Simmons", "Manager", "00", "EricTomlinsonSimmons@gmail.com");



 