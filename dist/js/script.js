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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCl7Ly9ET01Db250ZW50TG9hZGVkIHZldXQgZGlyZSwgdW5lIGZvaXMgbGUgZG9jdW1lbnQgYSBmaW5pdCBkZSBsb2FkXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTtcclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG1zKCk7XHJcbn0pO1xyXG5cclxuXHJcbmNsYXNzIE1vdmllREJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBtb3ZpZWRiXCIpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5PSBcImQ0NDdmYWVjMjU2ZDM1YzZmYmE1YTljNDRjNGNjZWZiXCI7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJmci1DQVwiO1xyXG4gICAgICAgIHRoaXMuYmFzZVVSTD1cImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvXCI7XHJcbiAgICAgICAgdGhpcy5pbWdQYXRoID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIjtcclxuICAgICAgICB0aGlzLnRvdGFsRmlsbSA9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtcygpe1xyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVEZXJuaWVyRmlsbXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIHRoaXMuYmFzZVVSTCtcIm1vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9XCIrdGhpcy5hcGlLZXkrXCImbGFuZ3VhZ2U9XCIrdGhpcy5sYW5nK1wiJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRvdXJSZXF1ZXRlRGVybmllckZpbG1zKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2EgbWFyY2hlXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ9ZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhID1KU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlRGVybmllckZpbG1zKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVEZXJuaWVyRmlsbXMoZGF0YSl7XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ZS1maWxtc1wiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudG90YWxGaWxtIDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFbaW5kZXhdLnRpdGxlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhW2luZGV4XS5vdmVydmlldyk7XHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZSAuZmlsbVwiKS5jbG9uZU5vZGUodHJ1ZSk7Ly9jbG9uZU5vZGUgZHVjcGxpY2F0ZSBsJ2VsZW1lbnQgY2hlcmNoZXJcclxuICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaDJcIikuaW5uZXJIVE1MID0gZGF0YVtpbmRleF0udGl0bGU7XHJcbiAgICAgICAgICAgIC8qaWYoZGF0YVtpbmRleF0ub3ZlcnZpZXcgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gZGF0YVtpbmRleF0ub3ZlcnZpZXc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IDtcclxuICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gZGF0YVtpbmRleF0ub3ZlcnZpZXcgfHwgXCJBdWN1bmUgZGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7Ly9Bam91dGUgXCJhcnRpY2xlXCIgYSBsJ2ludGVyaWV1ciBkZSBzZWN0aW9uIGRhbnMgbGUgaHRtbC5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
