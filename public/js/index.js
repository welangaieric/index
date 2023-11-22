const tbtn = $('#togglebtn')
const nav =document.querySelector('header')
const control = document.querySelectorAll('.d-box')
const activeLinks = document.querySelectorAll('.links')
tbtn.on('click',()=>{
    nav.classList.toggle('active')
})
control.forEach((e)=>{
    e.addEventListener('click',(el)=>{
        el.classList.toggle('active-cont')
    })
})
activeLinks.forEach((e)=>{
    e.addEventListener('click',function(el){
       
    })
})

// animations
const elements = document.querySelectorAll('.data')
elements.forEach((e)=>e.classList.add('animate'))



// display elements
let display = document.querySelector('.wrapper')

let analytics = document.querySelector('.analytics')
let employees = document.querySelector('.employees')
let purchases = document.querySelector('.payments')
let profiles = document.querySelector('.profiles')
let help = document.querySelector('.help')
let expiry = document.querySelector('.expiry')
let container = document.querySelector('.container')

let customers = document.querySelector('.customers')
let inbox = document.querySelector('.inbox')

// display buttons
let analyticsBtn = document.querySelector('#analytics')
let employeesBtn = document.querySelector('#employees')
let purchasesBtn = document.querySelector('#purchases')
let profilesBtn = document.querySelector('#profiles')
let helpBtn = document.querySelector('#help')
let expiryBtn = document.querySelector('#expiry')
let customersBtn = document.querySelector('#customers')
let inboxBtn = document.querySelector('#inbox')
let temp
// display function 
const displayToDOM = function(el){
    display.innerHTML=el
}

