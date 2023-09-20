import "./Hero.css";

const Hero = ({hero}) => {
    return (
        <div className="hero">
            <img src="public/foto.png" alt="foto perfil"/>
            <div className="card">
            <h2>
                {hero.name} {hero.surname}
            </h2>
            <p>🗺{hero.city} </p>
            <p>🗓{hero.birthDate}</p>
            <p>📧
                <a href={"mailto:" + hero.email}>
                    isabelopez.cursos@gmail.com
                </a>
            </p>
            
            <p>💾<a href={hero.gitHub}>
                  GitHub
                  </a>
                </p>
            </div>      
        </div>
    );

 };

  export default Hero;