function rand(t)
            {
                document.getElementById("pic").innerHTML=" ";
                var arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                var showBefore=
                    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
                document.getElementById("ContenLetters").textContent="";
                var num =t;
                if(num>26)
                {
                    alert("enter number less than 26");
                }
                else if(num<1)
                {
                    alert("enter num greater than 0");
                }
                else
                {
                    while(num>0)
                    {
                        var index=Math.floor(Math.random() * 26);
                        console.log(showBefore[index]);
                        if(showBefore[index]==false){
                        //console.log(index);
                        //console.log(arr[index]);
                            showBefore[index]=true;
                            var letter=arr[index];
                            var NewItem=document.createElement("input");
                            NewItem.setAttribute("value",letter);
                            NewItem.setAttribute("type","button");
                            //var text=document.createTextNode(letter);
                            //NewItem.appendChild(text);
                            var per=document.getElementById("ContenLetters");
                            per.appendChild(NewItem);
                            NewItem.setAttribute("id",letter);
                            NewItem.setAttribute("class","Alph");
                            num=num-1;
                        }
                    }
                }
            }
            /*********tempFunction***********/
            
            function interaction(type,target,time){
                this.type=type;
                this.target=target;
                this.time=time;
            }
            
            /******************createOpject*******************/
            //var arrGeneration=[];
            //var arrLetter=[]
            function GenertLocalSortage(e,item){
                var a=[]
                if(JSON.parse(localStorage.getItem(item))!=null)
                    a=JSON.parse(localStorage.getItem(item));
                var t=new Date();
                a.push(new interaction(e.type,e.target.value,t));
                localStorage.setItem(item, JSON.stringify(a));
            }
            
            /**************event on click generation*************/
            var gene=document.getElementById("sub");
            gene.addEventListener("click",function(e){
                    GenertLocalSortage(e,"generationButton");
                    var numberOfLetters=document.getElementById("numOfLetter").value;
                    rand(parseInt(numberOfLetters));
                });
            /**********************letters&img*****************/
            var AllLetter=document.getElementById("ContenLetters");
            DivPic=document.getElementById("pic");
            /*****************on click letter*****************/
            AllLetter.addEventListener("click",function(e){
                GenertLocalSortage(e,"letterClicked");
                var clickedLetter=e.target.value;
                DivPic.innerHTML="<img src="+clickedLetter+".jpg>";
                console.log(clickedLetter);
                });
            
            /******************load&Unload*****************/
            window.addEventListener("load",function(e){
                setInterval(removeItems,5000);
                GenertLocalSortage(e,"loding");
                //localStorage.setItem("loading", JSON.stringify(e.type,e.target,new Date()));
            });
            window.addEventListener("unload",function(e){
                //setInterval(removeItems,5000);
                GenertLocalSortage(e,"unloding");
                //localStorage.setItem("loading", JSON.stringify(e.type,e.target,new Date()));
            });
            /*********************remove*******************/
            function removeItems(){
                localStorage.clear();
            } 