analyticsBtn.addEventListener('click',()=>{
  temp = `
  <div class="org"></div>

  <div class="analytics">
  
  <div class="container analytic">
      <div class="analytics-header">
          <h3>Analytics</h3>
          <div class="controls">
              <div class="duration-control">
                  <div class="d-box" id="daily">Daily</div>
                  <div class="d-box" id="weekly">Weekly</div>
                  <div class="d-box"id = "monthy">Monthly</div>
              </div>
              <div class="today-date">
                  <i class="bi bi-calendar-event"></i> <p>Jan, 2023 - Dec, 2023</p>
              </div>
          </div>
      </div>
      <div class="analytics-body">
          <div class="overview">
              <div class="details animate">
                  <p>Total Amount</p>
                  <h3>Ksh.670,000</h3>
              </div>
              <div class="graph animate">
                  <img src="./public/img/green.png" alt="">
              </div>
          </div>
          <div class="overview">
              <div class="details animate">
                  <p>Total Users</p>
                  <h3>7950</h3>
              </div>
              <div class="graph animate">
                  <img src="./public/img/Chart.png" alt="">
              </div>
          </div>
          <div class="overview">
              <div class="details animate">
                  <p>Total Purchases</p>
                  <h3>3137</h3>
              </div>
              <div class="graph animate">
                  <img src="./public/img/blue.png" alt="">
              </div>
          </div>
      </div>
      <div class="analytics-chart">
          <canvas id="myChart"></canvas>
      </div> 
  
  </div>
</div>
  `
  display.innerHTML = temp
})
employeesBtn.addEventListener('click',()=>{
    temp = `
    <div class="org"></div>

    <div class="employees">
    <div class="container purchases">
        
            <div class="payments-header">
                <h3>Employees</h3>
                <button class="btn bg-primary text-white" data-bs-toggle="modal" data-bs-target="#add-employee"><i class="bi bi-plus"></i> Add</button>

                <div class="search-bar">
                    <input type="text" class="search" placeholder="search">
                    <i class="bi bi-search"></i>
                    
                </div>
            </div>
            <div class="payment-card">
                <ul class="header">
                    <li >Emp Name</li>
                    <li>Number</li>
                    <li>Role</li>
                    <li>Actions</li>
                </ul>
                <div class="data-card">
                    <ul class="data ">
                        <li>Eric Welangai</li>
                        <li>0712345678</li>
                        <li>Software Engineer</li>
                        <li class="action">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#update"><i class="bi bi-pen"></i></a>
                            <a href="#"><i class="bi bi-trash"></i></a>
                        </li>
                        <!-- Modal -->
            <div class="modal  mt-5" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                               
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                <div class="col">
                                    <input type="date" class="form-control" name="empdate" placeholder="Employment Date" required >
                                </div>
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->

             <!-- Update Modal -->
             <div class="modal" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Update Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->
                    </ul>
                    <ul class="data ">
                        <li>Eric Welangai</li>
                        <li>0712345678</li>
                        <li>Software Engineer</li>
                        <li class="action">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#update"><i class="bi bi-pen"></i></a>
                            <a href="#"><i class="bi bi-trash"></i></a>
                        </li>
                        <!-- Modal -->
            <div class="modal  mt-5" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                <div class="col">
                                    <input type="date" class="form-control" name="date" placeholder="Employment Date" required >
                                </div>
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->

             <!-- Update Modal -->
             <div class="modal" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Update Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->
                    </ul>
                    <ul class="data ">
                        <li>Eric Welangai</li>
                        <li>0712345678</li>
                        <li>Software Engineer</li>
                        <li class="action">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#update"><i class="bi bi-pen"></i></a>
                            <a href="#"><i class="bi bi-trash"></i></a>
                        </li>
                        <!-- Modal -->
            <div class="modal  mt-5" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                <div class="col">
                                    <input type="date" class="form-control" name="date" placeholder="Employment Date" required >
                                </div>
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->

             <!-- Update Modal -->
             <div class="modal" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Update Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->
                    </ul>
                    <ul class="data ">
                        <li>Eric Welangai</li>
                        <li>0712345678</li>
                        <li>Software Engineer</li>
                        <li class="action">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#update"><i class="bi bi-pen"></i></a>
                            <a href="#"><i class="bi bi-trash"></i></a>
                        </li>
                        <!-- Modal -->
            <div class="modal  mt-5" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                <div class="col">
                                    <input type="date" class="form-control" name="date" placeholder="Employment Date" required >
                                </div>
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->

             <!-- Update Modal -->
             <div class="modal" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Update Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->
                    </ul>
                    <ul class="data ">
                        <li>Eric Welangai</li>
                        <li>0712345678</li>
                        <li>Software Engineer</li>
                        <li class="action">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#update"><i class="bi bi-pen"></i></a>
                            <a href="#"><i class="bi bi-trash"></i></a>
                        </li>
                        <!-- Modal -->
            <div class="modal  mt-5" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                <div class="col">
                                    <input type="date" class="form-control" name="date" placeholder="Employment Date" required >
                                </div>
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->

             <!-- Update Modal -->
             <div class="modal" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Update Employee</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/newuser" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <select class="form-select" name="employeeType" aria-label="Default select example" required>
                                        
                                        <option selected value="Fulltime">Fulltime</option>
                                        <option value="PartTime">Contract</option>
                                        
                                      </select>
                                </div>
                                <!-- <div class="col">
                                    <select class="form-select" name="employeeStatus" aria-label="Default select example" required>
                                        
                                        <option selected value="worker">Worker</option>
                                        <option value="test period">Test period</option>
                                        
                                      </select>
                                </div> -->
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="salary" placeholder="Salary" required >
                                </div>
                                
                            </div>
                            <div class="input-group mt-3">
                                <select class="form-select" name="employeeRole" aria-label="Default select example" required>
                                        
                                    <option selected value="user">User</option>
                                    <option value="admin">Admin</option>
                                    
                                  </select>
                            </div>
                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                   
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->
                    </ul>
            </div>
        </div>

    </div>
</div>
    `
    display.innerHTML = temp
})
purchasesBtn.addEventListener('click',()=>{ 
    temp = `
    <div class="org"></div>
    <div class="payments">
   

    <div class="container purchases">
        <div class="payments-header">
            <h3>Purchases</h3>
            <div class="search-bar">
                <input type="text" class="search" placeholder="search">
                <i class="bi bi-search"></i>
                
            </div>
        </div>
        <div class="payment-card">
            <ul class="header">
                <li >Ref Code</li>
                <li>Number</li>
                <li>Amount</li>
                <li>Time</li>
            </ul>
            <div class="data-card">
                <ul class="data ">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
                <ul class="data">
                    <li>RK13NUOO39</li>
                    <li>0712345678</li>
                    <li>30</li>
                    <li>11:30 am</li>
                </ul>
            </div>

        </div>

    </div>
</div>
    `
    display.innerHTML = temp
})
profilesBtn.addEventListener('click',()=>{
    temp = `
    <div class="org"></div>
    <div class="payments">
   

        <div class="container purchases">
            <div class="payments-header">
                <h3>Profile</h3>
                <button class="btn bg-primary text-white" data-bs-toggle="modal" data-bs-target="#add-employee"><i class="bi bi-plus"></i> Add</button>

            </div>
            <div class="payment-card">
                <ul class="header">
                    <li class="others" >id</li>
                    <li class="prof-name">Name</li>
                    <li class="prof-type">Type</li>
                    <li class="others">Amount</li>
                    <li class="others">Station</li>
                    <li class="others">Devices</li>
                </ul>
                <div class="data-card">
                    <ul class="data ">
                        <li class="others">1</li>
                        <li class="prof-name">Moderate Daily Unlimited for 50sh</li>
                        <li class="prof-type">WIFI</li>
                        <li class="others">50</li>
                        <li class="others">1</li>
                        <li class="others">1</li>

                    </ul>
                </div>
    
            </div>
            <div class="modal  mt-5" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Profile</h5>
                    <button type="button" class="btn-close bg-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" name="name" placeholder="Name" required >
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" name="type" placeholder="Type" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="amount" placeholder="Amount" required >
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control" name="station" placeholder="Station" required >
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="number" class="form-control" name="devices" placeholder="Devices" required >

                                </div>
                            </div>

                            <div class="input-group mt-3 hover">
                                <input type="submit" class="btn form-control bg-primary" value="Submit">
                            </div>
                        </form>
                
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            <!--  end of modal -->
    
        </div>
    </div>
    `
    display.innerHTML = temp
})
customersBtn.addEventListener('click',()=>{
    temp = `
    <div class="org"></div>
    <div class="fixed-clients">
        <div class="container fixed">
            <div class="payments-header">
                <h4>Fixed Clients</h4>
                <button class="btn bg-primary text-white" data-bs-toggle="modal" data-bs-target="#fixed-clients"><i class="bi bi-plus"></i> Add</button>
                <div class="search-bar">
                    <input type="text" class="search" placeholder="search">
                    <i class="bi bi-search"></i>
                    
                </div>
            </div>
            <div class="clients">
                <div class="client-card error">
                    <table class="client-card-header">
                        <tr>
                            <th>Username</th>
                            <td>eric</td>
                        </tr>
                        <tr>
                            <th>ID No</th>
                            <td>256877456</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>Shauri Shell</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>0712365477</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>example@org.com</td>
                        </tr>
                        <tr>
                            <th>Acc No</th>
                            <td>0712365477</td>
                        </tr>
                        <tr>
                            <th>Package</th>
                            <td>7 MBps</td>
                        </tr>
                        <tr>
                            <th>Billable</th>
                            <td>ksh.2000</td>
                        </tr>
                        <tr>
                            <th>Expiry</th>
                            <td>21 nov, 2023 14:02:00</td>
                        </tr>
                    </table>
            
                    <div class="client-card-actions">
                        <a href="" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#update-fixed-clients"><i class="bi bi-pen"> </i></a>
                        <a href="" class="btn btn-secondary"><i class="bi bi-trash"></i></a>
                        <a href="" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#history"><i class="bi bi-clock"></i></a>



                    </div>
                     <!-- Modal -->
        <div class="modal  mt-5" id="fixed-clients" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title text-dark" id="staticBackdropLabel">Fixed Clients</h5>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="/newuser" method="post">
                        <div class="row mt-3">
                            <div class="col">
                                <input type="text" class="form-control" name="username" placeholder="Username" required >
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" name="id-no" placeholder="ID No" required >
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <input type="text" class="form-control" name="location" placeholder="Location" required >
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <input type="number" class="form-control" name="Acc-no" placeholder="Acc No(phone)" required >
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" name="package" placeholder="Package" required >
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <input type="number" class="form-control" name="billable" placeholder="Billable" required >
                            </div>
                            <div class="col">
                                <input type="date" class="form-control" name="expiry-date" placeholder="Expiry Date" required >
                            </div>
                        </div>
                        <div class="input-group mt-3 hover">
                            <input type="submit" class="btn form-control bg-primary" value="Submit">
                        </div>
                    </form>
               
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
        <!--  end of modal -->
                    <div class="modal  mt-5" id="update-fixed-clients" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title text-dark" id="staticBackdropLabel">Fixed Clients</h5>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="/newuser" method="post">
                                    <div class="row mt-3">
                                        <div class="col">
                                            <input type="text" class="form-control" name="username" placeholder="Username" required >
                                        </div>
                                        <div class="col">
                                            <input type="number" class="form-control" name="id-no" placeholder="ID No" required >
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <input type="text" class="form-control" name="location" placeholder="Location" required >
                                        </div>
                                        <div class="col">
                                            <input type="number" class="form-control" name="phone" placeholder="Phone" required >
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <input type="number" class="form-control" name="Acc-no" placeholder="Acc No(phone)" required >
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" name="package" placeholder="Package" required >
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <input type="number" class="form-control" name="billable" placeholder="Billable" required >
                                        </div>
                                        <div class="col">
                                            <input type="date" class="form-control" name="expiry-date" placeholder="Expiry Date" required >
                                        </div>
                                    </div>
                                    <div class="input-group mt-3 hover">
                                        <input type="submit" class="btn form-control bg-primary" value="Submit">
                                    </div>
                                </form>
                        
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <!--  end of modal -->
                <div class="modal  mt-5" id="history" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title text-dark" id="staticBackdropLabel">History</h5>
                        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="history-card">
                                <p>RK13NUOO39</p>
                                <p>2000</p>
                                <p>date</p>
                            </div>
                    
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            </div>

        </div>
    </div>
    `
    display.innerHTML = temp
})
helpBtn.addEventListener('click',()=>
    {
        temp = `
        <div class="org ">
                
        </div>
        <div class="coming-soon">
            <div class="container">
                <div class="image animate">
                    <img src="./public/img/comingsoon.png" alt="">
                </div>
    
            </div>
            <h4 class="animate">This feature will be Available soon</h4>
    
        </div>
        
        `
        display.innerHTML =temp
    }
)
inboxBtn.addEventListener('click',()=>{
    temp = `
    <div class="org">
            
    </div>
    <div class="coming-soon">
        <div class="container">
            <div class="image animate">
                <img src="./public/img/comingsoon.png" alt="">
            </div>

        </div>
        <h4 class="animate">This feature will be Available soon</h4>

    </div>
    
    `
    display.innerHTML =temp
})



// ?chart

