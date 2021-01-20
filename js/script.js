console.log("Chargement JS - OK !")


var app = new Vue({
    el: '#app',
    data: {
        players: 4,
        componentKey: 0,
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
                        for (k=0; k<this.players; k++) {
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


