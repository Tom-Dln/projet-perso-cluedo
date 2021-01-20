console.log("Chargement JS - OK !")


var app = new Vue({
    el: '#app',
    data: {
        playersNames: ['To','Sa','Er','Ma','',''],
        playersNb: 4,
        turns: ['',''],
        componentKey: 0,
        version: [
            // Suspects 0-5
            'Olive',
            'Moutarde',
            'Pervenche',
            'Violet',
            'Rose',
            'Leblanc',
            // Armes 6-11
            'Clé Anglaise',
            'Chandelier',
            'Poignard',
            'Revolver',
            'Barre de Fer',
            'Corde',
            // Pièces 12-20
            'Salle de Bains',
            'Bureau',
            'Salle à Manger',
            'Salle de Jeux',
            'Garage',
            'Chambre',
            'Salon',
            'Cuisine',
            'Entrée',
            // Types de Cases 21-23
            'Suspects',
            'Armes',
            'Pièces',
        ],
        infos: [
            [
                ['valid','','','','',''],
                ['','','valid','uncertain','',''],
                ['','','','','',''],
                ['','','','','','invalid'],
                ['','','','','',''],
                ['','','','','',''],
            ],
            [
                ['','','','valid','',''],
                ['','','','','',''],
                ['','invalid','','','',''],
                ['','','','uncertain','',''],
                ['','valid','','','',''],
                ['','','','','',''],
            ],
            [
                ['','','','','',''],
                ['','','','','',''],
                ['','','','','',''],
                ['','','','','',''],
                ['','invalid','','','',''],
                ['','','','','',''],
                ['','','','','valid',''],
                ['uncertain','','','','',''],
                ['','','','','','valid'],
            ],
        ],
        // suspects: {
        //     olive: ['valid','','','','',''],
        //     moutarde: ['','','valid','uncertain','',''],
        //     pervenche: '',
        //     violet: '',
        //     rose: '',
        //     leBlanc: '',
        // },
        // armes: {
        //     cleAnglaise: '',
        //     chandelier: '',
        //     poignard: '',
        //     revolver: '',
        //     barreDeFer: '',
        //     corde: '',
        // },
        // pieces: {
        //     salleDeBains: '',
        //     bureau: '',
        //     salleAManger: '',
        //     salleDeJeux: '',
        //     garage: '',
        //     chambre: '',
        //     salon: '',
        //     cuisine: '',
        //     entree: '',
        // },
    },
    methods: {
        validation() {
            for (i=0; i<this.infos.length; i++) {
                for (j=0; j<this.infos[i].length; j++) {
                    if (this.infos[i][j].find(element => element == 'valid') != undefined) {
                        for (k=0; k<this.playersNb; k++) {
                            if ((this.infos[i][j][k] == '') || (this.infos[i][j][k] == 'uncertain')) {
                                // console.log(this.infos[i][j][k])
                                this.infos[i][j][k] = 'invalid'
                            }
                        }
                        console.log('Check')
                    }
                }
            }
            this.forceRerender()
        },
        // showArray() {
        //     for (i=0; i<this.infos.lenght; i++) {
        //         if (i == 2) {
        //             for (j=0; j<9; j++) {
        //                 for (k=0; k<6; k++) {
        //                     console.log(this.infos[i][j][k])
        //                 }
        //             }
        //         }
        //         else {
        //             for (j=0; j<6; j++) {
        //                 for (k=0; k<6; k++) {
        //                     console.log(this.infos[i][j][k])
        //                 }
        //             }
        //         }
        //     }
        //     this.forceRerender()
        // },
        forceRerender() {
            this.componentKey += 1;
        }
    },
    mounted() {
        this.validation();
        // this.showArray();
    },
})


