const wisata = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-2OcRyNdGIFbr8gOz8iYVQ2tMaDugvbJDpY6E2yJd0BDJCxD9ZujArhTLafxT6f0skp-Nzlln1bhVNJpBrR8uMJQ0b_I-LUKugnFhgaodvGvwWzx1pPKV11sZKFzFzcSTtGX83=w408-h339-k-no",
    name: "Pantai Menganti Kebumen",
    rating: 4.7,
    address:
      "Tj. Karangboto, Karangduwur, Kec. Ayah, Kabupaten Kebumen, Jawa Tengah 54473",
    description:
      "Pantai indah dengan pasir putih, tebing karst, dan pemandangan Samudra Hindia.",
    link: "https://maps.app.goo.gl/yDo3ctk8QAupv2yE9",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB83Sq9QfEyknlitrMmA0yqQkDw0HeH-LTcD-0Ru_xECSkgo7sibFVeOaJtcLbmvjI0IvgAh_gNkAzbZ6M6H_aVDj1b-KPUuxEmPpgWi4wsyU6o0rFj1rIkPcmDX9NH8dr5fCkNY=w408-h510-k-no",
    name: "Goa Jatijajar",
    rating: 4.3,
    address:
      "Jl. Jatijajar, Palamarta, Jatijajar, Kec. Ayah, Kabupaten Kebumen, Jawa Tengah 54473",
    description:
      "Goa kapur alami dengan stalaktit, stalagmit, diorama, dan patung legenda Raden Kamandaka.",
    link: "https://maps.app.goo.gl/nPCu9dWTvjDEakPH6",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_maDgxkdOCB68kR5iT9sb_U_Ftqj0nskKUz8h-RFu50cRqQ_xfHmz0XWFbbGu-BjnLNbx1Ku8ZDyFPYgrQzaOkF2lPXVwotxewctDUfVT3eCjZC_KdSZ3ki4mBzZ1sEGgAi33wYA=w408-h306-k-no",
    name: "Pantai Karang Bolong",
    rating: 4.2,
    address: "Karangbolong, Kec. Buayan, Kabupaten Kebumen, Jawa Tengah 54474",
    description:
      "Pantai dengan batu karang berlubang yang menjadi ciri khasnya. Terdapat juga Goa Karang Bolong di sisi timur.",
    link: "https://maps.app.goo.gl/MKoF5Sw93kmJpbhF9",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB9lbWDWQiRU-EYupBZOD7zjdkdDNo8D4FalKXRjOlRs7GQwiLf9vGmDPaGl65QqueAfJdywdBrxAjixIa04VpcumdeJL1likLxSrqjpXx2qvpptmC89vQ2F76FC6RIbxO3tnv8h=w408-h725-k-no",
    name: "Bukit Pentulu Indah",
    rating: 4.4,
    address:
      "Jl. Karangsambung, Parangan, Karangsambung, Kec. Karangsambung, Kabupaten Kebumen, Jawa Tengah 54353",
    description:
      "Bukit dengan pemandangan indah, spot foto menarik, gazebo, hammock, dan rumah hobbit.",
    link: "https://maps.app.goo.gl/vSaYBmmyGPTfK7sP6",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB814dFLujsHaXTFSQpmSNhpTj9OlwXmFqVeijWRk3s68cMrsJncC4ZjGT5WUnyahBPgglud-0jJGn-xO45zctJ88hXW4hqzoRQU0aCuSp1YVokNx9knVRUyN-R-VfbkfsTsFcoo=w408-h244-k-no",
    name: "Curug Silancur",
    rating: 4.3,
    address:
      "Wadasmalang, Karangsambung, Pujegan, Wadasmalang, Kebumen, Kabupaten Kebumen, Jawa Tengah 54353",
    description:
      "Air terjun dengan ketinggian sekitar 20 meter yang jatuh di atas batuan purba.",
    link: "https://maps.app.goo.gl/YKx3cLjrgBfzs3Zx8",
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-gBniBBC_eHrL-iU9RV0Wy3RiAQvHWyZqMW0GC5FNtIGwUVQreFuymweu12MV8XV8Nxm0q2DMLGQ5H0XAFP2b7F0O8J1g9F4xD8pZ8Fwin93OU7KnjytyRSufS0xtsD9uyygYn9g=w408-h306-k-no",
    name: "Benteng Van Der Wijck",
    rating: 4.3,
    address:
      "Sidayutengah, Sidayu, Kec. Gombong, Kabupaten Kebumen, Jawa Tengah 54416",
    description:
      "Benteng peninggalan Belanda yang kini menjadi objek wisata sejarah.",
    link: "https://maps.app.goo.gl/95CQ5FSf9meoUp6m7",
  },
  {
    id: 7,
    img: "https://lh3.googleusercontent.com/p/AF1QipNwX2qoAdyFHgRzuatkosG5dCnEPXleeeMK9k_S=w408-h544-k-no",
    name: "Kebumen Geopark",
    rating: 4.6,
    address:
      "Jl. Karangsambung, Karangsambung, Kec. Karangsambung, Kabupaten Kebumen, Jawa Tengah 54353",
    description:
      "Kawasan geopark nasional dengan situs geologi, biologi, dan budaya.",
    link: "https://maps.app.goo.gl/FvdxMxAUH3wSEbY48",
  },
  {
    id: 8,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_o5HAuy52cU2ueurVX7bBcCewkyMpsAabJCZCFrXputqvYvpR3-NYh2yVfnsypV_O2o-b0kNY5yGOcpzn_SHeYWtVmF1X-cjyRmpiB9wDQ6mv3oyPR37_CgnVpeptZo8wVlWZztQ=w408-h544-k-no",
    name: "Gua Petruk",
    rating: 4.3,
    address:
      "Jl. Goa Petruk, RT.04/RW.01, Ayah, Kec. Ayah, Kabupaten Kebumen, Jawa Tengah 54473",
    description:
      "Goa dengan tiga tingkatan topografi yang berbeda dan keindahan formasi batuan.",
    link: "https://maps.app.goo.gl/7ur7yNdVe69F224o8",
  },
  {
    id: 9,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB8UUAdYFtIwUW-aNEHrfjAqKR6VywOgrwKW4lezo_8D0JMKI5Kx1GSXAOgBtLq9tddm-7kwwY-QMBAIKwmFbN1y1eB-5jepHer6TAYMaCTWYocpqTDmyLDF97-i3u_ixvg_6yB7=w426-h240-k-no",
    name: "Jembangan Wisata Alam",
    rating: 4.3,
    address:
      "Sukadana, Jembangan, Kec. Poncowarno, Kabupaten Kebumen, Jawa Tengah 54393",
    description:
      "Wisata alam terpadu dengan telaga, perahu air, kebun binatang mini, dan wahana permainan.",
    link: "https://maps.app.goo.gl/RuVVBGMpmv36k8wz9",
  },
  {
    id: 10,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_1BcUSjhwzXKmaGI78Nq_7SOM0V-KrrGN8xru965aTyVpQlIPNeCFBnHdlqFSNL-e_KiHrWeBVlle1bpT6YNcphw83qPshOnyQIg7uw6amSgaDnROYCQWQGcUNVNKp1mplk6t4=w408-h544-k-no",
    name: "Pantai Petanahan",
    rating: 4.2,
    address: "Karanggadung, Kec. Petanahan, Kabupaten Kebumen, Jawa Tengah",
    description:
      "Pantai dengan hamparan pasir kelabu yang luas dan gumuk pasir.",
    link: "https://maps.app.goo.gl/3uZFtS6UcggeQzW57",
  },
  {
    id: 11,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB9vIHfFj63OAQkinwQ2mzjUdZlmc2lcLf3u5ULtH_-BXUF8uo3J3Hs1hHhQw6eech8tJbBY5mwmMz9VaDRjkWJO4bP9bw9ytrV16f58WdlYJa5WyZy4fPBX7Yz1as8jbitVkIu2=w408-h306-k-no",
    name: "Pantai Suwuk",
    rating: 4.3,
    address:
      "Suwuk, Tambakmulyo, Kec. Puring, Kabupaten Kebumen, Jawa Tengah 54383",
    description:
      "Pantai dengan hutan cemara laut dan terkenal dengan kuliner peyek yutuk dan pecel.",
    link: "https://maps.app.goo.gl/gC2pxtGTRjkZgqaH7",
  },
  {
    id: 12,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB93PJt_4BN6rOksIMFSsMYa78T4O93C3ffigyRMJLSpYxVBVQozp9QmBbKy0qcQeK5vye_xnh60GfO17rZGoZl5ipwjHZ-flTvP74q9j1oaQZ7piPTUe2baLqLt1JXM0m5nDliT=w408-h544-k-no",
    name: "De Krakal Pemandian Air Panas",
    rating: 4.1,
    address:
      "Jl. Pemandian Air Panas Krakal Bar., Krakal, Kec. Alian, Kabupaten Kebumen, Jawa Tengah 54352",
    description: "Pemandian air panas alami di kaki Pegunungan Serayu Selatan.",
    link: "https://maps.app.goo.gl/TakGuWgYYg2tjkXz9",
  },
];

module.exports = wisata;
