console.log("14-6-21")
console.log("Day3")
function myFunction()
                    {
                        console.log("checking the function call");
                      link.rel='stylesheet';
                      link.type='text/css';
                      link.href='button_click_theme.css'
                    }
                    function submit_input()
                    {
                        var answer="lorem";
                        var input=document.getElementById("user_input").value;
                        if(answer==input)
                        {
                         var you="correct answer"
                         console.log("correct");
                         document.getElementById("result2").innerHTML="";
                         document.getElementById("result").innerHTML=you;
                        }
                        else
                        {
                            you="incorrect answer";
                            console.log("incorrect");
                            document.getElementById("result").innerHTML="";
                            document.getElementById("result2").innerHTML=you;
                            
                        }
                       function next_page()
                         {
                          document.getElementById("next_question").innerHTML="for(i=1;i<=9;i++)";
                          document.getElementById("next_question").innerHTML="How many times the loops will be executed?";          
                         }
                    }