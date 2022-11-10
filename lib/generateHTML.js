const generateHTML = (data) => {
    const {
        name,
        id,
        email,
        github,
        officeNumber,
        school
    } = data

    return `${name}${id}${email}${github}${officeNumber}${school}`
}

console.log(generateHTML)

export default generateHTML