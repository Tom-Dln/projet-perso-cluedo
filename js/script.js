console.log("Chargement JS - OK !")


var app = new Vue({
    el: '#app',
    data: {
        playersNames: ['Tom','Sab','Eri','Mat','',''],
        step: 0,
        playersNb: 0,
        // Suspect | Arme | Pièce
        turnActual: ['', '', ''],
        // Nombre de Tours | Joueur en Cours | Joueur interrogé | Réponse
        turns: ['1','0','1',false],
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
            'Qui ?',
            'Comment ?',
            'Où ?',
        ],
        // J1 | J2 | J3 | J4 | J5 | J6 | Joueur Ayant
        infos: [
            [
                ['valid','','','','','','0'],
                ['uncertain','','','','','',''],
                ['invalid','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
            ],
            [
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
            ],
            [
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
            ],
        ],
    },
    methods: {
        validation() {
            // Suspect
            if (this.infos[0][this.turnActual[0]][6] == '' && this.infos[0][this.turnActual[0]][this.turns[2]] != 'invalid') {
                this.infos[0][this.turnActual[0]][this.turns[2]] = 'uncertain';
            }
            // Arme
            if (this.infos[1][this.turnActual[1]-6][6] == '' && this.infos[1][this.turnActual[1]-6][this.turns[2]] != 'invalid') {
                this.infos[1][this.turnActual[1]-6][this.turns[2]] = 'uncertain';
            }
            // Pièce
            if (this.infos[2][this.turnActual[2]-12][6] == '' && this.infos[2][this.turnActual[2]-12][this.turns[2]] != 'invalid') {
                this.infos[2][this.turnActual[2]-12][this.turns[2]] = 'uncertain';
            }
            









            // for (i=0; i<this.infos.length; i++) {
            //     for (j=0; j<this.infos[i].length; j++) {
            //         if (this.infos[i][j].find(element => element == 'valid') != undefined) {
            //             for (k=0; k<this.playersNb; k++) {
            //                 if ((this.infos[i][j][k] == '') || (this.infos[i][j][k] == 'uncertain')) {
            //                     // console.log(this.infos[i][j][k])
            //                     this.infos[i][j][k] = 'invalid'
            //                 }
            //             }
            //             console.log('Check')
            //         }
            //     }
            // }
            this.forceRerender();
        },
        harmonization() {

        },

        forceRerender() {
            this.componentKey += 1;
        },
        playersAssign() {
            for (i=0; i<this.playersNames.length; i++) {
                if (this.playersNames[i] != '') {
                    this.playersNb += 1;
                }
            }
            this.step = 1;
        },
    },
    // mounted() {
    //     this.validation();
    // },
})


