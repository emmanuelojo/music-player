import { defineStore } from "pinia";
import type { Artiste } from "~/types/Artiste";
import Audio1 from "@/public/audio/1.mp3";
import Audio2 from "@/public/audio/1.mp3";
import Audio3 from "@/public/audio/3.mp3";
import Image1 from "@/public/images/1.jpg";
import Image2 from "@/public/images/2.jpg";
import Image3 from "@/public/images/3.jpeg";

export const useArtisteStore = defineStore("artisteStore", {
    state: () => ({
        currentArtisteObj: {} as Artiste,
        currentSongPlayingObj: {},
        artistesList: [
            {
                name: "Lecrae",
                image: "https://www.billboard.com/wp-content/uploads/2020/03/Lecrae-cr-Alex-Harper-2020-billboard-1548-1584710481.jpg",
                genre: "rap, drille",
                songs: [
                    { title: "Spread The Ops", image: Image1, src: Audio1 },
                    { title: "Third Hit", image: Image3, src: Audio3 },
                ],
            },
            {
                name: "Theophilus Sunday",
                image: "https://www.allbaze.com/wp-content/uploads/2023/02/images-2023-01-09T173701.296.jpeg",
                genre: "chants",
                songs: [{ title: "Lord have mercy", image: Image3, src: Audio3 }],
            },
            {
                name: "Lawrence Oyor",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2HdP6PDZJXQ735UxxFqqwrj9POfIZXsWyNdcEla3B0zij55W8SK0Y8CXu7K94Tr7DasTqrV8PMOPn6f1qSv4-iIo_4EDbabaWrOKKLX8kx_-bQCyip8W36e59QPW-Imh6Ts_j-EdHUwBCwAOuV4vdl32SzJu7fHOyxWXrquqob35Tu9WYw2-Ee7SK1A/s960/6B9D3A38-F5B8-45A5-BBE6-D90BD7D1F63D.jpeg",
                genre: "chants",
                songs: [{ title: "My Daddy My Daddy", image: Image3, src: Audio3 }],
            },
            {
                name: "Nathaniel Bassey",
                image: "data:image/jpeg;base64,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",
                genre: "worship",
                songs: [{ title: "Tobechukwu", image: Image3, src: Audio3 }],
            },
            {
                name: "Dunsin Oyekan",
                image: "https://yt3.googleusercontent.com/2fhv4awwsUEWPvV4jYhRekRN8X3bmHyqMFi6QfjX-N9dh_fal3ZvIK4FLvibtOXDBR-tRInHXw=s900-c-k-c0x00ffffff-no-rj",
                genre: "worship, chants",
                songs: [{ title: "Who Is on the Lord's Side", image: Image3, src: Audio3 }],
            },
            {
                name: "Mercy Chinwo",
                image: "https://guardian.ng/wp-content/uploads/2021/07/mercychinwo_186852469_314502376704257_3787816253684871105_n.jpg",
                genre: "worship, praise",
                songs: [{ title: "Wonder", image: Image3, src: Audio3 }],
            },
            {
                name: "Eben",
                image: "https://mdundo.com/media/picture/267870_AxG2czZ4BQL5qyUMswoPl1rLlZ3i_b.jpg",
                genre: "praise",
                songs: [{ title: "Oil on my head", image: Image3, src: Audio3 }],
            },
            {
                name: "Sinach",
                image: "https://yt3.googleusercontent.com/ytc/AGIKgqMGW6arYVEdo5tVo9iizc3Y2ZQk3Ma5DU90XAU=s900-c-k-c0x00ffffff-no-rj",
                genre: "worship",
                songs: [],
            },
            {
                name: "Frank Edwards",
                image: "https://dailypost.ng/wp-content/uploads/2017/01/frank-edwards-1200x1200.jpg",
                genre: "praise, worship",
                songs: [],
            },
            {
                name: "Victoria Orenze",
                image: "https://trendybeatz.com/images/Victoria-Orenze-Picture.jpg",
                genre: "worship, chants",
                songs: [],
            },
            {
                name: "Limoblaze",
                image: "https://www.selahafrik.com/wp-content/uploads/2022/06/Limoblaze-222.jpg",
                genre: "rap",
                songs: [],
            },
            {
                name: "Miles Minnick",
                image: "https://www.godreports.com/wp-content/uploads/2021/10/miles-minnick.jpg",
                genre: "rap",
                songs: [],
            },
            {
                name: "Chandler Moore",
                image: "https://www.gmusicplus.com/wp-content/uploads/2021/01/Chandler-Moore.jpg",
                genre: "worship",
                songs: [],
            },
            {
                name: "Kari Jobe",
                image: "https://i.pinimg.com/474x/c8/94/58/c8945875fe62339b864f8208f6ab6028--christian-singers-christian-music.jpg",
                genre: "worship",
                songs: [],
            },

            {
                name: "HillSong",
                image: "https://d1xpblio32ctey.cloudfront.net/wp-content/themes/hillsong/images/logo-outline-small.png",
                genre: "worship",
                songs: [],
            },
            {
                name: "Maverick City Music",
                image: "https://i1.sndcdn.com/avatars-000886659397-wgmych-t500x500.jpg",
                genre: "worship",
                songs: [],
            },
        ] as Artiste[],
    }),

    getters: {
        currentArtiste: (state): Artiste => state.currentArtisteObj,
        worshipArtistes: (state): Artiste[] =>
            state.artistesList.filter((artiste) => artiste.genre.includes("worship")),
        praiseArtistes: (state): Artiste[] => state.artistesList.filter((artiste) => artiste.genre.includes("praise")),
        chantsArtistes: (state): Artiste[] => state.artistesList.filter((artiste) => artiste.genre.includes("chants")),
        drilleArtistes: (state): Artiste[] => state.artistesList.filter((artiste) => artiste.genre.includes("drille")),
        rapArtistes: (state): Artiste[] => state.artistesList.filter((artiste) => artiste.genre.includes("rap")),
        bluesArtistes: (state): Artiste[] => state.artistesList.filter((artiste) => artiste.genre.includes("blues")),
    },
});
