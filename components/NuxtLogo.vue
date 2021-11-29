<template>
  <div class="rfq-scroll-main">
     <div class="rfq-list-scroll-wrapper">
          <div class="rfq-list">
               <div><p>"Hotel</p></div>
               <div><p>"customized </p></div>
               <div><p>"med </p></div>
               <div><p>Morbi </p></div>
               <div><p>dolor </p></div>

          </div>
     </div>
</div>
</template>

<style>
.rfq-scroll-main
{
    box-sizing: content-box;
    color: #333;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    position: relative;

}

.rfq-list-scroll-wrapper
{
    width: 608px;
    height: 30px;
    margin: 25px 0;
    margin-top: 25px;
    margin-right: 0px;
    margin-bottom: 25px;
    margin-left: 0px;
    position: relative;
    vertical-align: baseline;
    display: inline-block;
    color: #333;
    font-family: 'Roboto', sans-serif;
    background: transparent;
}
.rfq-list
{
    height: 30px;
    overflow: hidden;
    display: inline-block;
}

.rfq-list div p
{
    padding: 5px 15px 5px 15px;
    height: 30px;
    margin-bottom: 32px;
    display: inline-block;
}

.rfq-list div p:first-child
{
    animation: scroll 20s infinite;
}

@keyframes scroll
{
    0%
    {
        transform: translateY(0);
    }

    6%
    {
        transform: translateY(0);

    }

    8%
    {
        transform: translateY(-25px);

    }

    14%
    {
        transform: translateY(-25px);

    }

    16%
    {
        transform: translateY(-40px);

    }

    22%
    {
        transform: translateY(-40px);

    }

    24%
    {
        transform: translateY(-70px);

    }

    30%
    {
        transform: translateY(-70px);

    }

    32%
    {
        transform: translateY(-100px);

    }

    38%
    {
        transform: translateY(-100px);

    }

    40%
    {
        transform: translateY(-115px);

    }

    46%
    {
        transform: translateY(-115px);

    }

    48%
    {
        transform: translateY(-145px);

    }

    54%
    {
        transform: translateY(-145px);

    }

    56%
    {
        transform: translateY(-170px);

    }

    62%
    {
        transform: translateY(-170px);

    }

    64%
    {
        transform: translateY(-185px);

    }

    70%
    {
        transform: translateY(-185px);

    }

    72%
    {
        transform: translateY(-215px);

    }

    78%
    {
        transform: translateY(-215px);

    }

    80%
    {
        transform: translateY(-240px);

    }

    86%
    {
        transform: translateY(-240px);

    }

    88%
    {
        transform: translateY(-255px);

    }

    94%
    {
        transform: translateY(-255px);

    }

    96%
    {
        transform: translateY(-288px);

    }

    100%
    {
        transform: translateY(-288px);

    }


}
</style>
