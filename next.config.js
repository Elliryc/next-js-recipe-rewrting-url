module.exports = {
  async rewrites() {
    return [
      {
        ///recettes/recette_montitrederecette_123.aspx
        //  source: '/recettes/recette_montitrederecette_:recipe(\d{1,}).aspx',
       // source: '/recettes/:recipe(\d{1,}).aspx',
       // destination: '/recipes/:recipe',

        source: '/recettes/recette_([\-a-zA-Z]*)_:recipe(\\d{1,}).aspx',
        destination: '/recipes/:recipe',
      }
    ]
  },
}
