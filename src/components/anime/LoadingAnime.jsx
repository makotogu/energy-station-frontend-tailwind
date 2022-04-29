import anime from 'animejs';
import React, { useEffect } from 'react';
import "./LoadingAnime.css";

export default function LoadingAnime() {
    useEffect(() => {
        anime({
            targets: '.loading-block .el',
            scale: [
                { value: 1.5, easing: 'easeInOutQuad', duration: 250 },
                { value: 1, easing: 'easeInOutQuad', duration: 200 },
                { value: 0.2, easing: 'easeInOutSine', duration: 400 }
            ],
            opacity: [
                { value: 0.8, easing: 'easeInOutQuad', duration: 450 },
                { value: 0.3, easing: 'easeInOutSine', duration: 400 }
            ],
            
            translateY: [
                { value: -10, easing: 'easeInOutQuad', duration: 200 },
                { value: 0, easing: 'easeInOutQuad', duration: 200 },
            ],
            delay: anime.stagger(150, { easing: 'easeInOutSine', from: 'center' }),
            loop: true
        });
    });

    var blocks = [];
    for (var i = 0; i < 24; i++) {
        blocks.push(<div className="el"></div>)
    }
    return (
        <div>
            <div className="loading-block grid grid-rows-1 grid-cols-24 w-fit my-8">
                {blocks.map(function (block) {
                    return block;
                })}
            </div>    
        </div>
    )
}
