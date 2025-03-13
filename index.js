const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  const root = document.querySelector('#root');
  const names = ['Augie','John','jack','David']
  const occupations = ['Store Manager','Assistant store manager','Meat Manager','Bakery Manager']

  function render(){
    // Table setup
    root.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerHTML = "Freelancer Forum"
    root.append(h1);

    const avg = Math.round(freelancers.reduce((sum, f) => sum + f.price, 0) / freelancers.length
);

    const avgpar = document.createElement('p');
    avgpar.innerHTML = `The Average starting price is $${avg}`;
    root.append(avgpar);

    const h2 = document.createElement('h2');
    h2.innerHTML = "Available Freelancers"
    root.append(h2);
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Name','Occupation','Starting Price'];
    headers.forEach(text =>{
    const th = document.createElement('th');
    th.innerHTML = text;
    headerRow.append(th);
    });
    table.append(headerRow)

    freelancers.forEach(freelancer =>{
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellOccupa = document.createElement('td');
    const cellprice = document.createElement('td');
    cellName.innerHTML = freelancer.name
    cellOccupa.innerHTML = freelancer.occupation
    cellprice.innerHTML = freelancer.price
    row.append(cellName,cellOccupa,cellprice);
    table.append(row);
    })
    root.append(table);
}

function addrandomFreelancer(){
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100) +20;
    freelancers.push({name,occupation,price});
    render();
}
function init(){
    render();
    setInterval(addrandomFreelancer, 5000);
  }

  init();

