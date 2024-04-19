const worlds = [
  {
    name: "Beetlejuice",
    img_url:
      "https://goldenglobes.com/wp-content/uploads/2023/11/01-michael-keaton-and-winona-ryder-beetlejuice.jpg",
    banner_url:
      "https://media.themoviedb.org/t/p/w1280/h3qQZLi67lxlqEEygjJFg1yBDDP.jpg",
  },
  {
    name: "Bikini Bottom",
    img_url:
      "https://www.awn.com/sites/default/files/styles/original/public/image/featured/spongebob1.jpg?itok=76tTlV2V",
    banner_url: "https://pbs.twimg.com/media/FQqhs8EXEAMGxff.jpg:large",
  },
  {
    name: "Dune",
    img_url:
      "https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960",
    banner_url:
      "https://wallpapersmug.com/download/1600x900/8e54e9/dune-part-2-poster.jpg",
  },
  {
    name: "Forgotten Realms",
    img_url:
      "https://www.wargamer.com/wp-content/sites/wargamer/2021/06/magic-the-gathering-adventures-in-the-forgotten-realms-spoilers-roleplaying-cards.jpg",
    banner_url: "https://wallpapercave.com/wp/wp5586673.jpg",
  },
  {
    name: "Game of Thrones",
    img_url:
      "https://e1.pxfuel.com/desktop-wallpaper/616/158/desktop-wallpaper-game-of-thrones-seasons-1-eddard-stark-thumbnail.jpg",
    banner_url:
      "https://wallpaperswide.com/download/game_of_thrones_14-wallpaper-3840x2160.jpg",
  },
  {
    name: "Lord of the Rings",
    img_url:
      "https://assets-prd.ignimgs.com/2022/08/02/lord-of-the-rings-thumbnail-1659474646743.jpg",
    banner_url:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/09/10/the-lord-of-the-rings.jpg",
  },
  {
    name: "Make Room!",
    img_url:
      "https://play-lh.googleusercontent.com/4ra-3nXLC3T-HZA7aFju7b-2SZTaWxZCB02olKonhykW5-SV3VpEFPb3u08EWun4qNEP",
    banner_url:
      "https://i0.wp.com/musingsofamiddleagedgeek.blog/wp-content/uploads/2018/09/soylent-green-750.jpg?fit=1200%2C500&ssl=1",
  },
  {
    name: "Roald Dahl",
    img_url:
      "https://i.pinimg.com/550x/2c/9b/fe/2c9bfe3794a190c481bdaaff1bcf9126.jpg",
    banner_url:
      "https://www.aquarellepublishing.co.uk/images/illustrators/Roald-Dahl/Roald%20Dahl%20-%20Roald%20Dahl%20100th%20Anniversary.jpg",
  },
  {
    name: "Star Wars",
    img_url:
      "https://lumiere-a.akamaihd.net/v1/images/image_24641330.jpeg?region=0,276,2160,864",
    banner_url:
      "https://wallpapers.com/images/hd4/widescreen-star-wars-jedi-fallen-order-xmduchjoptay0afi.jpg",
  },
  {
    name: "Stardew Valley",
    img_url:
      "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1711128146",
    banner_url:
      "https://www.wsgf.org/f/u/imagecache/node-gallery-display/contrib/dr/29629/ingame_32x9.png",
  },
  {
    name: "Studio Ghibli",
    img_url:
      "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19998455/jbareham_200520_1021_ghibli_week_0001b.jpg",
    banner_url: "https://i.imgur.com/N4DpAvp.jpeg",
  },
  {
    name: "Wizarding World",
    img_url:
      "https://images.ctfassets.net/usf1vwtuqyxm/4Lx4yGQ3W0daVknu7ayizS/d386272ff997df7578c175fb8b912ef8/HP-F1-philosophers-stone-harry-ron-hermione-hogwarts-express-web-landscape",
    banner_url:
      "https://i.pinimg.com/originals/d2/5c/ef/d25cef70f79e106a6ca34cd613f58fd9.jpg",
  },
  {
    name: "The Legend of Zelda",
    img_url:
      "https://cdn11.bigcommerce.com/s-b72t4x/images/stencil/1280x1280/products/24571/33924/PAS0578__15763.1624831033.jpg?c=2",
    banner_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/387c5339-3062-4edf-85f7-2fa38627441a/d60q25j-14205a71-1898-42e9-acfc-83ea4dff438c.jpg/v1/fill/w_1600,h_900,q_75,strp/zelda_collage_wallpaper__widescreen__by_lockstin_d60q25j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMzg3YzUzMzktMzA2Mi00ZWRmLTg1ZjctMmZhMzg2Mjc0NDFhXC9kNjBxMjVqLTE0MjA1YTcxLTE4OTgtNDJlOS1hY2ZjLTgzZWE0ZGZmNDM4Yy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FZBAvYcbnHJZqqOig5-sdV0U0DVs5_e7zpowm6cxPGQ",
  },
  
  // {
  //   "name":"",
  //   "img_url":"",
  //    "banner_url":""
  // },
];

module.exports = { worlds };
