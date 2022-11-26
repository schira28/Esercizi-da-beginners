let vote = prompt("inserisci il tuo voto")
if(vote<6)
{
    console.log(`il voto è insufficiente --> ${vote}`)
}
else if(vote == 6 || vote <= 6.9 )
{
    console.log(`il voto è sufficiente --> ${vote}`)
}
else if(vote == 7 || vote <= 7.9 )
{
    console.log(`il voto è discreto --> ${vote}`)
}
if(vote>8)
{
    console.log(`il voto è buono --> ${vote}`)
}