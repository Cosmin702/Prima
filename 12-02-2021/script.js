var B=parseInt(prompt("Inserisci B"));
var b=parseInt(prompt("Inserisci b"));
var h=parseInt(prompt("Inserisci h"));
var area=((B+b)*h)/2;

if(area>=100.0)
{
    allert("area grande");
}
else 
{
    allert("area piccolo");
}
allert("area="+area);