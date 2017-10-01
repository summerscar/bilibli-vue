<template>
  <header>
    <div class="header" style="background-image: url(http://i0.hdslb.com/bfs/archive/7194f83fcb011b609f354e27d7188c29586df444.png)">
      <div class="bgFlur" style="background-image: url(http://i0.hdslb.com/bfs/archive/7194f83fcb011b609f354e27d7188c29586df444.png)">
      </div>
      <div class="barContainer">
        <div class="bar">
          <div class="index">
            <ul>
              <li><a>主站</a></li>
              <li><a title="画友">画友</a></li>
              <li><a title="游戏中心">游戏中心</a></li>
              <li><a title="直播">直播</a></li>
              <li><a title="会员购">会员购</a></li>
              <li><a title="周边">周边</a></li>
              <li @mouseover="showQR"  @mouseleave="hideQR">
                <a title="移动端">移动端</a>
                <div class="mobile" ref="mobileQR">
                  <div class="qr">
                  </div>
                </div>
              </li>
              <li><a title="萌站">萌站</a></li>
            </ul>
          </div>
          <div class="user">
            <ul>
              <li  @mouseover="avatarBigger" @mouseleave="avatarSmaller">
                <div class="detail" ref="userDetail">
                  <div class="username">bilibili</div>
                  <div class="up">
                    <div class="left">硬币 666 B币 666 </div>
                    <div class="right">邮箱 手机</div>
                  </div>
                  <div class="down">
                    <ul>
                      <li>个人中心</li>
                      <li>投稿管理</li>
                      <li>B币钱包</li>
                      <li>直播中心</li>
                      <li>会员购订单</li>
                    </ul>
                  </div>
                </div>
                <a>
                  <div class="avatar"ref="avatar"></div>
                </a>
              </li>
              <li><a title="消息">消息</a></li>
              <li><a title="动态">动态</a></li>
              <li><a title="稍后再看">稍后再看</a></li>
              <li><a title="收藏夹">收藏夹</a></li>
              <li><a title="历史">历史</a></li>
              <li><a title="投稿">投稿</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {throttle} from '@/common/js/utils'
  export default {
    name: '',
    methods: {
      avatarBigger () {
        throttle(() => {
          this.$refs.avatar.style.transform = 'scale(1.7)'
          this.$refs.avatar.style.border = '1px solid white'
          this.$refs.userDetail.style.transform = 'scale(1,1)'
        }, 300)
      },
      avatarSmaller () {
        throttle(() => {
          this.$refs.avatar.style.transform = 'scale(1)'
          this.$refs.avatar.style.border = '0'
          this.$refs.userDetail.style.transform = 'scale(1,0)'
        }, 300)
      },
      showQR () {
        throttle(() => {
          this.$refs.mobileQR.style.display = 'block'
        }, 300)
      },
      hideQR () {
        throttle(() => {
          this.$refs.mobileQR.style.display = 'none'
        }, 300)
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;

    div.header{
      height: 170px;
      background-position: center;
      position: relative;

      div.bgFlur {
        width: 100%;
        position: absolute;
        top:-20px;
        filter: blur(4px);
        background-position: 50% 10px;
        height: 62px;
      }

      div.barContainer {
        position: absolute;
        height: 42px;
        width: 100%;
        background-color: rgba(255,255,255,0.4);

        div.bar{
          max-width: 1160px;
          min-width: 800px;
          margin:0 auto;
          height: 100%;
          a:hover{
            text-decoration: none;
          }
          div.index {
            float: left;
            li{
              float: left;
              line-height: 42px;
              font-size:12px;
              padding: 0 10px;
              position: relative;

              div.mobile {
                cursor: default;
                position: absolute;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAACuCAMAAAAF+ph9AAAC9FBMVEUAAADl6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e/l6e////9AntEAodb9/v32//8iIiL/9umT3vWGiItMTU2qrbFsbW8BAQHv+v2/wsf///hBoNT+8+VBo9hcXV7e4+iX5Pr++u1GreV2eXv//vKa6f9DptxHsOm7vsDa3uJEqeDHzNFwcnUUR2g/ms1CQ0N6foHQ1dpmaGoDJVGmqKiIjI6anJ/+MX+f8P/5+fiAhIVSVVbz8/DP0dMze6WRk5UOHzFItO42OTvW2dywtLdDXWsRPV02jLv/NIcUSG9eZGcmV3QOMUpbrPnt7Oqj9//i5+y5ubqYkYxCUVskOkkuLi+TmJqNkJI3U2lMWWIAFTxfu//u6N0EDCY6k8Q2hrG0rqieoqUtcpknYYRdb3h5dnLk5OLj4NcXUXXIwbdTfY0nTmgMDxSs/P/17+PEx8pNZ3MhLjnNycPYy8EjRVwNCAlCquOjoqBndn+Hf3wNKkFLuPTZ1s2fmpUzRFG/uawsaIkyXHddWFQaGh2L2/SK0ulogI47Zn4cWX5my//p7/GGyd2tp55tYF+JHUhyEC097P9Kf7A7bo9LZohLcH9stv9ll6Y/dZx0i5eLufrv9vZbn+pvxOJai52o2vipnpPpLHi6BjuZyvp3zOl8peKEm6a4Jl/NB0PC3exBvOK4yNN9vNBmobRAW3rI8vtJk988sNwBVMxyrsIwnbKbp6/OKG/+tWPg+f1MhcZuj8BvqLclfa1Scp73nYqYACg1ndQ+idJ0t8z/ybsrZZb/OJGkHFNOv/472PJewOL+39NeLD4nrtt8qLf/saX/z3V1Rlc4CQ5D0/yl0eiRuceMorWhfYGFVGnEf0JsSEB8WTdIKyReBx8acuJamNPl18b/gXWkbDR4v/wBNp/bTm7ddGv//7e7lKjvwJrzT4zVllG7QDxeFTWRAAAAG3RSTlMA8CEORi/G1c6P213hrT90alCCfJY3pDWusDmX+H4kAAAcAUlEQVR42uzZsW2DQABGYUPPBO900DJWlsoWyA0NbqJ0XgGJYQItNg5BEZec3hsA0KdfXHGX55VVQXYVVXnZX5mhwFLxA4SKTKv2G2Q6Ayj2G5BtGmiggQYaaKCBBhpooIEGGmigQVKDoZviRh1H6zaeOI0DmyUz6OKLOFrcbnxjo0QG9fiKoA9H6+N2t4ZVaQ2Wb/283tunNeG3az7GhZZVSQ2GZZt1OLP3+ZUDq1IadPMK6nBut4d/bVqDKcZrOLl5exOrUhrMu7yHk2sfzpvkBm04Ow000EADDTTQQAMNNNBAAw000EADDTTQQAMN/rNBE74pd4Mu9uH0+r91z0RIEqs0AA1AA9AANAANQAPQADQADUAD0AA0AA1AA9AANAANQAPQADQADUAD0AA0AA1AA9AANAANQAPQADQADUCDr/bOOyqtK47j3Xvv9l4PDlZB2SJTQASqoqAoGsG99957722iSbOa0cymaXradCQd6d577733bv/p772HgBrb057W2qZfEyDweHI/77fu774XEPqfAehvYyDPQMc6AxYfoWOcgal5AKFjm0GC00eN0DHNQJAt1hzjDAQOy3DSMc6gskoWkpSjjzmGGXAKQng+PiFJPZXHLAMBv+wFcYiPzzAv+9/MwMrn60yCP8kgw2ifrbLwAmXV+f9eBgnmvBgFyoxi/um8oGJtVQ6X5/9r40GGjn41JpSp+/P1gaF8OCnXlEePijLmqf59DCqNGPv6YoXeKPhDDE68EJFqr+RrC23lshynpYqQc6zQoPp3MRDofQkEKrPgj8XEcxGhsChGbPNEUtxE1dadwzJSYqWmqoef8G9iECYhEMTzBfPzwsknws0JSyO4gAwkDr9mi49MphRbqsuVgYE+lHhxYkuOQ/XvYZChw740mgcBAis/5xS4P/Wks9BZJy2B4DLYgKntdWqGxSHE0HmBvEAfgDBHQSa+t9kqWBHXdB39oi4BE1GK58jlTDONhvO8TPfi0xCl4xHo8qMROJnYxGBrTopT+lCihg83Lml4b79dlR22+No+vOzyPfrFfbkxSKAyqtUSq9GYx2BizEeCBZg4Crglit9TTl6E4Jwz4PnBnLK4Pp+lxCvbqYwrz45fAQyuPAqDfH2CVm/SGRUZezAhhT6MZtZL1HkcN4AESa5ZAAhsxDzojHMWILgUEGRszOkTw1hDQny8pZl7EBgyu1UcV5YdvxIYvPoSmq+8fixn+fHjcZSahn1BuN20JwZjAafWQZWK+X5sNpsBD/TsXnUGQFjAABxB4ejpk8GAlUnlPNfoieHz7vYYgo+9XCkrzw775xmsQQskV2NC8vzc6UzsSwpTfzC+utKRB5tEsdnTBIOElumWFj4M4rx5CM4EK2A448qSZEqZT2yVWEMMP/A2GL7m7tt83BJbZpWBMgvrH2ewBy2Qgh+NKcUYrFdj33mC7a16FcrQsv3YWoRsvX4tbLYZoUsWfkOZLlE8XJ746KNVQy2P8u6+7bZAzd3XvDhnAIEub5DN7uwLjOth/tMMroajyvcOdaw07FZlOzBYSEEA1U0euxfsgM4GkU5x2QIzUHVq4h51jnVuN9IrdVVvX/Miz4cHdkCpjMejEoSyfFbpIy5jCP5hBmC2vWzkkUobht2SqLDvIuFIfWXCNJstQbm9bHYvvxICwrkLzGBj+dtPTlakkRZVb3/7xbth2OAQpMSzzX1iiI1KZSBvtlwJhjCvYnyHhpdVNLACFMa2IY8MfLMpElPKNPvSfBcL4zy9mc02Maf9pqnK6YwTvRCcgFB7wTXX3EunfgWur+HxyiYgBLqkLNPaH+2bbb5jJy9u66zYR1zOQt66Gi+rCASokm1C7uQvj8JX09V58eTHz6WDGRwVgmm6t1drVqRFy/MUUCqds2CaYL0XGGTBHkC4pEbD0/RsDXRDkG19n+6s0mzZ6RNSNqsJDAzp8HJFMKrlNQRwhHa5YxpC2LSKCog6IhoorOoogwIn+EFIXAICvzeXCeYSj+sk7Qty46kIOW4DBrUuBm01ZSFJTaaJuLlCIeTRAZHB4Xy0jxfS1wyZU7lVTtDnw45UuQaEIvFyCn6zw2HWt5vZZgUipH/3QciCuF0lN0ryGZVYxVnCEtp7VfB+M7sOR0aFQfXsNWEGkrPXvHjNvVMkA7jZnhRXbcVNDWVzEOIaKnDwuMTesb2DsVPsI6siAkICm21F7YRNXr2shgAGECOPjjHZXNNiw83pq69/EMeTrszS0hQSxZ6jMzAYMcQL+NgYZ+QjdJpXjYjQ7U6CQS4XE2q7OSUprrk7UueX86Q4kDKEssJuGg4O6q7oHoeAoEzKI21Qy45StTCXOyIggVqegOtqM1U6DlH8O6TCgNUBd+ZlYuQbz0jAdKYiAcxicWDco66Dt2vZbBbcSQCgJyieh9C71cAgqVRX0d8/OlDQYAkprxln7W+rsD/7pDiEMoTKaG6wCCA1Tvb5UAGBWZmf28v45E26YHkn0Ehl7a+NqWcYIjlk+fduREBAgHB1ky9OyNVqidG150F4iFHEw+zZiwQtQwdO2w61QS6woCvAGbzbBjffe82Lt2ks1WvXrk0M5fUp49ZmNXZjDJGhoDoJegm8kOFQeeRIbheN210NFZPYjlDm5s33f3vDqlWr7t+4zAxMXZKW0uyoBFoa+GF8YYQQGEj37QozsrIMNrqvRB4Z1W9ghSWEQVi40ouBQAIM9GxQP8b9MQid781g173X3K3xEYv7+uKSJvp8Qp50fIGDReO13fiLrIHJWcujj1omGd0MdjcOHql+MjBQnA0Vxf0HV6167vnNVz23ibO8DNT1OeHhRaWlZr0cYkNTK2EGwgL9YFYXxrVNrbtubr1+Fz0eW/f4YroJe8IBUVCntbBbehkGjImg6OmknE4wuE0zN0GuLuMNO7NoYPYljSOiYLitoA8MZHXjDWwtzR8YQHKMG1OhrIPP37DqubfYm547OLisDDIGDUXhRUWAIRdikk0oDQCtrmkMptH8ufTr0u8p2H64FWM5HGyVNo9igOUCmu8ebQzm5ErkdUQe42dAPJhnB5a5DBDY57QMl+vbsGiDzVwv8vf3D+aSwlw/dj0OCo5ZW8YLDCyXoPZNB8EQNvVuWnXVKxl4GZWQKSlNnOkJD49lIcR/Vyok7ODQDLetHj4ko0m65pH1jzQduj47DCts+0ddDPKggMZ6CW0ujTNN0FXz5IULIR5YlO654URV39g4bsxl975lawv2nxOYAdQPwcFdTp9h6LVOKtCm+59fddVVN1x11apNjXgZZa0YK9qGVU3h7HZ080zrmkcAQsThm2kbevmDXRU5O6QR0vT1TZP7Wu9kmUe1VK2Ao+CetsdhoFFpnEOYwfnzGLxX5WbAK3f27MdZbPbmW27ZPI6D5hhwu3vZ04MltK7qF7Zma2SaQjR4/yYCAPw5+D5eRtEzS4tuxvhmcIXbOyKEwu33pAdE7LuP1s0GTdWsCQBJ1x9qTW+i19cN2gRElsSSdgy3e9R6ebuKw2SZTVR54J0bJ5SeblGKnNYF+ePALQee+CjabQhB3PqNMPWkMXuac5LEGnGSRHL/8weBADC44U28jBq0loarcOS2Ioe8SRghjFhvXxMR0WTAba+81QsUnk4nIES0NsVGReNgzJp58EqMIx2QKAECzRylZthy6Qo6Qqd7d1MRUjWLfeYkW5tJG2UPfvTEgQOEIRDDpyBgblvjODdhKkepVIrFL5R1ks5AQtiMl1EV5tI7IrEqOUc/fWjN+jVrIg53CFubKvA4WO6nuQw7BAhp+up9+qzx4OCg4JLCp9PvvFLFupKsFK7Ox1gguBLTJPMZQK0s6NS4m4ghSfyg+kb/V5448N3jT2zkwujdGIK52P/lLzqSeBZLuWVC8uYNm25YtfwMMjuLgEFCkZ/g9l0d9prse1p3bBc+HcUdJLy3EQ9ubW1ds68wqyRrsIILhtBol0ojOvKxL8kgiippfYHBJQuaiWqLzGMIzv0YczcCg+8PvCISuQBQEF5+/Mvg8YY4u9FoTUAf3PD8/RSDg3gZZSoNDy+YaY61cRC6VYCiDkWk7xibNdd/dODbJz5po4nUzT0dxhHsD36hzWrDOCtHKM2RuxjQ9xD2sJjBSQiFbQcGbkNwlHBx5qe3fPfGAx+NBM8ZQhDcBL/8+jPcxknZVgUCjR68AexgFREQ8DIKGEB5UMqvVyNCNQFSaUDHTFf95m+f2czg+nNFuqkRzPUXbZgGCn77MYQE01jrnVdiULSRuKfhK+G9Fx3nLWis65M8Cwtx1bVQJb7yyxsPPPCJCft7KUgUDMbVPDyrQqCwVzZv+mDT84Qh4GWUrigcVMrHZoqBUChcPZOGRz5+4/G3DBg+I6RwInyVbH7i017IFPW0Lu3hiNXCO+988MFbd8E9BMmr9RAPFraVM3viAt2poS8U6Mk/fgAYGDF4gMgLg4g2unbYHoZAHK0hQS6nQ2B8bhk7CLSxcEJFDmxlItCAUChdIynBXR+/8aEt0vNRaYNP3HLLgbdaWhpxRUc6VJIg6eF90tWrA4Str908nwEICgZzuXuNDeYLPftp2PDRzx/6dcFscaSNGyQSgS8Q3oArsnkhhSSCqToMitoE/tCNl01pLaVFRVAs1+I0loq0A6l0NguDHXz4VgX2il2vHDh44MCnXcFckePpiABS6ft2EI9Wp9tv95RInhKBMxlHAuBpNCHKuCcnYdKRWcvP4orSBqc2duG20RIiOhIRJumFMgnR0eOnYai6aHkfgDP8FI2XSZH95prsztjYlgqM6xhhBIP0w9qSZ14P2v9Jv5fjckc2P/7jgSe0MPHZ30QiAEmb7iEn2kI+omYLCzrLA1S/pCwwaaKq3KesYboWv/wy1582/uYzj2/soo8SWRKXbEwpi1PmMNR5lTpX5w1vvB8M4c3oZekl0eoM1njMNCdkTrdDhOvXKtBAQOu+cdrrXz6Do7lk4IYfsrb/6o3Hb/k0CnPr7WukLgTrtwuFRAH1tHGhK4DORqhDyYMWsqU6hGdxOp05ufwNr3/5ukgUXDL4/vsbtYAgiIuZjrGtw32T2jRaZCSFAAwh6iAw2PQDQnvwXyrfKxcKOspqAz2SmZ9ZgXMzMVDPRYh+qHVHHg56Ochf5O8lPPrVAw98mFuPo2vg2FOKOExZRMS+BGLivNgOCsAOAmXOKmgfiHllmp4u/PgzQSKiRjZsaOz2FwVD+6o0tEaf9IJzlDomlLDvmzCHvv99hK77C7/G86jf4/kSeOA0H2fK+2Pq+FGRNGgcMdF996Sv6SjhUgEryPUDDLK+euCNr+gYz+xrlUqlQnLs2++RkvZQ6Jk4e1cIqh6xT6CyyhlCRQVx2UAJDob9AgRivFzcltVZlNygD6t+coiOaW5hGgTF5547qCa+0XOx8J/W0b7OljxLpNYqYcmNphgIQfr+jRL5PmnEDkcwdy4agsFSdvDxAx9uTKvYuH3N+kOHHjkkBAT3UK4gDIDMeMpRzsJ5DaZNcUmxzrlTMGTVRvglhL2V7K8dLSkx2mJTGtauzTEVGq1eDGATx6YbNm3+oB2h2/7Kr/VdbFVzX2GqUBmgmYtBMTYRzmJkS4XpTVNp2JW5GttInxCVRNXq6rkVU/Z9TU1NO9YQDOw70sns8FoeLLQdxRVqNHDGUWxKSmiZjDIFmdNo3d84MlLBV1vVU9qUxLXJiUNDjP7uknpDJEBwZSq6xMH6IIuDllVhelZ7fDTmZxHzAcY9EcLWbG0jLZIc+9SgSESwgC441Ix49HCEVCgleo7C9YXvkC7RukuO0MkLz8OB7nqzxuLsjE0OHYpdqxHzAAIvJKWlNJdv0yqInoNfZ2JntmR/YzDGXDwaRtiHVUI3qh0mFfonFJbPouv4aVAP4PHtMMKB+IqNjVyaKEjU1t1GFXMwt3kdb2iCUCCkIuIjDIpBui4GoRMWnogDbjag3nW7MbE6OTkxNnZtEtFRV2oSE6fVpmgYb5rar8XBHBFhGuFs3PF+wGKIEnA4YeifkzqKmc/FQaLomqdb17MQsm/vuC+NC60u1yRP9Mzjz3R3BFBRMAKGvoP/WjrxWKj2LLR5hCiZJsRJDYlr16akVCcpZeJhS6mZjP84wdYT24+5RJUUREygtTHReokA/eOqrG3DQbjC3ro+W6d47aaHnQX5jUGYFkw6A0z1g9VkhShMX30P3OzI30EyWLNowkTViaT0luGQiUSLjFdevba5x9mcOFZP1UHGloLYfi5ZgWJRnYHO5/Mr0UoQR9+FRdyBw6/t1Axot1y/+/PH7Dpj4xdBroqqookYdHrAjrGc1VLpTNjMaiHBgEUwWKzzocMe36nkBZZbfGBhWaycgPiYMlZHMVADgywIBNBKypQ4rPGCfBVaGYrhj2NaRmHnQ+t21hY+tvvGh7f4VI/dMZCVNdq/YYOctV4KbvCI/Y6b7oAqoQa997SUqBaXYAAVApI4YcoAqwfUOQcpicnJQ+MUg9HYghTzSEnXBnp2TtE0WlFiZUF6dqY+pafVmQqzc3eu01QXP1U1tO2xbduy7RHC9PUdBQ/vvvGmnEdaB5BqezrBQL24UgZdAdmR06mESAgIqHPQUlKSQ3tqIjHBIFobW9CSq8spAjANsRK0olTJqt2yrrh6A7E0WL0ltXjL1uLi4snHbtp9474drdLDBY/t3r37pptuKtiuVUHDRbgUg5MAQVhuOfSSvNrLwMD50HttZJ3U39uZmFzU0tAQGpoc2nJUR2C4H9H9QCzihoHgbk4s10YMjp9nU/fTdHILSgym1245rsPNJLdnosWK11YXv9BRH8ztnl1XnJr62JZ1AKK5YNvubYcDOqZvAgC7c7Zd/7DWDIX1I+kB0kNRixmccCEiFq2q4jReDJSJKaGhk6l7H84swRjn5Ywd+exIaSwwCG1IsR2dAZMaq9dHdQ2KGrPrdSaDfILalu7mB2/hwOYcDzMm9SaGGwa8DlsxjlIsWO3P1tBEmG4pLt7S2XnH3uLU4nU76e/1NDXdft9ju2/a/ZgdgNxOjDI7Qig9tLCBctIFp5K7GbNAMFjIwLn32tSHHr7ZWtP89dZvjhw5UpRCQoh1LCbgHhCDGjsH7plMDwNKjPkGQ6dIESbgYgB/mXBHcqSgeeyJ7ma8SAo6o6INq58qTk0pHYq1bQEIW7vbWIW3IlT48I0PF2a8t+0OAbnXHenSNTPe62wnnzLnU9kuR/D003pSQhObU6+99trUu556aO/XDyUe+eyuI+FDhDckx6qX9gVi7HREDojF8WYAnNxieDOAg++2A4oItQXsx73P31UYfbB2NrX4oVLos8XuLE69a6aEy92Qn4Fute8uuB2FMW6nzlh3rE+X2hVeU2cKQbyp0BkiJsOhWyGfjyWGJubsvCsVMJByfnMj/uxIylAyAWHIEbYkA3KwdCbd85QfwzUYJsu9oTcOOMBuBvBWFuE2nHkM4GUOw8VwSSCG5HXrJoHBUE5qaupTkmARNP5MCN1nuw9ROvMiYGVen/5IglehiFBGgk5vn9AQp19peF4MZFs6k5NTshN2DWzbaSl/6Km7Urcmf/bOTdffOpQYCmpI7LwPzZfHVmEATDrTy9/94PNTARDEYnHAT+bZAYvBoXzBHTeoRx5fABzAj7SspXWfZd3eoSIwgzuKKQbcaNN2cwbKQKRgqngCWIKqJrvDFuaZMCAkkFSL415Qgg3IlBMWIOGS2Anxr0iNuSUjmXm6gZmZGV3zkSMZGD8cnhya3JAMk6vsPIF3PPDYAYsFDFw+TTEgxs8h/kk8AaNhejOAJxjE6EgGDIISNXo4+B47AEh0+lysXEJ2CISkK2wBBncVBuE289p1W7aFuQic6CqDED3KqgIGHl+IH5i0wORApiwvKChzMwjkdUJqLGJ5Gnlp0YXfPAVZsjGloSFxKLEhuSE0sVMbc1RfIBiQh4/lZkDGSGoITAZrfmygk/5DhhA/9yuMBZmQAQCpnyUZ2O5a10MwyPkcGKyr3kAbfLY4dV2SFpFy1cPHI0pnuWMikRPa83T2ArvdNin2mEHcRAtY/FC+q2dIypH8IKZheW9pio1VGB6amJiSUylYkgEi5MUAzR1ycGzXxvOOM8mAhMFZnEFADBbndxioWAMTQ9B1L21eV1ysfPbZmqxtkB7ustMrFQg0Pw2cdb67MjjzVPfFvRNxvDkCGnFgLBH7crq8m2b0AgyKGWPZtJF1Nlt29h3z4iJj7gjC0N15cgED2ILD9KODNyxkALSAAVDwsgNqK897Wb/NwBRDmyq9Y1t4bI7l2eqOjV1GB8DY2zOOR8grHE+Zu37n5PPOPdPdPYALvOYkL6yS8TxJQZZT2gAFYWcJHHg3A4XNkSnfYxyg1U3JccWUzmhkkoBdOZ610A6YxEC8GUBMgCEQOZP0aS/XZlBREtB57GB+AGSRqYN8sFRYzI/B2Sl7cHNp1v7RDdFwtEx51euezcL+eEQ9Z6/nHbdALgSCMGOh00fmSQo8WUELWQVoif4JQHAtJBj4thazrQLjQQPGkbT68dp8A1o5oqdFTyeqbg+PFWEQTHLUyNpTA23GIFzPikFUejhhQYmMUEx+vjHKXlDlIwvRuB0hRDYZC1OjxOwEPexLroD9RRIM0kzRkVYrjRuM+XJMybqSGEgwrbAlNrw0O9IVxaLaEZMP3XGAwK1VyfWSTET4w8knn+jNQJVbVZYUMgz9Q4/E4uYhOFVzqAYljGCT1ayPrsuDNgJw1Slgdas/mlZhjiS4mPj6lYRAIcH4yvuyY1tY2MUgXg0lEX8wCBPrA1MMHM1HLp12sZcvyCctw8PeBELiknJiIesVZqL8TsWoUW7IN/Il5Moipsdgms0gqc1VkMGRkYFWksLUmNA7O+YCOcZ6AWEe2i54ekQHEULl/s8QTnP3jgh6UeAJYrEMOkiBvD6ZjDeh1Y4V6lTgJ2N7HwJLwjitzlAbg0H58RiDY2UyMqOZuvhIOlpRCtORB+rGOz1R3FCJQJm22hiFJJ54VcVnVMrlHIXXKtOZ5HvzCguqLEk8sZiXZJksNCkEFKuEsa/30onYAqqd6u6u98+qx3jUCkHUYDXJ9WmSMLSSxMmnGFzvZuA2frqeLsHkqzjNwFTxmd6rjedQ5YHKZNV12O0dOmsmcks+VVlArS3jyJktW7bt2tUxk1/J1+riXaYniUcrSUzDQgZQ0shdNsKnGuS0aLiLj4qfv9p40hlLhtm6yCltO3WRVwE5h07de9ddn+99jINWpPLkixmk6RGlGHMdJmQwGvXEsTt1QYo896ylQkwmnc6qZdZhnW1XwbNbHtoLSr12sh2tSNHjFzGA9MiZs2ojsSqF08zUDMdzPZenZD7zwktOOeXsC8+82GNa/Egy+vfT1Tp+V0njhqzaKaNEl19IX1ku4JaujvTb62/0ZpDG8nIWR761Ls2I0JL//YFn9ZWSYAUsI/0hSdJIBrfe6L0mTttV6X3hf6Y+zR0MltbZ6D+q08hbhZX/+wyg0/Kf1PEnuCbNAk9AXBrC2f9BCseffYKnFDj1nOOOaZ10Gjrt0uOOdc2LBb8CD+tMXymnmMQAAAAASUVORK5CYII=);
                height: 174px;
                width: 259px;
                left: -21px;
                display: none;
                div.qr {
                  position: absolute;
                  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhAQMAAAD8yF3gAAAABlBMVEUzMzP///8jKH/HAAABg0lEQVQ4y43SMa6rMBAF0Iss8Rtkt3RsgZIqbCUrCUiWXraFxEbsHVC6QJl/B4JeRBJ4U0Q+UoTHdwYs8UjIegBnih7DU06m6GUU/qRjWdTRu+GSeZSLRFz6pmB4eFXVuwNlm+b28UeFxppV2qfqrn3uxQqwQPx9uy3rLwqgskUiMqNLF8dDfyigBq5lXjTXcVVzre7zFwElWAMQKgaLRLi0F5an4VUPBmB437HA0C2vMY73uSF3YstLJp8EGCDPBEZVB5WTUO2FVSjW1rkOEhJlz2T6NcpFoaIs2ug5xJ2WogJuhhouRdOldm668V01KGZ9M5vkx8mjOtKWfAIMtBe9GKn+rFqT3zROmQ9mmnVJ9wL0nxqOUf0Tj6GNTPdMKDRdwALQuFprfr4IrcWzRCSKpDrKu1gxuYENvSinqv5UnINKt0Am6W+6IRj3sqg5njKH1qpO7gH2s/Tjm6KgmlzqhnP5dVCbgu4Eb/8kbGKfUSAS2nexeEAOA/MUX1twfof6D9FQrIXlpt0nAAAAAElFTkSuQmCC);
                  background-repeat: no-repeat;
                  height: 100px;
                  width: 100px;
                  left: 82px;
                  top: 30px;
                }
              }

              &:hover {
                cursor: pointer;
                background-color: rgba(255,255,255,0.3);
              }

              &:nth-child(1) {
                background-image: url(http://static.hdslb.com/images/base/icons.png);
                background-position:-910px -74px;

                 a{
                   padding-left: 20px;
                 }
              }
            }
          }
          div.user {
            float: right;
            li {
              float: left;
              line-height: 42px;
              font-size:12px;
              padding: 0 10px;
              position: relative;
              &:nth-child(1) {
                width: 64px;
                padding: 0;
              }
              div.avatar {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-image: url(http://static.hdslb.com/images/base/icons.png);
                background-position:-910px -77px;
                transition: transform 0.5s;
                transform-origin: 50% -15px;
                border: 0;
                margin: 3px auto;
              }
              div.detail {
                width: 260px;
                height: 280px;
                background-color: #ffffff;
                position: absolute;
                left: -100px;
                top: 42px;
                transform: scale(1,0);
                transition: all 0.3s;
                transform-origin: 50% 0;
                cursor: default;
                padding: 40px 30px 0;
                border-radius: 0 0 3px 3px;
                box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.16);
                box-sizing: border-box;
                div.username {
                  text-align: center;
                  font-weight: bold;
                  font-size: 15px;
                }
                div.up {
                  border-bottom: 1px solid #eeeeee;
                  &:after{
                    content: '.';
                    clear: both;
                    width: 0;
                    height: 0;
                    display: block;
                    visibility: hidden;
                  }
                  div.left {
                    float: left;
                  }
                  div.right {
                    float: right;
                  }
                }
                div.down li {
                  width: 100px;
                  padding: 0;
                  text-align: center;
                }
              }
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
