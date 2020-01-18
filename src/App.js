import React, { useState, useEffect } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 3000,
      }
    );
  }, []);

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              required
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31258932?s=460&v=4" alt="Renan Bona" />
              <div className="user-info">
                <strong>Renan Bona</strong>
                <span>Ruby, Ruby on Rails, Angular</span>
              </div>
            </header>
            <p>Este é o seu portal de desenvolvimento Senior X. APIs – navegue em nossa biblioteca de APIs para atender sua necessidade</p>
            <a href="https://github.com/renanbona">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31258932?s=460&v=4" alt="Renan Bona" />
              <div className="user-info">
                <strong>Renan Bona</strong>
                <span>Ruby, Ruby on Rails, Angular</span>
              </div>
            </header>
            <p>Este é o seu portal de desenvolvimento Senior X. APIs – navegue em nossa biblioteca de APIs para atender sua necessidade</p>
            <a href="https://github.com/renanbona">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31258932?s=460&v=4" alt="Renan Bona" />
              <div className="user-info">
                <strong>Renan Bona</strong>
                <span>Ruby, Ruby on Rails, Angular</span>
              </div>
            </header>
            <p>Este é o seu portal de desenvolvimento Senior X. APIs – navegue em nossa biblioteca de APIs para atender sua necessidade</p>
            <a href="https://github.com/renanbona">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31258932?s=460&v=4" alt="Renan Bona" />
              <div className="user-info">
                <strong>Renan Bona</strong>
                <span>Ruby, Ruby on Rails, Angular</span>
              </div>
            </header>
            <p>Este é o seu portal de desenvolvimento Senior X. APIs – navegue em nossa biblioteca de APIs para atender sua necessidade</p>
            <a href="https://github.com/renanbona">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31258932?s=460&v=4" alt="Renan Bona" />
              <div className="user-info">
                <strong>Renan Bona</strong>
                <span>Ruby, Ruby on Rails, Angular</span>
              </div>
            </header>
            <p>Este é o seu portal de desenvolvimento Senior X. APIs – navegue em nossa biblioteca de APIs para atender sua necessidade</p>
            <a href="https://github.com/renanbona">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
