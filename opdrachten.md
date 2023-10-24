oef1:

Schrijf een functie dat een array ontvangt met positieve gehele getallen. verhef elk 4e element tot de 3e macht.

en geef de som van enkel deze 4e getallen terug

concreet voorbeeld: // Math.pow(cijfer,3)

doTheMagic([1,2,3,2,1,3,8,12,6])

=> [1,2,3,2³,1,3,8,12³,16]

=> [2³,12³]

=> [8,1728]

=> 1736

oef2:

schrijf een functie dat een positief geheel getal ontvangt en de cijfers daarvan samen optelt.

Dit herhaal je tot je 1 getal hebt.

concreet voorbeeld:

berekenSomTotGetal(123456129768)

=> 1+2+3+4+5+6+1+2+9+7+6+8

=> 4+7

=> 1+1

=> 2

oef3:

maak een functie dat een array van getallen opsplitst in 2 arrays: 1 array met de even getallen en 1 met de oneven

geef het gemiddelde van de 2 arrays in een array van 2 elementen terug. Rond het gemiddelde af met 2 cijfers na de komma.

concreet voorbeeld:

splitsOpEnGeefDeTweeGemiddeldes([1,2,3,1,5616,112,13,1212,3,7])

=> [2,5616,112,1212],[1,3,1,13,3,7]

=> [6944/4, 28/6]

=> [1736.00, 4.67]

oef4:

Schrijf 2 object Constructors

GeschenkLijst

Geschenk

Een Geschenklijst is van een persoon met een voornaam, achternaam en een leeftijd.

Een Geschenk heeft een random-id, naam en een prijs.

Een geschenkenlijst heeft de volgende methods:

    - addGift(naam, prijs)

    - removeGift(id)

    - getListOfAllGifts()

    - getTotalPrice()
