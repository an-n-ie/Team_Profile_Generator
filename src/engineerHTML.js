function engineerHTML(engineer){
    return `
    <div class="col-sm-4 my-3">
      <div class="card">
        <div class="card-body bg-info bg-opacity-25">
          <h5 class="card-title">${engineer.name}</h5>
          <p class="card-text">Engineer</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.github}</li>
          </ul>
        </div>
      </div>
    </div>
    `
}

module.exports=engineerHTML