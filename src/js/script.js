document.addEventListener("DOMContentLoaded", function (){//DOMContentLoaded veut dire, une fois le document a finit de load
    let connexion = new MovieDB();
    connexion.requeteDernierFilms();
});


class MovieDB{
    constructor() {
        console.log("New moviedb");
        this.apiKey= "d447faec256d35c6fba5a9c44c4ccefb";
        this.lang = "fr-CA";
        this.baseURL="https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.totalFilm = 8;
    }

    requeteDernierFilms(){
        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourRequeteDernierFilms.bind(this));
        requete.open("GET", this.baseURL+"movie/now_playing?api_key="+this.apiKey+"&language="+this.lang+"&page=1");
        requete.send();
    }

    retourRequeteDernierFilms(e){
        console.log("Ca marche");
        let target=e.currentTarget;
        let data =JSON.parse(target.responseText).results;
        console.log(data);
        this.afficheDernierFilms(data);
    }

    afficheDernierFilms(data){
        for (let index = 0; index < data.length; index++) {
            console.log(data[index].title);
            console.log(data[index].overview);
        }
    }
}