import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Red&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light'
/>" 
          nome="Luiz Marcelo F leite" 
          descricao="Oi, eu sou o Luiz Marcelo. Sou aluno da Labenu. Em breve estarei pronto para atuar no mercado de trabalho e dominando a programação FULL STACK."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/154/154858.png" 
          texto="whatsapp"
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <h2>Contato</h2>
        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/4213/4213922.png" 
          nome="Email" 
          descricao="Luiz_marccello@hotmail.com" 
        />
        <CardPequeno 
          imagem="https://img.icons8.com/ios/500/address--v1.png" 
          nome="Endereço" 
          descricao="Rua 13 de junho, 677 Ed . Campo Grande" 
        />
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://ant.adv.br/wp-content/uploads/2017/06/icone4.png" 
          nome="Engenharia civil" 
          descricao="Há oito anos atuando como Engenheiro civil na área de engenharia dignostica de patologias e como gerenciador de obras particulares e publicas!" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/710/710078.png" 
          nome="Qualidades e Defeitos" 
          descricao="Proativo, gosto de trabalhar em equipe e resolver os problemas da empresa." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/2248/PNG/512/facebook_icon_137647.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" 
          texto="Twitter" 
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/1936/1936319.png" 
          texto="Instagram" 
        />          
      </div>
    </div>
  );
}

export default App;
