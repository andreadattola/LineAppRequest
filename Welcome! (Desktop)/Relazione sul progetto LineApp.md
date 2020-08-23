Relazione sul progetto LineApp

# Relazione sul progetto LineApp

## Requisiti 

* * *

Il software si propone di illustrare una landing page, dove un utente o un guest (utente predefinito) puo settare la modalità di visualizzazione DARKMODE o DayMODE. I dati di controllo di visualizzazione richiesti secondo disposizioni sono : 
1. L'ultimo switch di visualizzazione: ovvero se la visualizzazione precedente è stata in darkmode o daymode
2. Il numero di volte che è stata switchata la visualizzazione 
**Features aggiunte :** 
1. Ho aggiunto un simil timer per simulare un controllo di cambio di visualizzazione in un determinato tempo
2. Azzerando e salvando il timer con il relativo button i dati verrano inviati al nostro database il quale poi verrà interrogato, ci permetterà di visualizzare un controllo dell'ultimo utente, dandoci la possibilità di comparare le attività con quella in corso. 

 ## Tecnlogie utilizzate 
 ### Back-end 
 Date le mie esperienze pregresse pari a praticamente 0 sul fronte del back-end il mio approccio è stato: 
 Ho considerato inizialmente Firebase ma data la dimensione del progetto molto piccola ho pensato fosse più congruo l'utilizzo di Json server : https://github.com/typicode/json-server . 
 Data la mia inesperienza e dei problemi relativi alle cors su chrome ho impiegato circa 1 ora per capire come utilizzare Json server per il mio utilizzo. Tutto sommato essendo la prima volta che lo utilizzavo sono soddisfatto del tempo impiegato.
 
 ### Front-end
 Ho utilizzato ReactJs, in particolare ho utilizzato componenti funzionali e quindi HOOKS. 
 Ho valutato la gestione di Redux ma dato il progetto mi sembrava inutile. 
 Ho valutato di utilizzare Axios ma data la mia inesperienza con axios ho preferito utilizzare le normali fetch, async await per risparmiare tempo.
 #### Bootstrap 
 per lo stile ho utilizzato un po' di bootstrap principalmente il grid sistem