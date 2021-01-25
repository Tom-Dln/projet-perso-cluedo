console.log("Chargement JS - OK !")


var app = new Vue({
    el: '#app',
    data: {
        playersNames: ['Tom','Sab','Eri','Mat','',''],
        step: 0,
        playersNb: 0,
        // Suspect | Arme | Pièce
        turnActual: ['', '', ''],
        // Nombre de Tours | Joueur en Cours | Joueur interrogé | Réponses Actuelles
        turns: [1 , 0 , 1 , 0 ],
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
            // Suspects 0-5
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            // Pièces 12-20
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            // Pièces 12-20
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
    },
    methods: {
        validation() {
            // Vérification de Non-Erreur
            if ((this.infos[this.turnActual[0]][this.turns[2]] == 'invalid') &&
                (this.infos[this.turnActual[1]][this.turns[2]] == 'invalid') &&
                (this.infos[this.turnActual[2]][this.turns[2]] == 'invalid')) {
                alert('Erreur de Jeux')
            }
            else {
                // Cas de la Validation par Déduction Simple
                if ((this.infos[this.turnActual[0]][this.turns[2]] == 'invalid') &&
                    (this.infos[this.turnActual[1]][this.turns[2]] == 'invalid')) {
                    this.infos[this.turnActual[2]][this.turns[2]] = 'valid';
                    this.infos[this.turnActual[2]][6] = this.turns[2];
                }
                if ((this.infos[this.turnActual[1]][this.turns[2]] == 'invalid') &&
                    (this.infos[this.turnActual[2]][this.turns[2]] == 'invalid')) {
                    this.infos[this.turnActual[0]][this.turns[2]] = 'valid';
                    this.infos[this.turnActual[0]][6] = this.turns[2];
                }
                if ((this.infos[this.turnActual[0]][this.turns[2]] == 'invalid') &&
                    (this.infos[this.turnActual[2]][this.turns[2]] == 'invalid')) {
                    this.infos[this.turnActual[1]][this.turns[2]] = 'valid';
                    this.infos[this.turnActual[0]][6] = this.turns[2];
                }
                // Cas de la Validation par intermédiaire
                if ((this.infos[this.turnActual[0]][6] != '') &&
                    (this.infos[this.turnActual[0]][6] != this.turns[2])) {



                    this.infos[this.turnActual[2]][this.turns[2]] = 'valid';
                    this.infos[this.turnActual[2]][6] = this.turns[2];
                    }
                console.log('Fin de Vérifications')
            }


            // Suspect
            // if ((this.infos[this.turnActual[0]][6] == '') &&
            //     ( ) ) {
            //     alert('Test')
            // }




            // // Suspect
            // if (this.infos[0][this.turnActual[0]][6] == '' && this.infos[0][this.turnActual[0]][this.turns[2]] != 'invalid') {
            //     this.infos[0][this.turnActual[0]][this.turns[2]] = 'uncertain';
            // }
            // // Arme
            // if (this.infos[1][this.turnActual[1]-6][6] == '' && this.infos[1][this.turnActual[1]-6][this.turns[2]] != 'invalid') {
            //     this.infos[1][this.turnActual[1]-6][this.turns[2]] = 'uncertain';
            // }
            // // Pièce
            // if (this.infos[2][this.turnActual[2]-12][6] == '' && this.infos[2][this.turnActual[2]-12][this.turns[2]] != 'invalid') {
            //     this.infos[2][this.turnActual[2]-12][this.turns[2]] = 'uncertain';
            // }
            









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
            this.harmonization();
            this.forceRerender();
            this.changePlayer();
        },
        invalidation() {
            this.infos[this.turnActual[0]][this.turns[2]] = 'invalid';
            this.infos[this.turnActual[1]][this.turns[2]] = 'invalid';
            this.infos[this.turnActual[2]][this.turns[2]] = 'invalid';


            this.turns[2]++;
            if (this.turns[2] == this.playersNb) {
                this.turns[2] = 0;
            }
            this.turns[3]++;


            if (this.turns[3] == this.playersNb-1) {
                this.changePlayer();
            }


            this.forceRerender();
        },
        harmonization() {
            let occurences = 0;
            console.log('Harmonisation')
            // Remplissage des Validations avec des Invalids
            for (i=0; i<this.infos.length; i++) {
                console.log(`Analyse : ${i}`)
                if (this.infos[i][6] != '') {
                    console.log('Entrée en Mode Harmonisation')
                    for (j=0; j<this.playersNb; j++) {
                        if (this.infos[i][j] != 'valid') {
                            this.infos[i][j] = 'invalid';
                        }
                    }
                }
            }
            // 
            // for (i=0; i<this.infos.length; i++)
        },
        changePlayer() {
            this.turnActual[0] = '';
            this.turnActual[1] = '';
            this.turnActual[2] = '';
            this.turns[1]++;
            if (this.turns[1] == this.playersNb) {
                this.turns[1] = 0;
            }
            this.turns[2] = this.turns[1]+1
            if (this.turns[2] == this.playersNb) {
                this.turns[2] = 0;
            }
            this.turns[3] = 0;
            this.step = 1
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


