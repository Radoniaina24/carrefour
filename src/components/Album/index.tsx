"use client";
import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import CardGalerie from "./CardGalerie";

export default function GaleriePhotoAlbum() {
  const albumFr = [
    {
      title: "Conférence Maurice–Madagascar 2024",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214568/13_fvckse.jpg",
      altText: "Conférence Maurice–Madagascar 2024",
    },
    {
      title: "Salon des Universités 2023 – La Grande Fête des Bacheliers",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219974/11_uerio7.jpg",
      altText: "Salon des Universités 2023 – La Grande Fête des Bacheliers",
    },
    {
      title: "Salon des Universités 2022 – Radisson Blu Antananarivo",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220565/17_dv065p.jpg",
      altText: "Salon des Universités 2022 – Radisson Blu Antananarivo",
    },
    {
      title: "Salon des Universités 2021 – IBIS Antananarivo",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220975/2_xzvvgq.jpg",
      altText: "Salon des Universités 2021 – IBIS Antananarivo",
    },
    {
      title: "Farafangana 2024 – Conférence & Exposition",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221419/4_xitkle.jpg",
      altText: "Farafangana 2024 – Conférence & Exposition",
    },
    {
      title:
        "Fianarantsoa 2024 – Salle Comble sur les Hauts Plateaux de Madagascar",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221667/11_w40bnd.jpg",
      altText:
        "Fianarantsoa 2024 – Salle Comble sur les Hauts Plateaux de Madagascar",
    },
    {
      title: "Mananjary 2024 – Grande Conférence",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222092/1_rmlbxz.jpg",
      altText: "Mananjary 2024 – Grande Conférence",
    },
    {
      title: "Roadshow Universitaire – Nosy Be 2021",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222363/6_sa1lzp.jpg",
      altText: "Roadshow Universitaire – Nosy Be 2021",
    },
    {
      title: "Salon des Universités – Édition Majunga 2024",
      imageSrc:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222706/12_sf2gnt.jpg",
      altText: "Salon des Universités – Édition Majunga 2024",
    },
  ];

  const album = albumFr;
  const [currentAlbum, setCurrentAlbum] = useState("");

  const handleAlbumClick = (albumTitle: string) => {
    setCurrentAlbum(albumTitle);
  };
  const conferenceMauriceMada = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214569/5_crchhq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214570/1_gnzwhd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214569/7_ws4xuh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214569/6_akrxs2.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214568/13_fvckse.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214568/4_kaiwch.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214567/12_lnposo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214568/3_umflsk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214568/2_er4so8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214567/9_vuwyyx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214567/10_wypmad.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214567/11_m2vvop.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214567/8_wbyzc8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756214566/14_o89os4.jpg",
    },
  ];
  const bachelier = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219978/18_f47nal.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219979/19_bplvpo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219977/14_e8ob0g.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219977/17_taiwfj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219977/16_ke5jq8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219976/13_nwtn9l.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219977/15_sud6dp.jpg",
    },
    ///
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219974/10_iuw7gv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219974/11_uerio7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219974/5_x3odkn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219974/9_y04d16.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219974/8_yrj4i1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219972/3_tu1g53.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219972/2_fen481.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756219972/6_vq6byw.jpg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };

  const RadissonBlu = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220567/12_iujjvj.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220568/25_xfmu1n.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220567/24_ygc09m.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220567/23_nmfl4b.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220568/26_cysmeu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220566/22_dgh8p5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220565/18_gkqp12.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220565/17_dv065p.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220564/15_byd05f.jpg",
    },
    {
      src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339480/14_olhdaf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220565/16_karshi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220566/20_fluvfr.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220566/19_dnpber.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220566/21_vacaub.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220564/14_sc3nw7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220563/9_dqzpc0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220563/8_xgnalw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220563/11_zidfoh.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220562/6_bzhdcw.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220562/5_v0lp71.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220562/4_ggsesb.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220562/1_k2ruwl.jpg",
    },
  ];
  const ibis = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220977/10_cy0svr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220978/12_zejmpv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220978/14_zllcdu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220978/15_ezucvf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220978/13_aofyqg.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220977/7_psayea.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220977/8_h1jneq.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220977/9_hwv5z4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220976/5_r8ar0a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220976/6_mwuhxe.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220975/3_ea5uxd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220975/4_vjz5am.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756220975/2_xzvvgq.jpg",
    },
  ];

  const farafangana = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221419/4_xitkle.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221418/6_tgcznp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221418/3_bhhaiv.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221418/1_jrnvds.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221418/2_dufm7o.jpg",
    },
  ];

  const Fianarantsoa = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221667/11_w40bnd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221663/10_asjgas.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221663/9_dnpvkc.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221662/8_y7eaip.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221662/7_wpmjvk.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221662/6_wthpbf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221658/5_c83aql.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221658/4_ldkkvg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221657/3_m2n8jz.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221657/2_jpedfg.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221657/1_gvcxkd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756221657/1_gvcxkd.jpg",
    },
  ];
  const Mananjary = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222092/3_zapvzh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222092/1_rmlbxz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222091/2_yrzxn5.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222091/4_jkqqyz.jpg",
    },
  ];
  const NosyBe = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222366/8_gbr5iz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222365/7_ddquwm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222363/6_sa1lzp.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222361/5_jom30s.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222360/3_n66vky.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222360/2_pzlyqa.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222360/4_tog30w.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222359/1_jzsjux.jpg",
    },
  ];
  const Mahajanga = [
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222708/13_it7jcx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222706/12_sf2gnt.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222705/11_aixzri.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222704/10_ftgju9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222704/9_nt0dhf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222698/6_fmadb6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222698/8_oqhpfs.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222698/7_vzyxpt.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222697/1_wuwn5w.jpg",
    },

    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222697/5_tbgnoj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222697/4_istijd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222697/3_h0rwxg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756222697/2_wphq05.jpg",
    },
  ];

  return (
    <section className=" pb-16 pt-12  md:py-20 lg:py-12">
      <div className="max-w-6xl mx-auto  ">
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
          itemClass="px-3"
        >
          {album.map((item, index) => (
            <CardGalerie
              key={index}
              imageSrc={item?.imageSrc}
              altText={item?.altText}
              title={item?.title}
              onButtonClick={handleAlbumClick}
            />
          ))}
        </Carousel>
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[0].title}
          close={() => setCurrentAlbum("")}
          slides={conferenceMauriceMada}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[1].title}
          close={() => setCurrentAlbum("")}
          slides={bachelier}
        />

        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[2].title}
          close={() => setCurrentAlbum("")}
          slides={RadissonBlu}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[3].title}
          close={() => setCurrentAlbum("")}
          slides={ibis}
        />

        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[4].title}
          close={() => setCurrentAlbum("")}
          slides={farafangana}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[5].title}
          close={() => setCurrentAlbum("")}
          slides={Fianarantsoa}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[6].title}
          close={() => setCurrentAlbum("")}
          slides={Mananjary}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[7].title}
          close={() => setCurrentAlbum("")}
          slides={NosyBe}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === album[8].title}
          close={() => setCurrentAlbum("")}
          slides={Mahajanga}
        />
      </div>
    </section>
  );
}
