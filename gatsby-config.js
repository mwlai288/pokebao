module.exports = {
  siteMetadata: {
    title: `Poké Boba`,
    description: `Get delicious poké bowls made to order or create your own. Try our baos. Pair with boba tea`,
    author: `Will Lai`,
    about: `It all started with a diverse group of friends that met weekly for lunch. All from different backgrounds, our love of eclectic food and Boba Tea brought us together.  After one of those lunches, we commented on how there was a lack of these choices in our area and the rest is history. PokeBao is a fusion of Asian & Latin food culture. Our mission is to offer you a wide range of distinctive food choices in a comfortable, modern setting. `,
    story: `1 Vegetarian + 1 Sushi Chef + 1 Meat Lover + 1 Omnivore, drizzle in a surly Chinese/Panamanian Chef, blend in Boba and let it marinate for a few years`,
    poke: `The term “Poké” literally means “to cut or dice in cross-sections”in Hawaiian.  A traditional Poke Bowl is sticky rice served with cubed and marinated ahi tuna or salmon, topped with your choices of vegetables and shoyu. Think of it as a reimagined sushi experience by taking all of a sushi rolls ingredients and throwing them into a delicious bowl. For those who would prefer something other than fish, our modified versions of Poke Bowls offer other options for those who may prefer something cooked or vegetarian. Our bowls can be as SIMPLE or BOLD as you want!`,
    bao: `“Bao” in Mandarin and Cantonese means “steamed buns”.  Bao is a handheld creation that is a fluffy , pillowy and slightly sweet Asian taco filled with your choices of delectable proteins, crispy vegetables, and sauces.  Think of the “Bao” as a vehicle for all the yumminess that will be transported to your mouth.  At PokeBao we offer the traditional Bao as well as a variety of choices from our fusion menu.  You’ll see that our Bao offers a ying and yang of flavors and textures in every bite!`,
    boba: `“Boba Tea” (also known as Bubble Tea, Pearl Milk Tea, or Tapioca Tea) in its most basic form is a tea based drink, usually made with green or black tea and can be customized with an assortment of milks, fruit flavors and toppings. The boba pearls give the drink its unique taste and texture and is a form of starch that comes from a cassava root. It is soft, chewy, slightly sweet, and gluten-free! Boba is slightly sweet and is marinated with brown sugar for flavor. We like to think of the Boba as a gummy bear that adapts to the flavor of your drink as it absorbs the drink’s essence.`,
    address: `2270 Town Center Ave, Viera, Florida 32940`,
    phone: `321.210.5788`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
