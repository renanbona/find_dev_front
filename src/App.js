import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
