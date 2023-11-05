import React from 'react';
import Pin from './components/Pin';
import Header from './components/Header';

const pins = [
  { title: 'Automatic modulation recognition of DVB-S2X standard-specific with an APSK-based neural network classifier', imageUrl: 'https://th.bing.com/th/id/OIG.fRcLZjbQyqoydxNVDQRg?pid=ImgGn', articleLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0263224119311212' },
  { title: 'Effects of Climate Change on Polar Bears2', imageUrl: 'https://i.pinimg.com/564x/22/73/f4/2273f41681d3f2ed7148688bd57c0ed1.jpg' },
  { title: 'The Lancet Series on Health and Climate Change', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447877932318740/healthcare_research_paper.jpeg?ex=65591387&is=65469e87&hm=4c957bdae81b57376ffc164ab60a27a46393cdfa4ca8b5d0dc9187c0a9d6e2c5&' },
  { title: 'The Black-Scholes-Merton Model', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878192369705/finance_paper.jpeg?ex=65591388&is=65469e88&hm=fd1f39aa5fd30988c6894c7be2f0d8ea095003364437135d31982e514876e0af&' },
  { title: 'Global Warming of 1.5°C', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878473396304/Globalwarmingresearch_image.jpeg?ex=65591388&is=65469e88&hm=2343c71dc48305b7cbce343f87196ec97f30238a537c788d11a7956325b22e50&' },
  { title: 'ImageNet Classification with Deep Convolutional Neural Networks', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878867648564/researchpaper1.jpeg?ex=65591388&is=65469e88&hm=205df43d6e44c786481176ff7645d1df2b7170674c42da95077be3217f56d807&' },
  { title: 'The Human Genome Project', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447877642924032/genetics_reseaerchpaper.jpeg?ex=65591387&is=65469e87&hm=21c3116def554d6b6a97884891c7a45001c959f33deeaf433aacaf63d0aba6d9&' },
  { title: 'Automatic modulation recognition of DVB-S2X standard-specific with an APSK-based neural network classifier', imageUrl: 'https://th.bing.com/th/id/OIG.fRcLZjbQyqoydxNVDQRg?pid=ImgGn', articleLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0263224119311212' },
  { title: 'Effects of Climate Change on Polar Bears2', imageUrl: 'https://i.pinimg.com/564x/22/73/f4/2273f41681d3f2ed7148688bd57c0ed1.jpg' },
  { title: 'The Black-Scholes-Merton Model', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878192369705/finance_paper.jpeg?ex=65591388&is=65469e88&hm=fd1f39aa5fd30988c6894c7be2f0d8ea095003364437135d31982e514876e0af&' },
  { title: 'Global Warming of 1.5°C', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878473396304/Globalwarmingresearch_image.jpeg?ex=65591388&is=65469e88&hm=2343c71dc48305b7cbce343f87196ec97f30238a537c788d11a7956325b22e50&' },
  { title: 'The Human Genome Project', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447877642924032/genetics_reseaerchpaper.jpeg?ex=65591387&is=65469e87&hm=21c3116def554d6b6a97884891c7a45001c959f33deeaf433aacaf63d0aba6d9&' },
  { title: 'ImageNet Classification with Deep Convolutional Neural Networks', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878867648564/researchpaper1.jpeg?ex=65591388&is=65469e88&hm=205df43d6e44c786481176ff7645d1df2b7170674c42da95077be3217f56d807&' },
  { title: 'The Black-Scholes-Merton Model', imageUrl: 'https://cdn.discordapp.com/attachments/1160273839876485140/1170447878192369705/finance_paper.jpeg?ex=65591388&is=65469e88&hm=fd1f39aa5fd30988c6894c7be2f0d8ea095003364437135d31982e514876e0af&' },
  
];

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="masonry ml-5 mt-10 mr-5">

          {pins.map((pin, index) => (
            <Pin key={index} title={pin.title} imageUrl={pin.imageUrl} articleLink={pin.articleLink} />
          ))}

      </div>
    </div>
  );
}

export default App;