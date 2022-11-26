let name = prompt("inserisci mese: ")
if(name =="gennaio" || name =="marzo" || name =="maggio" || name =="luglio" || name =="agosto" || name =="ottobre" ||name =="dicembre")
{
    console.log(`${ name } ha 31 giorni`)
} 
else if(name == "febbraio")
{
    console.log(`${ name } ha 28 giorni`)
}
else if(name == "aprile" || name =="settembre" || name =="novembre" || name =="giugno")
{
    console.log(`${ name } ha 30 giorni`)
}

