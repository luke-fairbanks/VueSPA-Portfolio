<template>
    <div class="post-wrapper">
        <div v-for="index in 3" :key="index" class="item-wrapper" :class="(index+1)%2==0 ? 'left' : 'right'">
            <div class="item">
                <div class="title">

                </div>
                <div class="image">

                </div>
                <div class="description">

                </div>
                <div class="skill-wrapper">
                    <div v-for="i in 3" :key="i" class="skill"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes pulse-bg {
    0% { background-color: rgb(184, 176, 194); }
    50% { background-color: rgb(155, 148, 165); }
    100% { background-color: rgb(184, 176, 194); }
  }
.post-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    margin-inline: auto;
    .item{
        padding: 0.8em;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        .title,
        .image,
        .description{
            width: 100%;
            border-radius: 15px;
            animation: pulse-bg 1s infinite;
        }
        .title{
            height: 30px;
            width: 50%;

        }
        .image{
            height: 300px;
        }
        .description{
            height: 100px;
        }
        .skill-wrapper{
            display: flex;
            flex-direction: row;
            column-gap: .5em;
            row-gap: .5em;
            margin-inline: 2em;
            .skill{
                width: 100px;
                height: 30px;
                animation: pulse-bg 1s infinite;
                border-radius: 15px;
            }
        }
    }
    .left{
        margin-right: 50%;
        border-right: 2px dashed var(--main-accent);
        margin-top: -5px;
        .skill-wrapper{
            justify-content: flex-end;
        }
        .title{
            margin-left: auto;
        }
    }
    .right{
        margin-left: 50%;
        border-left: 2px dashed var(--main-accent);
        transform: translateX(-2px);
        margin-top: -5px;
    }
    @media (max-width: 500px) {
    .left{
        margin-right: 0 !important;
        border-right: none !important;
        text-align: center !important;
    }
    .right{
        margin-left: 0 !important;
        border-left: none !important;
        text-align: center !important;
    }
    .skill-wrapper{
        justify-content: center !important;
    }
    }
}
</style>
