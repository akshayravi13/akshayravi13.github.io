import React from "react";
import "./ArtworkCard.scss";

export default function ArtworkCard({ art, isDark }) {
    function openUrlInNewTab(url, name) {
        if (!url) {
            console.log(`URL for ${name} not found`);
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div onClick={() => openUrlInNewTab(art.url, art.title)}>
            <div className={isDark ? "art-container dark-mode" : "art-container"}>
                <a
                    className={
                        isDark ? "dark-mode art-card art-card-shadow" : "art-card"
                    }
                    href="#art"
                >
                    <div className="art-image-container">
                        <img src={art.image} alt={art.title} className="art-image" />
                    </div>
                    <div className="art-info">
                        <h3 className={isDark ? "small-dark art-title" : "art-title"}>
                            {art.title}
                        </h3>
                    </div>
                    <div className="go-corner">
                        <div className="go-arrow">→</div>
                    </div>
                </a>
            </div>
        </div>
    );
}
