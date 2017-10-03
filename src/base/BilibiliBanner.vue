<template>
  <div>
    <div ref="main_warp" class="main_warp">
      <div class="warp" ref="warp" v-if="dataArr.length" :style="{transition: 'left '+ animateDelay +'ms', left: (-width) * Bindex + 'px'}">
        <div class="item" v-for="item in dataArr">
          <img ref="image" width="440" height="220" :src="item.pic"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      dataArr: {
        type: Array,
        default: []
      },
      bannerIndex: {
        type: Number,
        default: 0
      },
      animateDelay: {
        type: Number,
        default: 800
      },
      delay: {
        type: Number,
        default: 2500
      }
    },
    data () {
      return {
        width: 0,
        Bindex: this.bannerIndex
      }
    },
    watch: {
      dataArr () {
        if (!this.dataArr.length) return
        this.$nextTick(() => {
          this.width = this.$refs.image[0].width
          this.$refs.warp.style.width = this.$refs.image[0].width * this.dataArr.length + 'px'
          this.$refs.warp.style.height = this.$refs.image[0].height + 'px'
          this.$refs.main_warp.style.width = this.$refs.image[0].width + 'px'
          this.$refs.main_warp.style.height = this.$refs.image[0].height + 'px'
        })
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setInterval(() => {
          this.Bindex ++
          if (this.Bindex === this.dataArr.length) {
            this.Bindex = 0
          }
          this.$emit('change', this.Bindex)
        }, this.delay)
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.main_warp {
    position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: 6px;

    div.warp {
      position: absolute;
      left: 0;
      div.item {
        float: left;
      }
    }
  }

</style>
