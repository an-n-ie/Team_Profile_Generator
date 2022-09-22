function internHTML(intern){
    return `
    <div class="row d-flex justify-content-center">
    <div class="col-sm-4 my-3">
      <div class="card">
        <div class="card-body bg-info bg-opacity-75">
          <h5 class="card-title">${intern.name}</h5>
          <p class="card-text">intern</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
      </div>
    </div>
    `
}

module.exports=internHTML