function managerHTML(manager){
    return `
    <div class="col-sm-4 my-3">
      <div class="card">
        <div class="card-body bg-info bg-opacity-25">
          <h5 class="card-title">${manager.name}</h5>
          <p class="card-text">Manager</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    `
}

module.exports=managerHTML