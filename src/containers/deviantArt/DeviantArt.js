import React, { useState, useEffect, useContext } from "react";
import "./DeviantArt.scss";
import ArtworkCard from "../../components/artworkCard/ArtworkCard";
import { deviantArtSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function DeviantArt() {
    const { isDark } = useContext(StyleContext);
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        if (deviantArtSection.display) {
            const getArtworks = async () => {
                try {
                    // Use galleryId if provided, otherwise fetch all user artworks
                    const fetchUrl = deviantArtSection.galleryId
                        ? `https://backend.deviantart.com/rss.xml?q=gallery:${deviantArtSection.userName}/${deviantArtSection.galleryId}`
                        : `https://backend.deviantart.com/rss.xml?q=gallery:${deviantArtSection.userName}`;

                    const response = await fetch(fetchUrl);
                    const text = await response.text();
                    const p = new DOMParser();
                    const xmlDoc = p.parseFromString(text, "text/xml");

                    const items = Array.from(xmlDoc.querySelectorAll("item"));

                    const fetchedArtworks = items.slice(0, 4).map(item => {
                        const title = item.querySelector("title")?.textContent || "";
                        const link = item.querySelector("link")?.textContent || "";
                        let image = "";

                        // Try to find media:content
                        const mediaContent = item.getElementsByTagNameNS("*", "content")[0] || item.getElementsByTagName("media:content")[0];
                        if (mediaContent) {
                            image = mediaContent.getAttribute("url");
                        } else {
                            // fallback regex
                            const inner = item.innerHTML || item.outerHTML;
                            if (inner) {
                                const match = inner.match(/<media:content[^>]+url="([^"]+)"/i);
                                if (match) image = match[1];
                            }
                        }

                        return { title, url: link, image };
                    });

                    setArtworks(fetchedArtworks);
                } catch (error) {
                    console.error(`Error fetching DeviantArt artworks: ${error}`);
                }
            };

            getArtworks();
        }
    }, []);

    if (!deviantArtSection.display) {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="artworks">
                <div className="art-header">
                    <h1 className="art-header-text">{deviantArtSection.title}</h1>
                    <p
                        className={
                            isDark ? "dark-mode art-subtitle" : "subTitle art-subtitle"
                        }
                    >
                        {deviantArtSection.subtitle}
                    </p>
                </div>
                <div className="art-main-div">
                    <div className="art-text-div">
                        {artworks.map((art, i) => (
                            <ArtworkCard
                                key={i}
                                isDark={isDark}
                                art={art}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
