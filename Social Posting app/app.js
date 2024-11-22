function post_Submit(){
    var user_name=document.getElementById('name');
    var title=document.getElementById('title');
    var description=document.getElementById('description');
    var time=new Date().toTimeString();
    var listingcontainer=document.querySelector('#listingcontainer');

    if (user_name.value.trim()!==""){
        if (title.value.trim()!==""){
            if (description.value.trim()!==""){
                listingcontainer.innerHTML +=
                `
                <div class="card me-5 p-3 mt-5">
          <div class="card-header d-flex justify-content-between card-header">  <span>~@${user_name.value}</span><span>~@${time}</span> </div>
          <div style="background-color: bisque;"   class="card-body">
            <h5 class="card-title">${title.value}</h5>
            <p class="card-text"> ${description.value}</p>
           
          </div>
        </div>
                `
                user_name.value = ''
                title.value = ''
                description.value = ''
                      } else {
                        alert("description is required");
                      }
                    } else {
                      alert("Title is Required");
                    }
                  } else {
                    alert("Username is required");
                  }
                }
                