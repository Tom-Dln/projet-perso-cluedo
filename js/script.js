console.log("Chargement JS - OK !")


var app = new Vue({
    el: '#app',
    data: {
        players: 6,
        componentKey: 0,
        suspects: {
            olive: ['valid','','','','',''],
            moutarde: ['','','valid','uncertain','',''],
            pervenche: '',
            violet: '',
            rose: '',
            leBlanc: '',
        },
        armes: {
            cleAnglaise: '',
            chandelier: '',
            poignard: '',
            revolver: '',
            barreDeFer: '',
            corde: '',
        },
        pieces: {
            salleDeBains: '',
            bureau: '',
            salleAManger: '',
            salleDeJeux: '',
            garage: '',
            chambre: '',
            salon: '',
            cuisine: '',
            entree: '',
        },
    },
    methods: {
        test() {
            for (i=0; i<this.players; i++) {
                if (this.suspects.olive[i] == 'valid') {
                    for (j=0; j<this.players; j++) {
                        if (this.suspects.olive[j] != 'valid') {
                            this.suspects.olive[j] = 'invalid'
                        }

                    }
                }
            }
            this.forceRerender()
        },
        forceRerender() {
            this.componentKey += 1;
        }
    },
    mounted() {
        this.test()
    },
})


