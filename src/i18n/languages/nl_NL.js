/* eslint-disable camelcase */
export const nl_NL = {
  hero: {
    title: 'Nummering',
    subtitle: 'Een gemakkelijke <strong>data merge</strong> tool voor <strong>InDesign</strong>.'
  },
  menu: {
    generate: 'Genereer',
    about: 'Deze tool'
  },
  about: {
    title: 'Deze tool',
    body: [
      {
        title: 'Wat doet het?',
        body: 'Organiseert u wel eens een loterij? Maakt u wel eens een ledenpassen voor bijvoorbeeld een voetbalvereniging? Wilt u toegangskaarten maken voor een evenement zoals bijvoorbeeld een tentoonstelling? En moeten al deze documenten een apart en uniek nummer hebben? Dan bent u hier aan het goede adres! Als u deze documenten opmaakt in InDesign en u maakt gebruik van data merge om de documenten te nummeren dan kunt u met deze tool heel eenvoudig een nummerreeks genereren. Met een paar muisklikken bent u klaar.'
      },
      {
        title: 'Hoe werkt het?',
        body: 'Vul een willekeurige bestandsnaam in. Vervolgens geeft u de naam van de kolom, dit is de tag die gebruikt wordt voor data merge in InDesign. Daarna geeft u het begin en het eindgetal op. Standaard gaat de reeks met 1 getal omhoog maar u kunt er ook voor kiezen grotere stappen tussen de getallen te nemen. Dit stelt u in bij "aantal stappen". Vult u bijvoorbeeld "3" dan wordt de reeks; 1, 4, 7, 10, enzovoort. Ook kunt u aangegeven wat er voor en na het getal moet komen te staan. Tot slot kan het aantal leidende nullen aangeven. Dit is het aantal nullen wat maximaal voor het getal komt te staan.'
      },
      {
        title: 'Aan de slag!',
        body: 'Ga rustig een aantal dingen uitproberen en zie rechts het resultaat. Bent u tevreden? Druk dan op "downloaden" om het bestand binnen te halen. Succes!'
      },
      {
        title: 'Let op!',
        body: 'Deze tool is gemaakt voor een schoolproject. Gebruik op eigen risico. Fouten kunnen gemeld worden op GitHub via de volgende link <a href="https://github.com/maartenpaauw/nummering/issues/new" target="_blank">https://github.com/maartenpaauw/nummering</a> of door een e-mail te sturen naar <a href="mailto:maartenpaauw@gmail.com">maartenpaauw@gmail.com</a>.'
      }
    ]
  },
  example: {
    header: 'Voorbeeld'
  },
  footer: {
    created_with: 'Gemaakt met',
    created_by: 'door'
  },
  header: {
    on_github: '@:hero.title op GitHub'
  },
  message: {
    title: 'Let op!',
    body: 'Deze tool is gemaakt voor een schoolproject. Gebruik op eigen risico. Fouten kunnen gemeld worden op GitHub via de volgende link <a href="https://github.com/maartenpaauw/nummering/issues/new" target="_blank">https://github.com/maartenpaauw/nummering</a> of door een e-mail te sturen naar <a href="mailto:maartenpaauw@gmail.com">maartenpaauw@gmail.com</a>.'
  },
  settings: {
    title: 'Instellingen',
    download: 'Downloaden',
    reset: 'Resetten',
    filename: {
      label: 'Bestandsnaam',
      placeholder: '@:settings.filename.label'
    },
    header: {
      label: 'kolomnaam',
      placeholder: '@:settings.header.label'
    },
    start: {
      label: 'Begingetal',
      placeholder: '@:settings.start.label'
    },
    end: {
      label: 'Eindgetal',
      placeholder: '@:settings.end.label'
    },
    step: {
      label: 'Aantal stappen',
      placeholder: '@:settings.step.label'
    },
    prefix: {
      label: 'Voor het getal',
      placeholder: '@:settings.prefix.label'
    },
    suffix: {
      label: 'Na het getal',
      placeholder: '@:settings.suffix.label'
    },
    leading_zeros: {
      label: 'Leidende nullen',
      placeholder: '@:settings.leading_zeros.label'
    },
    format_number: {
      label: 'Duizendtallen scheiden',
      placeholder: 'Duizendtallen scheiden met een punt.'
    }
  },
  not_found: {
    title: '404',
    subtitle: 'Pagina niet gevonden',
    link: 'Breng mij terug naar de homepagina.'
  }
}
