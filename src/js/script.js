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

        let section = document.querySelector(".liste-films");

        for (let index = 0; index < this.totalFilm ; index++) {
            //console.log(data[index].title);
            //console.log(data[index].overview);
            let article = document.querySelector(".template .film").cloneNode(true);//cloneNode ducplicate l'element chercher
            article.querySelector("h2").innerHTML = data[index].title;
            /*if(data[index].overview != ""){
                article.querySelector(".description").innerHTML = data[index].overview;
            }else{
                article.querySelector(".description").innerHTML = ;
            }*/

            article.querySelector(".description").innerHTML = data[index].overview || "Aucune description";

            section.appendChild(article);//Ajoute "article" a l'interieur de section dans le html.
        }
    }
}