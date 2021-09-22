function onLoad()
{
    fetch("dict.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(data)
    {          
        // console.log(data);           
        let link = data["phonetics"][0].audio;
        console.log(link);

        document.getElementById("myid").src=link;
    })    
}