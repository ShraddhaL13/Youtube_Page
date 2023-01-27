
//  console.log("searchkeyword")




const btnSearch=document.querySelector("#btnSearch");
btnSearch.addEventListener("click",(e)=>{
    e.preventDefault()
    const searchkeyword=document.getElementById("textSearch").value;
    console.log("searchkeyword :",searchkeyword)
   // alert("Btn Click Event")

    xhr=new XMLHttpRequest();
    //
   
    api_key="AIzaSyCYchlTicuWz3_usJZyluJKkW0S6OAoh7E"
    
    url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCYchlTicuWz3_usJZyluJKkW0S6OAoh7E&type=video&maxResults=12&q='+searchkeyword
    //
    xhr.open("GET",url);
    //
   
xhr.onreadystatechange=()=>
{
    if(xhr.status==200 && xhr.readyState==4)
    {
    
        const response=JSON.parse(xhr.responseText);
        console.log("response:",response.items[0]);
         for(i=0; i<response.items.length;i++)
        {
            //console.log("vedio ID",response.items[i].id.videoId)
            const videoId=response.items[i].id.videoId;
            const VedioROW=document.getElementById("VedioROW")                   
            //
            const col_div=document.createElement("div");
            col_div.className="col-sm-12 col-md-6 col-lg-6"
            VedioROW.appendChild(col_div)
            //
            const iframe=document.createElement("iframe");
            iframe.className="p-3 m-3"
            iframe.height="315px"
            iframe.width="560px"
            iframe.src="https://www.youtube.com/embed/"+videoId
            iframe.allowFullscreen=true
            console.log(iframe);
            col_div.appendChild(iframe)

            
        } 
        
       
    }
    else
    {
        //console.log(xhr.readyState)
    }
}
    //
    xhr.send()

})
