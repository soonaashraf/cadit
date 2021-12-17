name_of_the_student_array=[];
function sb()
{
 for(var j=1; j<=4;j++)
 {
     var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
     console.log(name_of_the_student);
     name_of_the_student_array.push(name_of_the_student);

 }
  console.log(name_of_the_student_array);
  var length= name_of_the_student_array.length;
  console.log(length);
  var display_student_name=[];
  for(var i=0; i< length; i++)
  {
      display_student_name.push("<h4> name_" + name_of_the_student_array[i]+ "</h4>") 
    console.log(display_student_name);

    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_name;
    var remove_comma= display_student_name.join(""); 
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML= remove_comma;

    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("submit_button").style.display="none";

}
function sorting()
{
    name_of_the_student_array.sort();

    console.log(name_of_the_student_array);
    var length= name_of_the_student_array.length;
    console.log(length);
    var display_sorted= [];
    for(i=0;i<length;i++)
    {
        display_sorted.push("<h4> name_" + name_of_the_student_array[i]+ "</h4>") 
        console.log(display_sorted);
        var remove_comma= display_sorted.join(""); 
        document.getElementById("display_name_without_commas").innerHTML=remove_comma;
        
    
    }
}