// Tiles store module

const initialMatrix = () => {
  const colors = ['#FFF8DC','#FFEBCD','#DEB887','#BC8F8F','#FFF8DC','#B8860B','#D2691E','#A0522D','#A52A2A','#800000',]
  const DIM = 10;
  let m = [];
  for(let i=0 ; i<DIM ; i++){
    for(let j=0 ; j<DIM ; j++){
      const rndColor = colors[Math.floor(Math.random() * 10)];
      m[(i * DIM)+ j] = {i, j, color:rndColor};
    }
  }
  return m;
}

export default {
  state: {
    tiles: initialMatrix()
  }
}

