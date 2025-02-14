# Dokomentation 
    Landrup Dans

## Navn
    lasse møller strøm WU11

## Logins
| id | username | password | age | role |
| --- | --- | --- | --- | --- |
| 1 | instructor1 | 1234 | 24 | instructor |
| 2 | instructor2 | 1234 | 32 | instructor |
| 3 | instructor3 | 1234 | 27 | instructor |
| 4 | instructor4 | 1234 | 31 | instructor |
| 5 | user1 | 1234 | 14 | default |
| 6 | user2 | 1234 | 17 | default |
| 7 | user3 | 1234 | 21 | default |
| 8 | user4 | 1234 | 24 | default |
| 9 | user5 | 1234 | 52 | default |
| 10 | user6 | 1234 | 51 | default |

## Instalerede pakker
[**ReactIcons**](https://react-icons.github.io/react-icons/)

## Tech-stack
[**Next.js**](https://next.js)

    Jeg har valgt at bruge Next.js som mit framework, da det er et React-baseret framework, der tilbyder moderne funktioner som:

1. Server-side rendering (SSR): 

    Dynamiske sider gengives på serveren, hvilket forbedrer både SEO og performance.
    Static site generation (SSG): Statiske sider bygges ved build-tid, hvilket gør dem hurtige og cachebare. SSR og SSG øger også   SEO-optimeringen ved at sikre bedre håndtering af meta-tags.

2. API Routes: 

    Next.js gør det muligt at bygge en backend  direkte i projektet uden behov for et separat    serverframework.

    Andre fordele ved Next.js inkluderer:

3. Billedoptimering: 
    
    Next.js leverer billedhåndtering via next/image, som optimerer størrelsen og kvaliteten af billeder i mit projekt.

4. Code splitting: 
    
    Loader kun det nødvendige JavaScript for den pågældende side, hvilket reducerer loading-tiden.

    Forudindlæsning af links: Navigationen føles hurtigere, da Next.js automatisk forudindlæser sider, du linker til.


<span style="font-weight: bold;">
    Jeg valgte Next.js, fordi jeg allerede kendte React, og Next.js føltes som en naturlig udvidelse med moderne funktioner. Det er et fleksibelt   framework, der håndterer både frontend og backend og optimerer SEO, hvilket er vigtigt for mit projekt.
</span>


[**Typescript**](https://www.typescriptlang.org/)

    TypeScript er et statisk typet superset af JavaScript, som jeg har valgt at bruge af følgende grunde:

1. Fejlretning:
    
     TypeScript hjælper med at opdage fejl, mens jeg skriver koden, i stedet for først når jeg kører projektet. Det sparer tid og gør   debugging lettere.

2. Typer:
    
     TypeScript kræver, at man angiver datatyper, hvilket gør det lettere for kolleger at forstå koden og finde rundt i projektet sågar   også for mig selv.

3. Robusthed og samarbejde:
    
     Ved at bruge TypeScript reducerer jeg sandsynligheden for bugs og gør koden mere overskuelig og    vedligeholdelsesvenlig.


<span style="font-weight: bold;">
    Jeg valgte TypeScript for dets robusthed og muligheden for at arbejde mere effektivt i teams.
</span>



[**Tailwind.css**](https://tailwindcss.com/)

    Jeg har valgt Tailwind CSS som mit styling-framework, fordi det giver fuld kontrol over designet uden at være låst til foruddefinerede  komponenter, som man ofte er i frameworks som Bootstrap.

1. Utility-first design:
    
     Med Tailwind CSS kan jeg skrive præcise og hurtige styles direkte i mit JSX. Det fjerner behovet for lange CSS-filer.

    Konfigurerbarhed: Tailwind genererer en tailwind.config.js-fil, hvor jeg kan definere globale regler for farver, typografi og spacing. Det  sikrer et ensartet design på tværs af projektet.

2. Responsivt design:
    
     Tailwind gør det nemt at håndtere forskellige skærmstørrelser direkte med eksempel

    ```
    <div class="text-lg sm:text-xl lg:text-2xl"></div>
    ```
    Her ændres tekststørrelsen baseret på skærmbredden, uden behov for komplekse media queries.

    - Eksempel på en typisk media query, som Tailwind gør overflødig:


    ```
    @media only screen and (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }
    ```
    <span style="font-weight: bold;">
    Jeg valgte Tailwind CSS, fordi det er hurtigt at lære, giver fuld frihed til at designe uden begrænsninger og gør det nemt at skabe     responsivt design.
    </span>

[**ReactIcons**](https://react-icons.github.io/react-icons/)

React Icons har flere fordele sammenlignet med andre ikonbiblioteker, især når det gælder React-projekter.

1. Bredt udvalg af ikoner

React Icons samler populære ikonpakker som FontAwesome, Material Design Icons, Feather, Heroicons i et enkelt bibliotek. Det betyder, at du kan blande og matche ikoner fra forskellige kilder uden at installere flere afhængigheder.

2. Letvægts og optimeret til React

I modsætning til nogle andre ikonløsninger, der kan kræve eksterne CSS-filer eller fontfiler, fungerer React Icons som rene React-komponenter. Det reducerer belastningen på projektet og gør ikoner nemmere at tilpasse.

3. Nem brug og tilpasning

Ikoner importeres som individuelle komponenter, hvilket betyder, at du kun inkluderer de ikoner, du faktisk bruger. Du kan også nemt ændre farve, størrelse og andre egenskaber ved at bruge props.

<span style="font-weight: bold">
React Icons er et letvægts, fleksibelt og performance-optimeret ikonbibliotek, der integreres perfekt i React-projekter. Med et bredt udvalg af ikoner, nem tilpasning og ingen afhængighed af eksterne stylesheets gør det ikonhåndtering både simpel og effektiv.
</span>

## Perspektivering
[**React**](https://react.dev/)

    react er populeært men det mangler de avnacerede funktioner som sever-side rendering(SSR)
    react mangler også billed optimering
    react skal man også react-router hvor man konfigurer webpack manuelt

    så jeg har valgt og bruge Next.js for fleksibelt (SEO) optimering. Den minder også om react bare lige en tak mere opdateret til den nyere verden så jeg vil sige Next.js er god til både store og små projekter


[**JavaScript**](https://www.javascript.com/)

    jeg valgt og bruge TypeScript istedet for JavaScript da jeg bedere kan lig TypeScripts statiske typer så hvis jeg får fejl holder TypeScript øje og fortæller mig der er en fejl med det samme. JavaScript har støre chance for og lave et par fejl gå igennem som øger muligheden for bugs

[**Bootstrap**](https://getbootstrap.com/)

    bootestarp har allerede lavet designet for dig så man er hurtigt igang men det bliver meget ensformet design, hvormod TailWind CSS giver dig mulighed for at style selv så det ikke bliver for ensformit, TailWind CSS gør det nemmere og lave præcise og responsivt tilpassede designs, og giver dig fri mulighed


## Min Kode
blank



## Links
https://www.typescriptlang.org/
https://tailwindcss.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/questions
https://dev.to/



### Forbedringer
jeg ville gerne have haft styr på min kalender og deltager list ved brugerne logger ind, da det ikke er blevt færdigt. Designs messigt syndes jeg det det følger min figmafil.