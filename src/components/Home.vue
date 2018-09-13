<template>
    <div class="main-home">
        <h1>{{ msg }}</h1>
        <div>
            <button class="btn" v-on:click="greetRemote2">网络请求</button>
        </div>
    </div>
</template>

<script>
    const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
    import axios from 'axios'
    export default {
        name: 'home',
        data() {
            return {
                msg: ' I am page home',
                dataURL: "http://pub.alimama.com",
                method: "/items/search.json",
                //  method: "/items/search.json?q=男装",

               // dataURL: "https://www.baidu.com/",
               // method: "",
            }
        }, methods: {

            greetRemote2: function (event) {
                axios({
                    method: "get",
                    url: API_PROXY+ this.dataURL + this.method,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    params: {
                        q: '连衣裙'
                    }
                }).then((res) => {
                        console.log(res);
                    }
                ).catch((err) => {
                        console.log(err);
                    }
                );

            },
            greetRemote: function (event) {
                let params= {
                    q: '连衣裙'
                };

                axios.get(this.dataURL+this.method, qs.stringify(params))
                    .then(response => {
                        console.log(response);
                    })
                    .catch(err => {
                        console.log(err);
                    });

            },


            fetchData: function () {

                // this.$jsonp(this.dataURL+this.method,
                //     Object.assign(this.$store.state.common, {q: '连衣裙'})
                // ).then(json => {
                //     _this.pageData = json.result
                //     console.log(json.result);
                // }).catch(err => {
                //     console.log(err)
                // })

                this.$jsonp(this.dataURL+this.method,
                    {
                        q: '连衣裙',
                        // jsonp:'cb'

                    },
                ).then(json => {
                    // 返回数据 json， 返回的数据就是json格式
                }).catch(err => {
                    console.log(err)
                })

            },

            fetchData2: function () {
                let params= {
                    q: '连衣裙'
                };

                getRecommend(this.dataURL+this.method,"","").then((res) => {
                    if (res.code === ERR_OK) {
                        console.log("ERR_OK")
                    }else{
                        console.log("err")
                    }
                })
            },






        }
    }
</script>
<style lang="stylus" scoped>
    .main-home {
        text-align center
        h1 {
            font-size 20px
            color rgba(175, 47, 47, 0.4)
            margin 20px
        }
    }
</style>