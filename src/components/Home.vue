<template>
    <div class="main-home">
        <h1>{{ msg }}</h1>
        <div>
            <input v-model='commodity' placeholder="请输入商品名" type="text"/>
            <button class="btn" v-on:click="greetRemote2">搜索</button>
        </div>
        <div>
            <ul id="v-for-object" class="demo">
                <li v-for="value in pageList">
                    {{ value.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
    import axios from 'axios'
    import {isEmpty} from '../../static/js/StringUtils.js'
    import {print} from '../../static/js/Log.js'

    export default {
        name: 'home',
        data() {
            return {
                msg: ' 搜索淘宝客商品',
                dataURL: "http://pub.alimama.com",
                method: "/items/search.json",
                pageList: null,
            }
        },
        methods: {

            greetRemote2: function (event) {
                var self = this;
                if (isEmpty(this.commodity)) {
                    log("商品名不能为空");
                    return
                }

                axios({
                    method: "get",
                    commodity: "",
                    url: API_PROXY + this.dataURL + this.method,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    params: {
                        q: this.commodity
                    }
                }).then((res) => {
                    print(res);
                    print(res.data);
                     //   print(res.data.url);
                        // self.pageList = res.data.pageList
                        // print(self.pageList);
                    }
                ).catch((err) => {
                    print(err);
                    }
                );

            },

            greetRemote3: function (event) {

                axios({
                    method: "get",
                    commodity: "",
                    url: API_PROXY + this.dataURL + this.method,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    params: {
                        q: this.commodity
                    }
                }).then((res) => {
                    print(res);
                    print(res.data);
                        //   print(res.data.url);
                        // self.pageList = res.data.pageList
                        // print(self.pageList);
                    }
                ).catch((err) => {
                    print(err);
                    }
                );

            },

        }
    }
</script>
<style lang="stylus" scoped>
    .main-home {
        text-align center
        h1 {
            font-size 28px
            color rgba(175, 47, 47, 0.4)
            margin 20px
        }
    }
</style>