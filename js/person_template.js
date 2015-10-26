function PersonTemplate(data) {
  return `
    <li>${data.FirstName} is ${data.Age} years old</li>
  `;
}

export default PersonTemplate;