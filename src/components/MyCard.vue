<template>
    <div class="intro-wrapper">
        <div class="intro-beginning">
            <p>
                This may be a little forward, but <span>here's my card:</span>
            </p>
        </div>
        <div class="intro-card">
            <div class="left-col">
                <div class="card-photo"> </div>
                <div class="card-info">
                    <div class="name">Luke Fairbanks</div>
                    <div class="title">Full Stack Developer</div>
                </div>
            </div>
            <div class="middle-col">
                <div class="graphic-wrapper">
                    <div class="graphic">

                    <!--   <img  alt="luke-fairbanks's GitHub Stats" src="https://awesome-github-stats.azurewebsites.net/user-stats/luke-fairbanks?cardType=github&theme=blueberry" />  -->

                    </div>

                </div>
                <div class="github-link-wrapper">
                    <a href="https://github.com/anuraghazra/github-readme-stats" target="_blank"><i class="fab fa-github"></i>powered by github</a>
                </div>
                <ul>
                    <li>
                        <h3>
                            Aspiring software developer
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Student
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Entrepenuer
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Athlete
                        </h3>
                    </li>
                </ul>

            </div>
            <div class="right-col">

                <div class="icon" style="background-color: #4B8BBE;">
                    <i class="fab fa-python"></i>
                </div>

                <div class="icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="icon" style="background-color: #95bf48 ;">
                    <i class="fab fa-shopify"></i>
                </div>
            </div>

        </div>
        <div class="intro-text">
            <h1 style="margin-bottom: 0px;">Hello, my name is <span>Luke Fairbanks</span>. <br> Welcome to my portfolio.</h1>
        </div>

    </div>
</template>

<style scoped lang="scss">
body, html{
    overflow: hidden;
}
.intro-wrapper{
    height: 75vh;
   width: 50%;
   max-width: 55vw;
   min-width: 750px;
   margin-inline: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin: auto;
   right: 0; left: 0; top: 0; bottom: 0;
}

.intro-beginning{
   color: gray;
   transform: translateX(-55%);
}
.intro-beginning span{
   color: var(--main-light-color);
}

.intro-card{
   height: 50%;
   max-width: 55vw;
   min-width: 704px;
   min-height: 360px;
   background-color: var(--main-bkg-dark) ;
   display: flex;
   flex-direction: row;
   position: relative;
   color: var(--main-text-color);
   padding: 1em;
   border-radius: 15px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 column-gap: 1em;
}

.intro-card .left-col{
   margin-top: auto;
   margin-bottom: auto;
   display: flex;
   align-items: center;
   flex-direction: column;
   row-gap: 1em;
}
.intro-card .left-col .card-info{
   text-align: center;
}

.intro-card .left-col .card-photo{
   height: 12em;
   width: 12em;

   border-radius: 100%;

   background-image: url(../assets/images/IMG_5619.png);
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}

.intro-card .left-col .name{
   color: var(--main-light-color);
}
.card-info .title{
   color: gray;
}

.intro-card .middle-col{
   display: flex;
   flex-direction: column;
}
.intro-card .middle-col .graphic-wrapper {
   /* background: #151618; */
   width: 23em;
   height: 50%;
   min-height: 170px;
   display: flex;
   align-items: center;
}
.intro-card .middle-col .graphic-wrapper .graphic{
   width: 100%;
   height: 100%;
   min-height: 140px;
   border-radius: 5px;
//    background-image: url(https://awesome-github-stats.azurewebsites.net/user-stats/luke-fairbanks?cardType=github&theme=blueberry);
   background-image: url(https://github-readme-stats.vercel.app/api/top-langs/?username=luke-fairbanks&hide=html&layout=compact&hide_border=true&title_color=7B7DE0&text_color=f5f5f5&bg_color=151618&langs_count=6 );
   /* background-image: url(https://github-readme-stats.vercel.app/api/top-langs/?username=luke-fairbanks&hide=html&layout=compact&hide_border=true&theme=blueberry ); */

   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100%;

   box-shadow: inset 0px 0px 2px 0px black;
}
.intro-card .middle-col .github-link-wrapper{
   font-size: 12px;
   margin-right: 5px;
   display: flex;
   justify-content: flex-end;

}
.intro-card .middle-col .github-link-wrapper a{
   text-decoration: none;
   color: gray;
   display: flex;
   align-items: center;

}
.intro-card .middle-col .github-link-wrapper a i{
   font-size: 15px;
   margin: .2em;
}
.intro-card .middle-col ul{
   list-style: circle;
   margin-top: .2em;
   margin-bottom: .2em;
}
.intro-card .middle-col ul h3{
   margin-top: .4em;
   margin-bottom: .4em;
}

.intro-card .right-col{
   display: flex;
   flex-direction: column;
   row-gap: 1em;
   justify-content: space-evenly;
   margin-inline: 1em;

}
.intro-card .right-col .icon{
   font-size: 64px;
   width: 80px;
   height: 80px;
   background-color: var(--main-contrast-compliment);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   filter: drop-shadow(1px 2px 1px black);
}
// .intro-card .right-col .icon i{
//    /* filter: drop-shadow(1px 1px 1px black); */
// }
.intro-text{
   text-align: center;
   color: var(--main-accent);
}
.intro-text span{
   color: var(--main-contrast);
   text-shadow: var(--main-light-color) .5px .5px;
   margin-bottom: 0px;
}
.intro-text p{
   color: gray;
   margin-top: 5px;
   font-size: 15px;
}

.about-wrapper{
   position: relative;
   display: flex;
   justify-content: center;
}

.about-wrapper .svg-wrapper{
   position: absolute;
   top:0;
   right:0;
   width:100%;
   height:auto;
}

.about-wrapper .svg-wrapper svg{
    height: 3000px;
}

@media screen and (max-width: 750px) {
    header{
        padding-bottom: 0;
    }
    body{
        overflow:auto;
        overflow-x: hidden;
    }
    .intro-wrapper{
        height: auto;
        max-width: max-content;
        min-width: 0;
        width: 100%;
    }
    .intro-wrapper div:nth-of-type(1){
        justify-content: start;
    }
    .intro-beginning{
        transform: translate(0);
        p{
            width: 70%;
            margin-left: 10vw;
        }
    }
    .intro-card{
        flex-direction: column;
        min-width: 0;
        width: 80%;
        max-width: fit-content;
        .right-col{
            flex-direction: row;
            column-gap: 1em;
        }
    }
    .intro-text{
        font-size: .7em;
        margin-top: 2em;
        margin-bottom: 2em;
    }
    .intro-card .middle-col .graphic-wrapper{
        width: auto;
    }
}
@media screen and (max-width: 450px) {
    .intro-card .middle-col .graphic-wrapper .graphic{
        width: 80vw;
    }

}
</style>
