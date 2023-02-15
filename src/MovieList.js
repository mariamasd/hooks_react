import photo from './images/film1.jpg';
import film3 from './images/fim3.jpg';
import film4 from './images/fim4.jpg';
import film5 from './images/film5.jpg';
import film6 from './images/film6.jpg';
import film7 from './images/film7.jpg';
import film8 from './images/film8.webp';
import film9 from './images/film9.jpg';
import './list.css';
import { useEffect, useState } from 'react';
function MovieList () {
  const [recherche,setRecherche]=useState("")
  const movies=[
    {
      image: <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cineserie.com%2Fmovies%2F4581172%2F&psig=AOvVaw33x0KzqNkFFlQTUQ4NjciA&ust=1676410545050000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCPiDpIS6k_0CFQAAAAAdAAAAABAH"><img src={photo} alt="photo"/></a>,
      titre:'TYLER RAKE 2',
      description:"Ovi Mahajan, le fils d'un baron de la drogue indien, est capturé par des ennemis de son père. Pour le sauver, on fait appel à Tyler Rake, un mercenaire sans pitié au passé trouble. Arrivé sur place, ce dernier comprend rapidement que cette mission est plus périlleuse qu'il le croyait",
     rating:<h3>15+</h3>,
     postUrl:<a className='netfix' href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cineserie.com%2Fmovies%2F4581172%2F&psig=AOvVaw33x0KzqNkFFlQTUQ4NjciA&ust=1676410545050000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCPiDpIS6k_0CFQAAAAAdAAAAABAH'>Voir sur netflix</a>

    },

    {
      image:<a href='https://www.allocine.fr/video/player_gen_cmedia=19599507&cfilm=292987.html'> <img src={film3} alt='photo'/> </a>,
      titre:"La Jeune Fille et la Mer",
      description:"À force de volonté, une ado australienne affronte ses peurs pour réaliser son rêve de devenir la plus jeune skipper à boucler un tour du monde à la voile en solo.Starring:Teagan Croft, Cliff Curtis, Anna Paquin",
      rating: <h3>18+</h3>,
      postUrl:<a className='netfix'  href='https://www.allocine.fr/video/player_gen_cmedia=19599507&cfilm=292987.html'>Voir sur netflix</a>
    },
    {
      image:<a href='https://www.allocine.fr/film/fichefilm_gen_cfilm=189549.html'> <img src={film4} alt='photo'/> </a>,
      titre:"Gray Man",
      description:" est le nom de code de l’agent de la CIA Court Gentry, alias Sierra Six. Recruté dans une prison fédérale par son officier traitant, Donald Fitzroy, Gentry était autrefois un redoutable tueur à gages à la solde de la CIA. ",
      rating:<h3> 16+</h3>,
      postUrl:<a  className='netfix'  href='https://www.netflix.com/sn/title/81160697'>Voir sur netflix</a>
    }, {
      image:<a href='https://www.allocine.fr/video/player_gen_cmedia=19593624&cfilm=256880.html'> <img src={film5} alt='photo'/> </a>,
      titre:"Spider-Man",
      description:"L'identité de Spider-Man étant désormais révélée, Peter demande de l'aide au docteur Strange. Lorsqu'un sort tourne mal, des ennemis commencent à apparaître, forçant Peter à découvrir ce que signifie vraiment être Spider-Man",
      rating: <h3>14+</h3>,
      postUrl:<a  className='netfix'  href='https://www.allocine.fr/video/player_gen_cmedia=19599507&cfilm=292987.html'>Voir sur netflix</a>
    }, {
      image:<a href='https://www.allocine.fr/video/player_gen_cmedia=19594534&cfilm=260627.html'> <img src={film6} alt='photo'/> </a>,
      titre:"Morbius",
      description:"Découvrez pour la première fois au cinéma, le Docteur Michael Morbius (incarné par l’acteur oscarisé Jared Leto), anti héros énigmatique et l’un des personnages les plus captivants et torturés des personnages de Marvel dans l’univers Sony Pictures.",
      rating: <h3>17+</h3>,
      postUrl: <a  className='netfix'  href='https://www.allocine.fr/video/player_gen_cmedia=19599507&cfilm=292987.html'>Voir sur netflix</a>
    }, 
    {
      image:<a href='https://www.allocine.fr/video/player_gen_cmedia=19589116&cfilm=266487.html'> <img src={film7} alt='photo'/> </a>,
      titre:"THE OLD GUARD",
      description:"Une petite bande soudée de mercenaires immortels, dirigée par la redoutable Andy, se bat depuis des siècles pour protéger les humains. Mais tandis que le groupe est engagé pour une mission des plus périlleuses, ses pouvoirs hors du commun sont soudain révélés au grand jour. . Car ces derniers ne reculeront devant rien pour détourner les pouvoirs des immortels à leur profit.",
      rating: <h3>16+</h3>,
      postUrl:<a  className='netfix'  href='https://www.allocine.fr/video/player_gen_cmedia=19599507&cfilm=292987.html'>Voir sur netflix</a>
    }, {
      image: <a href='https://www.allocine.fr/film/fichefilm_gen_cfilm=143949.html'> <img src={film8} alt='photo'/> </a>,
      titre:"L'HOMME DE GUERRE",
      description:"Publiée le 13 octobre 2013Men of War est un vrai bon film d’action, qui en donne pour son argent de ce point de vue, mais qui en plus n’est pas du tout aussi bourrin et idiot que ce que l’on pourrait penser.Coté casting d’abord, c’est du solide. Dolph Lundgren est vraiment dans son rôle, tout à fait investi dans son personnage, et même si encore une fois il ne fait pas réellement preuve de talents d’acteur,",
      rating: <h3>17+</h3>,
      postUrl:<a  className='netfix'  href='https://www.allocine.fr/film/fichefilm_gen_cfilm=143949.html'>Voir sur netflix</a>
    },
    {
      image: <a href='https://www.allocine.fr/series/ficheserie_gen_cserie=7157.html'> <img src={film9} alt='photo'/> </a>,
      titre:"Game of Thrones",
      description:"Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.,",
      rating:<h3> 19+</h3>,
      postUrl:<a  className='netfix'  href='https://www.allocine.fr/series/ficheserie_gen_cserie=7157.html'>Voir sur netflix</a>
    }
];
return(
  <>
  <div>
  <input type="text" placeholder='veillez rechercher...' onChange={(event)=>{
    setRecherche(event.target.value)
  }}>
  </input>
  </div>
  {movies.filter((movie) => {
if (recherche=="") {
  return movie
  
} else if(movie.titre.toLowerCase().includes(recherche.toLowerCase())){
  return movie
}
  })
  .map(movie => (
    <div>
        {movie.image }
       <h1>{movie.titre}</h1>
       <p>{movie.description}</p>
       <p>{movie.rating}</p>
       <h3>{movie.postUrl}</h3>
    </div>
  ))}

  </>
)

}      
export default MovieList;