<template>
    <div class="indexContent">
        <img src="@assets/lemo.png" alt="" srcset="" width="260">
        <h1 style="font-size: 3em;">lemon-ui 官方中文文档</h1>
        <div>
            <router-link to="/content"><button class="btn1">开始</button></router-link>
            <a href="https://github.com/daxiancheng/lemon-ui" target="_blank"><button class="btn2">了解更多</button></a>
        </div>
    </div>
</template>

<style scoped>
.indexContent {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
}
button {
    outline: none;
    border: 1px solid transparent;
    padding: 1.2em 2.4em;
    border-radius: 4px;
}
.btn1 {
    color: #2c3e50;
    font-weight: bold;
    background: rgb(252, 235, 72);
    cursor: pointer;
}
.btn2 {
    color: rgb(209, 195, 65);
    font-weight: bold;
    background: #fff;
    border: 2px solid rgb(252, 235, 72);
    margin-left: 20px;
    cursor: pointer;
}
</style>