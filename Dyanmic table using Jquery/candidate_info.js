$(document).ready(function(){

	console.log("Welacome to jquery");
	var candidatesInfo = [];
	var studentCount = 0;


     $('#submit-info').click(function(){
     	 if(validation()){


	    var candidate = {};
     	candidate.name = $("#student-name").val();   	
     	candidate.email = $("#student-email").val(); 
     	candidate.phone = $("#student-phone").val(); 
     	candidate.company = $("#student-company").val(); 
        candidatesInfo.push(candidate);	  
       

      html = "<tr id = 'tr" + studentCount + "'> " +
                " <td class='td-layout'><span class='show name"+studentCount+" span"+studentCount+"'>" + candidatesInfo[studentCount].name  + "</span>" + "<input class='hide input"+studentCount+"' value='"+candidatesInfo[studentCount].name+"' name='name"+studentCount+"'/></td>" +
                " <td class='td-layout'><span class='show email"+studentCount+" span"+studentCount+"'>" + candidatesInfo[studentCount].email  + "</span>" + "<input class='hide input"+studentCount+"' value='"+candidatesInfo[studentCount].email+"' name='email"+studentCount+"'/></td>" +
                " <td class='td-layout'><span class='show phone"+studentCount+" span"+studentCount+"'>" + candidatesInfo[studentCount].phone  + "</span>" + "<input class='hide input"+studentCount+"' value='"+candidatesInfo[studentCount].phone+"' name='phone"+studentCount+"'/></td>" +
                " <td class='td-layout'><span class='show company"+studentCount+" span"+studentCount+"'>" + candidatesInfo[studentCount].company  + "</span>" + "<input class='hide input"+studentCount+"' value='"+candidatesInfo[studentCount].company+"' name='company"+studentCount+"'/></td>" +
                " <td class='td-layout'><input type='button' id='"+studentCount+"' class='edit edit"+studentCount+"' value='EDIT'> "+
                " <input type='button' id='"+studentCount+"' class='hide save save"+studentCount+"' value='SAVE'> </td>"+
                " <td class='td-layout'><input type='button' id='"+studentCount+"' class='delete' value='DELETE'> </td>";

       $('#candidate-info-table').append(html);
       studentCount++;
       $("#student-info").trigger('reset');

           
                  

         $('.delete').on('click',function(){
            	$("#tr"+ this.id).remove(); 
            })
            
           $('.edit').on('click',function(){
               	$(".input"+this.id).removeClass('hide').addClass('show');
                $(".span"+this.id).removeClass('show').addClass('hide');
                $(this).addClass('hide');
                $(".save"+this.id).removeClass('hide');
            });

           $('.save').on('click',function(){
                $(".name"+this.id).text($("input[name=name"+this.id+"]").val());
                $(".email"+this.id).text($("input[name=email"+this.id+"]").val());
                $(".phone"+this.id).text($("input[name=phone"+this.id+"]").val());
                $(".company"+this.id).text($("input[name=company"+this.id+"]").val());
                
                $(".input"+this.id).removeClass('show').addClass('hide');
                $(".span"+this.id).removeClass('hide').addClass('show');
                $(this).addClass('hide');
                $(".edit"+this.id).removeClass('hide');
            });

                  
 }
        });
 

     function validation() {
                        var name = $('#student-name').val();
                        var email = $('#student-email').val();
                        var phoneNumber = $('#student-phone').val();
                        var companyname = $('#student-company').val();
                        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                        var phoneReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                        if (name === '' || email === '' || companyname === '' || phoneNumber === '') {
                        alert("Please fill all fields...!!!!!!");
                        return false;
                      } else if (!(email).match(emailReg)) {
                          alert("Invalid Email...!!!!!!");
                          return false;
                      } else if(!(phoneNumber).match(phoneReg)) {
                      	alert("Invalid Phone Number...!!!!!!");
                       return false;
                       }else{
                       	return true;
                       }
                    }
  
 });
		
