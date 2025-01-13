function btnclick(val)
{
    document.getElementById("screen").value= document.getElementById("screen").value+val    


}
function cleardisplay()
{
    document.getElementById("screen").value=""
    console.log("working")
}
function result()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
